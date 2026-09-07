import React from "react";
import Container from "../layout/Container";

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
        <div className="w-full h-full  grid grid-cols-1 grid-cols-3 gap-4">
          <div className="bg-[var(--background-color)] h-full px-4 py-10 rounded flex flex-col items-center gap-10">
            <h4 className="text-lg border-white">Beginner</h4>
            <ul className="flex flex-col gap-4">
              <li>HTML</li>
              <li>css</li>
              <li>js</li>
            </ul>
          </div>
          <div className="bg-[var(--background-color)] h-full px-4 py-10 rounded flex flex-col items-center gap-10">
            <h4 className="text-lg">Intermediate</h4>
            <ul className="flex flex-col gap-4">
              <li>HTML</li>
              <li>css</li>
              <li>js</li>
            </ul>
          </div>
          <div className="bg-[var(--background-color)] h-full px-4 py-10 rounded flex flex-col items-center gap-10">
            <h4 className="text-lg">Advanced</h4>
            <ul className="flex flex-col gap-4">
              <li>HTML</li>
              <li>css</li>
              <li>js</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareerLearningPath;
