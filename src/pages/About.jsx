import AboutPathpilot from "../components/about/AboutPathpilot";
import OurMission from "../components/about/OurMission";
import PathpilotFor from "../components/about/PathpilotFor";
import CtaBanner from "../components/layout/CtaBanner";

// Ready to Find Your Path?

 const aboutCtaData = {
    heading: {
        prefixText: "Ready to Find",
        highlightedText: "Your",
        suffixText: "Path?"
    },
    description: "Explore career options, discover structured roadmaps, and take the next step toward your goals.",
    buttonText: "Explore",
    buttonUrl: "/roadmaps"
}

export default function About () {

    return (
       <>
       <AboutPathpilot />
       <OurMission />
       <PathpilotFor />
       <CtaBanner data={aboutCtaData}/>
       </>
    )
}