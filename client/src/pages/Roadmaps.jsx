import CardsRoadmap from "../components/roadmapComp/CardsRoadmap";
import HeroSectionRoadmap from "../components/roadmapComp/HeroSectionRoadmap";
import roadmapsData from "../mockdata/roadmap";

export default function Roadmaps() {
  return (
    <>
      <HeroSectionRoadmap />
      <CardsRoadmap data={roadmapsData} />
    </>
  );
}
