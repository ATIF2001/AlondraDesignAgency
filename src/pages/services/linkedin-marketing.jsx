import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function LinkedinMarketingPage(props) {
  const service = getServiceBySlug("linkedin-marketing");
  return <ServiceDetailPage {...props} service={service} />;
}
