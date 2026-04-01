import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function VideoProductionPage(props) {
  const service = getServiceBySlug("video-production");
  return <ServiceDetailPage {...props} service={service} />;
}
