import ServiceDetailPage from "../../components/ServiceDetailPage";
import { getServiceBySlug } from "../../data/servicesCatalog";

export default function CampaignConceptsPage(props) {
  const service = getServiceBySlug("campaign-concepts");
  return <ServiceDetailPage {...props} service={service} />;
}
