import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function BrandStrategyPage(props) {
  const service = getServiceBySlug("brand-strategy");
  return <ServiceDetailPage {...props} service={service} />;
}
