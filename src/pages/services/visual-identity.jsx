import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function VisualIdentityPage(props) {
  const service = getServiceBySlug("visual-identity");
  return <ServiceDetailPage {...props} service={service} />;
}
