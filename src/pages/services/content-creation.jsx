import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function ContentCreationPage(props) {
  const service = getServiceBySlug("content-creation");
  return <ServiceDetailPage {...props} service={service} />;
}
