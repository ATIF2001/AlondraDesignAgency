import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function DigitalDevelopmentPage(props) {
  const service = getServiceBySlug("digital-development");
  return <ServiceDetailPage {...props} service={service} />;
}
