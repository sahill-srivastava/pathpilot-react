import Container from "../layout/Container";
import CareerOverview from "./CareerOverview";
import CareerInvolve from "./CareerInvolve";
import { useState } from "react";
import CareerResponsibilities from "./CareerResponsibilities";
import CareerSkillsTools from "./CareerSkillsTools";
import CareerLearningPath from "./CareerLearningPath";
import CareerSalaryInsights from "./CareerSalaryInsights";

const CareerRoadmap = ({ data }) => {
  const [status, setStatus] = useState("overview");

  const allowedSections = {
    overview: <CareerOverview data={data} />,
    involve: <CareerInvolve data={data} />,
    responsibilities: <CareerResponsibilities data={data} />,
    skills: <CareerSkillsTools data={data} />,
    learningPath: <CareerLearningPath data={data} />,
    salaryInsights: <CareerSalaryInsights data={data} />,
  };

  return (
    <section>
      <Container
        className="
                        my-15  min-h-[700px]
                          grid grid-cols-1 md:grid-cols-[25%_1fr] gap-0
                          "
      >
        <div className="bg-violet-800 rounded-l-2xl">
          <ul className="w-full flex flex-col mt-10">
            <li
              onClick={() => setStatus("overview")}
              className="border-b-2 border-white p-4 cursor-pointer hover:bg-violet-800"
            >
              Career Overview
            </li>
            <li
              onClick={() => setStatus("involve")}
              className="border-b-2 border-white p-4 cursor-pointer hover:bg-violet-800"
            >
              Career Involve
            </li>
            <li
              onClick={() => setStatus("responsibilities")}
              className="border-b-2 border-white p-4 cursor-pointer hover:bg-violet-800"
            >
              Role & Responsibilities
            </li>
            <li
              onClick={() => setStatus("skills")}
              className="border-b-2 border-white p-4 cursor-pointer hover:bg-violet-800"
            >
              Skill & Tools Used
            </li>
            <li
              onClick={() => setStatus("learningPath")}
              className="border-b-2 border-white p-4 cursor-pointer hover:bg-violet-800"
            >
              Learning Path
            </li>
            <li
              onClick={() => setStatus("salaryInsights")}
              className="border-b-2 border-white p-4 cursor-pointer hover:bg-violet-800"
            >
              Salary Insights
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
