import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function PhotographyPage(props) {
  const service = getServiceBySlug("photography");
  return <ServiceDetailPage {...props} service={service} />;
}
