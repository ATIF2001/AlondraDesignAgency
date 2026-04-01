import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function InfluencerMarketingPage(props) {
  const service = getServiceBySlug("influencer-marketing");
  return <ServiceDetailPage {...props} service={service} />;
}
