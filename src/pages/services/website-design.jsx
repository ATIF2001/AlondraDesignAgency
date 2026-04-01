import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function WebsiteDesignPage(props) {
  const service = getServiceBySlug("website-design");
  return <ServiceDetailPage {...props} service={service} />;
}
