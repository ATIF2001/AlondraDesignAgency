import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function MotionGraphicsPage(props) {
  const service = getServiceBySlug("motion-graphics");
  return <ServiceDetailPage {...props} service={service} />;
}
