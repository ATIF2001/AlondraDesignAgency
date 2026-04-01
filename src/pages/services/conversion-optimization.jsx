import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function ConversionOptimizationPage(props) {
  const service = getServiceBySlug("conversion-optimization");
  return <ServiceDetailPage {...props} service={service} />;
}
