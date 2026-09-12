import Container from "../layout/Container";
import { ArrowBigRight } from "lucide-react";

const CareerSalaryInsights = ({ data }) => {
  const { market, note, entry, mid, senior } = data.salaryInsights;
  return (
    <section className="h-full">
      <Container
        className="
          w-full h-full
          flex flex-col items-center gap-2.5
        "
      >
        <h2>Salary Insights</h2>

        <p className="mb-4 text-center">{market + " : " + note}</p>
        <div
          className="
            w-full h-fit mt-[40px]
            grid grid-cols-1
            md:grid-cols-[1fr_auto_1fr_auto_1fr]
            gap-4
          "
        >
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
            <ul className="flex flex-col items-center gap-4 uppercase">
              <li className="text-violet-500">Entry</li>
              <li>{entry}</li>
            </ul>
          </div>
          <div className="h-full flex items-center justify-center rotate-90 md:rotate-0">
            <ArrowBigRight />
          </div>
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
            <ul className="flex flex-col items-center gap-4 uppercase">
              <li className="text-violet-500">Mid</li>
              <li>{mid}</li>
            </ul>
          </div>
          <div className="h-full flex items-center justify-center rotate-90 md:rotate-0">
            <ArrowBigRight />
          </div>
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
            <ul className="flex flex-col items-center gap-4 uppercase">
              <li className="text-violet-500">Senior</li>
              <li>{senior}</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareerSalaryInsights;
