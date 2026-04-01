import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function TwitterMarketingPage(props) {
  const service = getServiceBySlug("twitter-marketing");
  return <ServiceDetailPage {...props} service={service} />;
}
