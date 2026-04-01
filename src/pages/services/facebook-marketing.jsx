import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function FacebookMarketingPage(props) {
  const service = getServiceBySlug("facebook-marketing");
  return <ServiceDetailPage {...props} service={service} />;
}
