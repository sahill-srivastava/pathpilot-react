import { useParams } from "react-router-dom";
// import Container from "../layout/Container";
import { careersData } from "../../mockdata/career";
import InnerCareerHeroSection from "./InnerCareerHeroSection";
import FactsBox from "./FactsBox";
import CareerRoadmap from "./CareerRoadmap";
import CareerCta from "./CareerCta";

const CareerDetail = () => {
  const { slug } = useParams();
  const role = careersData.find((item) => item.slug === slug);
  return (
    <>
      <InnerCareerHeroSection data={role.hero} />
      <FactsBox data={role} />
      <CareerRoadmap data={role} />
      <CareerCta data={role} />
    </>
  );
};

export default CareerDetail;
