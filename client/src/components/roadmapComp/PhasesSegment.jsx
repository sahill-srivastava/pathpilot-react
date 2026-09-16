import { Minus } from "lucide-react";
import Container from "../layout/Container";

const PhasesSegment = ({ id, data }) => {
  const { phases } = data;
  return (
    <section>
      <Container
        className="
                                 w-full h-full
                                 flex flex-col items-start
                                 "
      >
        <div className="flex flex-col gap-4 items-start">
          <h2 className="text-2xl light:text-white flex items-center gap-2.5 mb-1">Phase {id} <Minus /> {phases[id - 1].title}</h2>
          <p><strong>Duration:</strong> {phases[id - 1].duration}</p>
           <strong className="mt-4">Learn:</strong>
          <ul className="flex flex-wrap gap-2">
            {phases[id - 1].topics.map((r, index) => (
              <li className="bg-white/20 py-1 px-2 rounded" key={index}>
                {r}
              </li>
            ))}
          </ul>
          <strong className="mt-4">Goal:</strong>
          <p>{phases[0].focus}</p>
        </div>
      </Container>
    </section>
  );
};

export default PhasesSegment;
