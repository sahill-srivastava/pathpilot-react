import Container from "../layout/Container";
import CareerOverview from "./CareerOverview";
import CareerInvolve from "./CareerInvolve";
import { useState } from "react";
import CareerResponsibilities from "./CareerResponsibilities";
import CareerSkillsTools from "./CareerSkillsTools";

const CareerRoadmap = ({ data }) => {
  const [status, setStatus] = useState("overview");

  const allowedSections = {
    overview: <CareerOverview data={data} />,
    involve: <CareerInvolve data={data} />,
    responsibilities: <CareerResponsibilities data={data} />,
    skills: <CareerSkillsTools data={data} />,
  };
  return (
    <section>
      <Container
        className="
                        my-15  min-h-[700px]
                          grid grid-cols-1 md:grid-cols-[30%_1fr] gap-0
                          "
      >
        <div className="bg-violet-700 rounded-l-2xl">
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
          </ul>
        </div>
        <div className="bg-zinc-800 rounded-r-2xl h-full w-full py-10">
          {allowedSections[status]}
          {/* <CareerInvolve data={data} /> */}

        </div>
      </Container>
    </section>
  );
};

export default CareerRoadmap;
