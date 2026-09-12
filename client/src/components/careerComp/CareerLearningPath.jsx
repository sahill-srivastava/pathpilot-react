import React from "react";
import Container from "../layout/Container";
import { ArrowBigRight } from "lucide-react";

const CareerLearningPath = ({ data }) => {
  const { learningPath } = data;

  return (
    <section className="h-full">
      <Container
        className="
          w-full h-full
          flex flex-col items-center gap-2.5
        "
      >
        <h2>Learning Path</h2>

        <p className="mb-4">
          Your journey from fundamentals to production-ready skills.
        </p>

        <div
          className="
            w-full h-fit mt-[80px]
            grid grid-cols-1
            md:grid-cols-[1fr_auto_1fr_auto_1fr]
            gap-20 md:gap-4
          "
        >
          {learningPath.map((item, index) => {
            const { level, topics } = item;

            return (
              <React.Fragment key={level}>
                <div
                  className="
                    bg-zinc-900
                    inset-shadow-2xs inset-shadow-violet-800
                    relative h-full
                    px-4 py-10
                    rounded-xl
                    flex flex-col items-center
                    gap-10
                  "
                >
                  <h4 className="absolute top-[-50px] text-lg">{level}</h4>

                  <ul className="flex flex-col items-center gap-4 uppercase">
                    {topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>

                {index < learningPath.length - 1 && (
                  <div className="h-full flex items-center justify-center rotate-90 md:rotate-0">
                    <ArrowBigRight />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CareerLearningPath;
