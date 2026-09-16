import { Circle } from "lucide-react";
import Container from "../layout/Container";

const PhasesSegment = ({ data }) => {
  const { phases } = data;
  console.log(phases);
  return (
    <section>
      <Container
        className="
                  w-full h-full
                  flex flex-col items-start
                  "
      >
        <div className="w-full relative grid grid-cols-[1fr_auto_1fr] gap-20">
          <div className="flex flex-col gap-20">
            <div className="box h-[300px]  flex flex-col items-end justify-center text-4xl font-[var(--font-poppins)]">
              Phase 1
            </div>
            <div className="box h-[300px] bg-violet-700 rounded-xl p-10 flex flex-col items-center justify-center"></div>
          </div>

          <div className="absolute left-[49%] top-[140px]"><Circle className="bg-white rounded-full" /></div>
          <div>
            <div className="w-[0.5px] h-[700px] bg-white rounded"></div>
          </div>

          <div className="flex flex-col gap-20">
            <div className="box h-fit bg-violet-700 rounded-xl px-5 py-10 flex flex-col items-start justify-start gap-2.5">
              <h3>{phases[0].title}</h3>
              <p>
                <strong>Duration: </strong>
                {phases[0].duration}
              </p>
              <strong>Learn:</strong>
              <ul className="flex flex-wrap gap-2">
                {phases[0].topics.map((r, index) => (
                  <li className="bg-violet-900 py-1 px-2 rounded" key={index}>
                    {r}
                  </li>
                ))}
              </ul>
              <strong>Focus:</strong>
               <p>
                <strong>Duration: </strong>
                {phases[0].focus}
              </p>
            </div>
            <div className="box h-[300px] bg-transparent flex flex-col items-start justify-center text-4xl font-[var(--font-poppins)]">
              Phase 2
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PhasesSegment;
