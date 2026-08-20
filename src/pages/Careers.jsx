import CareerCards from "../components/career/CareerCards";
import InnerHeroSection from "../components/layout/InnerHeroSection";
import { careerHeroSectionData } from "../mockdata/career";

export default function Careers () {

    return (
       <>
       <InnerHeroSection data={careerHeroSectionData} />
       <CareerCards />
       </>
    )
}