import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function UiUxDesignPage(props) {
  const service = getServiceBySlug("ui-ux-design");
  return <ServiceDetailPage {...props} service={service} />;
}
