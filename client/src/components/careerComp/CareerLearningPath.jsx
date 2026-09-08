import React from "react";
import Container from "../layout/Container";
import { ArrowBigRight } from "lucide-react";

const CareerLearningPath = ({ data }) => {
  const { learningPath } = data;
  console.log(learningPath);
  console.log(learningPath[0].level)

  return (
    <section className="h-full">
      <Container
        className="
                             w-full h-full
                             flex flex-col items-center gap-2.5
                             "
      >
        {/* <div className="flex flex-col gap-6 items-start">
          {learningPath.map((item, index) => {
            console.log(item);
            const { level, focus, topics } = item;

            return (
              <div key={index}>
                <h2 className="mb-4 text-2xl light:text-white">{`${level} I ${focus}`}</h2>

                <ul className="flex flex-wrap gap-2">
                  {topics.map((t, index) => (
                    <li className="bg-white/20 py-1 px-2 rounded" key={index}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div> */}

        <h2>Learning Path</h2>
        <p className="mb-4">
          Your journey from fundamentals to production-ready skills.
        </p>

        <div className="w-full h-fit mt-[80px]  grid grid-cols-1 grid-cols-[1fr_10%_1fr_10%_1fr] gap-4">
          <div className="bg-zinc-900  inset-shadow-2xs inset-shadow-violet-800 relative h-full px-4 py-10 rounded-xl flex flex-col items-center gap-10">
            <h4 className="absolute top-[-50px] text-lg border-white">
              Beginner
            </h4>
            <ul className="flex flex-col gap-4 uppercase">
              {learningPath[0].topics.map(t => {
              
              return <li>{t}</li>
              })}
            </ul>
          </div>
          <div className="h-full flex items-center justify-center">
            <ArrowBigRight />
          </div>
          <div className="bg-zinc-900  inset-shadow-2xs inset-shadow-violet-800 relative h-full px-4 py-10 rounded-xl flex flex-col items-center gap-10">
            <h4 className="absolute top-[-50px] text-lg">Intermediate</h4>
            <ul className="flex flex-col gap-4 uppercase">
               {learningPath[1].topics.map(t => {
              
              return <li>{t}</li>
              })}
            </ul>
          </div>
          <div className="h-full flex items-center justify-center">
            <ArrowBigRight />
          </div>
          <div className="bg-zinc-900  inset-shadow-2xs inset-shadow-violet-800 relative h-full px-4 py-10 rounded-xl flex flex-col items-center gap-10">
            <h4 className="absolute top-[-50px] text-lg">Advanced</h4>
            <ul className="flex flex-col gap-4 uppercase">
              {learningPath[2].topics.map(t => {
              
              return <li>{t}</li>
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareerLearningPath;
