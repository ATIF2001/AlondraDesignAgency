import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Footer from "./components/Footer";
import ServicesOverlay from "./components/ServicesOverlay";
import Sidebar from "./components/sidebar";
import SplashCursor from "./components/SplashCursor";
import StartProjectOverlay from "./components/StartProjectOverlay";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import { servicePageComponents } from "./pages/services/index.js";

function ServiceRouteRenderer() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const ServicePage = servicePageComponents[slug];

  if (!ServicePage) {
    return <Navigate to="/services" replace />;
  }

  return <ServicePage onBackHome={() => navigate("/")} />;
}

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProjectOverlayOpen, setIsProjectOverlayOpen] = useState(false);
  const [isServicesOverlayOpen, setIsServicesOverlayOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow =
      isProjectOverlayOpen || isServicesOverlayOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isProjectOverlayOpen, isServicesOverlayOpen]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => {
      element.classList.remove("is-visible");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const openServicePage = (slug) => {
    setIsServicesOverlayOpen(false);
    navigate(`/services/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SplashCursor />
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar
          isProjectOverlayOpen={isProjectOverlayOpen}
          onServicesClick={() => setIsServicesOverlayOpen(true)}
          onStartProjectClick={() => setIsProjectOverlayOpen((current) => !current)}
        />

        <main className="flex-1">
          <Outlet />
          <Footer />
        </main>
      </div>

      <StartProjectOverlay
        isOpen={isProjectOverlayOpen}
        onClose={() => setIsProjectOverlayOpen(false)}
      />
      <ServicesOverlay
        isOpen={isServicesOverlayOpen}
        onClose={() => setIsServicesOverlayOpen(false)}
        onSelectService={openServicePage}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/service/:slug" element={<ServiceRouteRenderer />} />
          <Route path="/services/:slug" element={<ServiceRouteRenderer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
