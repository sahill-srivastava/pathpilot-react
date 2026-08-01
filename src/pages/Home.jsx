import ExploreCareerPath from "../components/home/ExploreCareerPath";
import HeroSection from "../components/home/HeroSection";
import StructuredLearningRoadmaps from "../components/home/StructuredLearningRoadmaps";
import WhyPathpilotSection from "../components/home/WhyPathpilotSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyPathpilotSection />
      <ExploreCareerPath />
      <StructuredLearningRoadmaps />
    </>
  );
}
