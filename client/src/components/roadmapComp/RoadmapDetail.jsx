import { useParams } from "react-router-dom";
import roadmapsData from "../../mockdata/roadmap";
import HeroSectionDetail from "./HeroSectionDetail";
import FactsBoxRoadmap from "./FactsBoxRoadmap";
import OverviewSegment from "./OverviewSegment";
import PhasesSegment from "./PhasesSegment";
import ProjectsRoadmap from "./ProjectsRoadmap";
import RecommendedResources from "./RecommendedResources";
import EstimatedTimeline from "./EstimatedTimeline";
import RoadmapCta from "./RoadmapCta";

const RoadmapDetail = () => {
  const { slug } = useParams();
  const role = roadmapsData.find((item) => item.slug === slug);
  return (
    <>
      <HeroSectionDetail data={role} />
      <FactsBoxRoadmap data={role} />
      <OverviewSegment data={role} />
      <PhasesSegment data={role} />
      <ProjectsRoadmap data={role} />
      <RecommendedResources data={role} />
      <EstimatedTimeline data={role} />
      <RoadmapCta data={role} />
    </>
  );
};

export default RoadmapDetail;
