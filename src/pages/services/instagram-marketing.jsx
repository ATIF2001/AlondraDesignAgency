import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function InstagramMarketingPage(props) {
  const service = getServiceBySlug("instagram-marketing");
  return <ServiceDetailPage {...props} service={service} />;
}
