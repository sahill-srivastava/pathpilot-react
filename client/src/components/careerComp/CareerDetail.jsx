import { useParams } from "react-router-dom";
// import Container from "../layout/Container";
import { careersData } from "../../mockdata/career";
import InnerCareerHeroSection from "./InnerCareerHeroSection";
import FactsBox from "./FactsBox";
import CareerOverview from "./CareerOverview";
import CareerInvolve from "./CareerInvolve";
import CareerGrid from "./CareerGrid";

const CareerDetail = () => {
  const { slug } = useParams();

  const role = careersData.find((item) => item.slug === slug);

  console.log("role: ", role);

  return (
    <>
      <InnerCareerHeroSection data={role.hero} />
      <FactsBox data={role} />
      <CareerGrid data={role} />
      <CareerOverview data={role} />
      <CareerInvolve data={role.whatItInvolves} />
    </>
  );
};

export default CareerDetail;
