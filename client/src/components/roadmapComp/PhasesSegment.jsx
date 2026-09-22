import { Circle } from "lucide-react";
import Container from "../layout/Container";

const PhasesSegment = ({ data }) => {
  const { phases } = data;

  return (
    <section>
      <Container
        className="
                  w-full h-full my-15
                  flex flex-col items-start
                  "
      >
        <div className="w-full relative hidden md:grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-20">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="box md:h-[300px] flex items-center justify-start md:justify-end text-4xl font-[var(--font-poppins)]">
              <div className="flex gap-1">
                <div className="text-8xl">01</div>
                <div className="text-lg uppercase mt-2">Phase</div>
              </div>
            </div>
            <div className="box h-fit bg-violet-700 rounded-xl px-5 py-10 flex flex-col items-start justify-start gap-2.5">
              <h3>{phases[1].title}</h3>
              <p>{phases[1].duration}</p>
              <ul className="flex flex-wrap gap-2">
                {phases[1].topics.map((r, index) => (
                  <li className="bg-violet-900 py-1 px-2 rounded" key={index}>
                    {r}
                  </li>
                ))}
              </ul>
              <p>{phases[1].focus}</p>
            </div>
            <div className="box h-[300px] flex items-center justify-end text-4xl font-[var(--font-poppins)]">
              <div className="flex gap-1">
                <div className="text-8xl">03</div>
                <div className="text-lg uppercase mt-2">Phase</div>
              </div>
            </div>
            <div className="box h-fit bg-violet-700 rounded-xl px-5 py-10 flex flex-col items-start justify-start gap-2.5">
              <h3>{phases[3].title}</h3>
              <p>{phases[3].duration}</p>
              <ul className="flex flex-wrap gap-2">
                {phases[3].topics.map((r, index) => (
                  <li className="bg-violet-900 py-1 px-2 rounded" key={index}>
                    {r}
                  </li>
                ))}
              </ul>
              <p>{phases[3].focus}</p>
            </div>
          </div>

          {/* timeline */}
          <div className="hidden md:block relative">
            <div className="absolute -translate-x-1/2 top-[139px]">
              <Circle className="bg-white rounded-full" />
            </div>

            <div className="absolute -translate-x-1/2 top-[495px]">
              <Circle className="bg-white rounded-full" />
            </div>

            <div className="absolute -translate-x-1/2 top-[882px]">
              <Circle className="bg-white rounded-full" />
            </div>

            <div className="absolute -translate-x-1/2 top-[1253px]">
              <Circle className="bg-white rounded-full" />
            </div>

            <div className="w-[0.5px] h-full bg-white rounded"></div>
          </div>

          <div className="order-1 flex flex-col gap-20">
            <div className="box h-fit bg-violet-700 rounded-xl px-5 py-10 flex flex-col items-start justify-start gap-2.5">
              <h3>{phases[0].title}</h3>
              <p>{phases[0].duration}</p>
              <ul className="flex flex-wrap gap-2">
                {phases[0].topics.map((r, index) => (
                  <li className="bg-violet-900 py-1 px-2 rounded" key={index}>
                    {r}
                  </li>
                ))}
              </ul>
              <p>{phases[0].focus}</p>
            </div>
            <div className="box h-[300px] bg-transparent flex flex-col items-start justify-center text-4xl font-[var(--font-poppins)]">
              <div className="flex gap-1">
                <div className="text-8xl">02</div>
                <div className="text-lg uppercase mt-2">Phase</div>
              </div>
            </div>
            <div className="box h-fit bg-violet-700 rounded-xl px-5 py-10 flex flex-col items-start justify-start gap-2.5">
              <h3>{phases[2].title}</h3>
              <p>{phases[2].duration}</p>
              <ul className="flex flex-wrap gap-2">
                {phases[2].topics.map((r, index) => (
                  <li className="bg-violet-900 py-1 px-2 rounded" key={index}>
                    {r}
                  </li>
                ))}
              </ul>
              <p>{phases[2].focus}</p>
            </div>
            <div className="box h-[300px] bg-transparent flex flex-col items-start justify-center text-4xl font-[var(--font-poppins)]">
              <div className="flex gap-1">
                <div className="text-8xl">04</div>
                <div className="text-lg uppercase mt-2">Phase</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:hidden flex-col gap-2.5">
         
          <div className="h-[300px] flex items-center justify-start md:justify-end text-4xl font-[var(--font-poppins)]">
            <div className="flex gap-1">
              <div className="text-8xl">01</div>
              <div className="text-lg uppercase mt-2">Phase</div>
            </div>
          </div>
          <div className="h-fit bg-violet-700 rounded-xl px-5 py-10 flex flex-col items-start justify-start gap-2.5">
            <h3>{phases[0].title}</h3>
            <p>{phases[0].duration}</p>
            <ul className="flex flex-wrap gap-2">
              {phases[0].topics.map((r, index) => (
                <li className="bg-violet-900 py-1 px-2 rounded" key={index}>
                  {r}
                </li>
              ))}
            </ul>
            <p>{phases[0].focus}</p>
          </div>
           <div className="h-[300px] flex items-center justify-end md:justify-end text-4xl font-[var(--font-poppins)]">
            <div className="flex gap-1">
              <div className="text-8xl">02</div>
              <div className="text-lg uppercase mt-2">Phase</div>
            </div>
          </div>
          <div className="h-fit bg-violet-700 rounded-xl px-5 py-10 flex flex-col items-start justify-start gap-2.5">
            <h3>{phases[1].title}</h3>
            <p>{phases[1].duration}</p>
            <ul className="flex flex-wrap gap-2">
              {phases[1].topics.map((r, index) => (
                <li className="bg-violet-900 py-1 px-2 rounded" key={index}>
                  {r}
                </li>
              ))}
            </ul>
            <p>{phases[1].focus}</p>
          </div>
          <div className="h-[300px] flex items-center justify-start md:justify-end text-4xl font-[var(--font-poppins)]">
            <div className="flex gap-1">
              <div className="text-8xl">03</div>
              <div className="text-lg uppercase mt-2">Phase</div>
            </div>
          </div>
          <div className="h-fit bg-violet-700 rounded-xl px-5 py-10 flex flex-col items-start justify-start gap-2.5">
            <h3>{phases[2].title}</h3>
            <p>{phases[2].duration}</p>
            <ul className="flex flex-wrap gap-2">
              {phases[2].topics.map((r, index) => (
                <li className="bg-violet-900 py-1 px-2 rounded" key={index}>
                  {r}
                </li>
              ))}
            </ul>
            <p>{phases[2].focus}</p>
          </div>
           <div className="h-[300px] flex items-center justify-end md:justify-end text-4xl font-[var(--font-poppins)]">
            <div className="flex gap-1">
              <div className="text-8xl">04</div>
              <div className="text-lg uppercase mt-2">Phase</div>
            </div>
          </div>
          <div className="h-fit bg-violet-700 rounded-xl px-5 py-10 flex flex-col items-start justify-start gap-2.5">
            <h3>{phases[3].title}</h3>
            <p>{phases[3].duration}</p>
            <ul className="flex flex-wrap gap-2">
              {phases[3].topics.map((r, index) => (
                <li className="bg-violet-900 py-1 px-2 rounded" key={index}>
                  {r}
                </li>
              ))}
            </ul>
            <p>{phases[3].focus}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PhasesSegment;
