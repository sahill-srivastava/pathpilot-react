import OurMission from "../components/about/OurMission";
import PathpilotFor from "../components/about/PathpilotFor";
import CtaBanner from "../components/layout/CtaBanner";
import InnerHeroSection from "../components/layout/InnerHeroSection";
import { aboutCtaData, aboutHeroSectionData } from "../mockdata/about";

export default function About() {
  return (
    <>
      <InnerHeroSection data={aboutHeroSectionData} />
      <OurMission />
      <PathpilotFor />
      <CtaBanner data={aboutCtaData} />
    </>
  );
}
