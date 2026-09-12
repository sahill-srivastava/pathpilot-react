import Container from "../layout/Container";
import CareerOverview from "./CareerOverview";
import CareerInvolve from "./CareerInvolve";
import CareerResponsibilities from "./CareerResponsibilities";
import CareerSkillsTools from "./CareerSkillsTools";
import CareerLearningPath from "./CareerLearningPath";
import CareerSalaryInsights from "./CareerSalaryInsights";
import CareerRelatedRoadmaps from "./CareerRelatedRoadmaps";
import CareerLearningPaths from "./CareerLearningPaths";
import { useSearchParams } from "react-router-dom";

const CareerRoadmap = ({ data }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = searchParams.get("tab") || "overview";

  const handleTabs = (tab) => {
    setSearchParams({
      tab: tab,
    });
  };

  const allowedSections = {
    overview: <CareerOverview data={data} />,
    involve: <CareerInvolve data={data} />,
    responsibilities: <CareerResponsibilities data={data} />,
    skills: <CareerSkillsTools data={data} />,
    learningPath: <CareerLearningPath data={data} />,
    salaryInsights: <CareerSalaryInsights data={data} />,
    relatedRoadmaps: <CareerRelatedRoadmaps data={data} />,
    learningPaths: <CareerLearningPaths data={data} />,
  };

  return (
    <section>
      <Container
        className="
                        my-15  min-h-fit 
                          grid grid-cols-1 md:grid-cols-[25%_1fr] gap-0
                          "
      >
        <div className="bg-violet-800 rounded-l-2xl w-full overflow-x-auto scrollbar-thin scroll-smooth scrollbar-thumb-white">
          <ul className="w-max md:w-full  flex md:flex-col ">
            <li
              onClick={() => handleTabs("overview")}
              className="md:border-b-2 shrink-0 border-white p-4 cursor-pointer"
            >
              Career Overview
            </li>
            <li
              onClick={() => handleTabs("involve")}
              className="md:border-b-2 shrink-0 border-white p-4 cursor-pointer"
            >
              What You'll Do
            </li>
            <li
              onClick={() => handleTabs("responsibilities")}
              className="md:border-b-2 shrink-0 border-white p-4 cursor-pointer"
            >
              Role & Responsibilities
            </li>
            <li
              onClick={() => handleTabs("skills")}
              className="md:border-b-2 shrink-0 border-white p-4 cursor-pointer"
            >
              Skill & Tools Used
            </li>
            <li
              onClick={() => handleTabs("learningPath")}
              className="md:border-b-2 shrink-0 border-white p-4 cursor-pointer"
            >
              Learning Path
            </li>
            <li
              onClick={() => handleTabs("salaryInsights")}
              className="md:border-b-2 shrink-0 border-white p-4 cursor-pointer"
            >
              Salary Insights
            </li>
            <li
              onClick={() => handleTabs("relatedRoadmaps")}
              className="md:border-b-2 border-white p-4 cursor-pointer"
            >
              Related Roadmaps
            </li>
            <li
              onClick={() => handleTabs("learningPaths")}
              className=" p-4 cursor-pointer"
            >
              Suggested Learning Paths
            </li>
          </ul>
        </div>
        <div className="bg-zinc-800 rounded-r-2xl h-full w-full py-10">
          {allowedSections[tab]}
        </div>
      </Container>
    </section>
  );
};

export default CareerRoadmap;
