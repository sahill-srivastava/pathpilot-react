import { useParams } from "react-router-dom"
import Container from "../layout/Container";
import InnerHeroSection from "../layout/InnerHeroSection";
import { careerHeroSectionData } from "../../mockdata/career";

const CareerDetail = () => {
  const { slug } = useParams();
  console.log(slug)
  return (
    <section>
       <InnerHeroSection data={careerHeroSectionData} />
      <Container
        className="
               my-15
               flex flex-col items-center justify-center
               "
      >
      </Container>
    </section>
  )
}

export default CareerDetail