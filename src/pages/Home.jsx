import CtaBanner from "../components/home/CtaBanner";
import ExploreCareerPath from "../components/home/ExploreCareerPath";
import Faqs from "../components/home/Faqs";
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
      <Faqs />
      <CtaBanner />
    </>
  );
}
