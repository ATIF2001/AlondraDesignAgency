import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function TiktokMarketingPage(props) {
  const service = getServiceBySlug("tiktok-marketing");
  return <ServiceDetailPage {...props} service={service} />;
}
