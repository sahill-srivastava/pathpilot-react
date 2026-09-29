import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import QuizQuestion from "./QuizQuestion";

const QuizSegment = () => {
  return (
    <section>
      <Container
        className="
                        h-full  py-10 my-10
                          flex flex-col items-center justify-center gap-2.5
                          "
      >
        <div className="w-[600px] bg-violet-700 rounded-2xl p-4">
          <h2 className="text-center mb-10 text-4xl">Question 2/ 10</h2>
          <QuizQuestion />
          <div className="w-full flex justify-between mt-10">
            <button className="flex items-center gap-1 bg-white text-black px-2 py-1 rounded-sm cursor-pointer"><ArrowLeft /> Back</button>
            <button className="flex items-center gap-1 bg-white text-black px-2 py-1 rounded-sm cursor-pointer">Next <ArrowRight /></button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuizSegment;
