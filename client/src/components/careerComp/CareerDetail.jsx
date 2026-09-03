import { useParams } from "react-router-dom";
// import Container from "../layout/Container";
import { careersData } from "../../mockdata/career";
import InnerCareerHeroSection from "./InnerCareerHeroSection";
import FactsBox from "./FactsBox";
import CareerOverview from "./CareerOverview";

const CareerDetail = () => {
  const { slug } = useParams();

  const role = careersData.find((item) => item.slug === slug);

  console.log("role: ", role);

  return (
    <>
      <InnerCareerHeroSection data={role.hero} />
      <FactsBox data={role} />
      <CareerOverview data={role} />
    </>
  );
};

export default CareerDetail;
