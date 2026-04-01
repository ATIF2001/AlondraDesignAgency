import { ChevronRight, CirclePlus, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logosidebar.png";
import { sidebarItems } from "../data/navigation";

export default function Sidebar({
  isProjectOverlayOpen,
  onServicesClick,
  onStartProjectClick,
}) {
  const location = useLocation();

  const isPathActive = (path) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/services") {
      return (
        location.pathname === "/services" ||
        location.pathname.startsWith("/service/") ||
        location.pathname.startsWith("/services/")
      );
    }
    return location.pathname === path;
  };

  return (
    <aside className="flex w-full flex-col justify-between bg-[#141414] px-6 py-8 text-white lg:sticky lg:top-0 lg:h-screen lg:w-[220px] lg:border-r lg:border-white/8 lg:px-5 lg:py-10">
      <div>
        <div className="flex justify-center pb-12 lg:pb-16">
          <img src={logo} alt="Alondra logo" className="w-24 lg:w-28" />
        </div>

        <ul className="space-y-2 lg:space-y-3">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              {item.chevron ? (
                <button
                  type="button"
                  onClick={onServicesClick}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-[19px] font-medium tracking-[-0.02em] transition ${
                    isPathActive(item.path)
                      ? "bg-white/6 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
                      : "text-white/90 hover:bg-white/4 hover:text-[#d4a514]"
                  }`}
                >
                  <span className="flex-1 text-left">
                    {item.label}
                  </span>
                  <ChevronRight className="ml-3 h-5 w-5 shrink-0 text-white" />
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-[19px] font-medium tracking-[-0.02em] transition ${
                    isPathActive(item.path)
                      ? "bg-white/6 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
                      : "text-white/90 hover:bg-white/4 hover:text-[#d4a514]"
                  }`}
                >
                  <span>{item.label}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onStartProjectClick}
        className="mt-10 flex h-16 items-center justify-center gap-3 bg-[#d4a514] px-5 text-lg font-medium text-black transition hover:bg-[#e2b51f] lg:mt-12"
        style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)" }}
      >
        {isProjectOverlayOpen ? (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
            <X className="h-4 w-4" strokeWidth={3} />
          </span>
        ) : (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
            <CirclePlus className="h-5 w-5" strokeWidth={2.1} />
          </span>
        )}
        <span>{isProjectOverlayOpen ? "Close" : "Start Project"}</span>
      </button>
    </aside>
  );
}
