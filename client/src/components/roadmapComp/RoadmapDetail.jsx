import { useParams } from "react-router-dom";
import roadmapsData from "../../mockdata/roadmap"
import HeroSectionDetail from "./HeroSectionDetail";

const RoadmapDetail = () => {
  const { slug } = useParams();

  const role = roadmapsData.find(item => item.slug === slug)
  console.log(role)
  return (
    <>
    <HeroSectionDetail data={role} />
    </>
  )
};

export default RoadmapDetail;
