import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function SocialMediaDubaiPage(props) {
  const service = getServiceBySlug("social-media-dubai");
  return <ServiceDetailPage {...props} service={service} />;
}
