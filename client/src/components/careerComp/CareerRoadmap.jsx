import Container from "../layout/Container";
import CareerOverview from "./CareerOverview";
import CareerInvolve from "./CareerInvolve";
import { useState } from "react";
import CareerResponsibilities from "./CareerResponsibilities";
import CareerSkillsTools from "./CareerSkillsTools";
import CareerLearningPath from "./CareerLearningPath";
import CareerSalaryInsights from "./CareerSalaryInsights";
import CareerRelatedRoadmaps from "./CareerRelatedRoadmaps";
import CareerLearningPaths from "./CareerLearningPaths";

const CareerRoadmap = ({ data }) => {
  const [status, setStatus] = useState("overview");

  const allowedSections = {
    overview: <CareerOverview data={data} />,
    involve: <CareerInvolve data={data} />,
    responsibilities: <CareerResponsibilities data={data} />,
    skills: <CareerSkillsTools data={data} />,
    learningPath: <CareerLearningPath data={data} />,
    salaryInsights: <CareerSalaryInsights data={data} />,
    relatedRoadmaps: <CareerRelatedRoadmaps data={data} />,
    learningPaths: <CareerLearningPaths data={data} />
  };

  return (
    <section>
      <Container
        className="
                        my-15  min-h-fit
                          grid grid-cols-1 md:grid-cols-[25%_1fr] gap-0
                          "
      >
        <div className="bg-violet-800 rounded-l-2xl">
          <ul className="w-full flex flex-col">
            <li
              onClick={() => setStatus("overview")}
              className="border-b-2 border-white p-4 cursor-pointer"
            >
              Career Overview
            </li>
            <li
              onClick={() => setStatus("involve")}
              className="border-b-2 border-white p-4 cursor-pointer"
            >
              What You'll Do
            </li>
            <li
              onClick={() => setStatus("responsibilities")}
              className="border-b-2 border-white p-4 cursor-pointer"
            >
              Role & Responsibilities
            </li>
            <li
              onClick={() => setStatus("skills")}
              className="border-b-2 border-white p-4 cursor-pointer"
            >
              Skill & Tools Used
            </li>
            <li
              onClick={() => setStatus("learningPath")}
              className="border-b-2 border-white p-4 cursor-pointer"
            >
              Learning Path
            </li>
            <li
              onClick={() => setStatus("salaryInsights")}
              className="border-b-2 border-white p-4 cursor-pointer"
            >
              Salary Insights
            </li>
            <li
              onClick={() => setStatus("relatedRoadmaps")}
              className="border-b-2 border-white p-4 cursor-pointer"
            >
              Related Roadmaps
            </li>
            <li
              onClick={() => setStatus("learningPaths")}
              className=" p-4 cursor-pointer"
            >
              Suggested Learning Paths
            </li>
          </ul>
        </div>
        <div className="bg-zinc-800 rounded-r-2xl h-full w-full py-10">
          {allowedSections[status]}
        </div>
      </Container>
    </section>
  );
};

export default CareerRoadmap;
