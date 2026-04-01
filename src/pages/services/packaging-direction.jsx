import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function PackagingDirectionPage(props) {
  const service = getServiceBySlug("packaging-direction");
  return <ServiceDetailPage {...props} service={service} />;
}
