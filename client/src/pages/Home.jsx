import ExploreCareerPath from "../components/homeComp/ExploreCareerPath";
import Faqs from "../components/homeComp/Faqs";
import HeroSection from "../components/homeComp/HeroSection";
import StructuredLearningRoadmaps from "../components/homeComp/StructuredLearningRoadmaps";
import WhyPathpilotSection from "../components/homeComp/WhyPathpilotSection";
import CtaBanner from "../components/layout/CtaBanner";
import { homeCtaData } from "../mockdata/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyPathpilotSection />
      <ExploreCareerPath />
      <StructuredLearningRoadmaps />
      <Faqs />
      <CtaBanner data={homeCtaData} />
    </>
  );
}
