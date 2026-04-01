import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function LogoSystemsPage(props) {
  const service = getServiceBySlug("logo-systems");
  return <ServiceDetailPage {...props} service={service} />;
}
