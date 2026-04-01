import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function LandingPagesPage(props) {
  const service = getServiceBySlug("landing-pages");
  return <ServiceDetailPage {...props} service={service} />;
}
