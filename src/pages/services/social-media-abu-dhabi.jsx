import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function SocialMediaAbuDhabiPage(props) {
  const service = getServiceBySlug("social-media-abu-dhabi");
  return <ServiceDetailPage {...props} service={service} />;
}
