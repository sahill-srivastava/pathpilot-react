import { Circle } from "lucide-react";
import Container from "../layout/Container";

const EstimatedTimeline = ({ data }) => {
   const { phase1, phase2, phase3, phase4, total } = data.estimatedTimeline;
   console.log(data.estimatedTimeline)

   const removeWord = (phase) => {
    const [range] = phase.split(" ")
    return range;
   }
  return (
    <section>
      <Container
        className="
                  w-full h-full my-25 
                  flex flex-col items-center justify-center
                  "
      >
        <span
          className="bg-violet-900 light:text-white rounded-4xl mb-4 font-medium px-5 py-2.5 uppercase"
          style={{ fontSize: "13px" }}
        >
          Timeline
        </span>
        <h2 className="mb-2 md:mb-6 md:text-4xl light:text-white text-center">
          Your Learning Timeline
        </h2>
        <p className="md:w-[70%] leading-8 text-center md:text-lg text-white/90">
          Understand how the roadmap progresses and plan your learning journey
          at a realistic pace.
        </p>

        <div className="w-full my-15">
          <div className="grid grid-cols-4">
            <div className="flex flex-col items-start ps-2">
              <div className="flex flex-col items-center">
                <h4>{removeWord(phase1)}</h4>
                <p>Weeks</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <h4>{removeWord(phase2)}</h4>
                <p>Weeks</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <h4>{removeWord(phase3)}</h4>
                <p>Weeks</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex flex-col items-center">
                <h4>{removeWord(phase4)}</h4>
                <p>Weeks</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[95%] mt-10 mb-6">
              <hr className="h-2" />
              <div className="flex grid grid-cols-4 -mt-[21px]">
                <div className="flex flex-col justify-center items-start">
                  <div className="icon w-fit flex flex-col items-center">
                    <div className="flex flex-col items-start">
                      <Circle className="bg-white rounded-full" />
                    </div>
                    <div className="h-[40px] w-[1px] border border-white"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="icon w-fit flex flex-col items-center">
                    <div className="flex flex-col items-start">
                      <Circle className="bg-white rounded-full" />
                    </div>
                    <div className="h-[40px] w-[1px] border border-white"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="icon w-fit flex flex-col items-center">
                    <div className="flex flex-col items-start">
                      <Circle className="bg-white rounded-full" />
                    </div>
                    <div className="h-[40px] w-[1px] border border-white"></div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="icon w-fit flex flex-col items-center">
                    <div className="flex flex-col items-start">
                      <Circle className="bg-white rounded-full" />
                    </div>
                    <div className="h-[40px] w-[1px] border border-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex flex-col items-start">
              <h4>Phase 1</h4>
            </div>
            <div className="flex flex-col items-center">
              <h4>Phase 2</h4>
            </div>
            <div className="flex flex-col items-center">
              <h4>Phase 3</h4>
            </div>
            <div className="flex flex-col items-end">
              <h4>Phase 4</h4>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center ">
            <h3 className="mb-4">Total</h3>
            <p className="ps-1">{total}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EstimatedTimeline;
