import Container from "../layout/Container";
import { useState } from "react";
import Loader from "../layout/Loader";
import { Link } from "react-router-dom";
import QuizWindow from "./QuizWindow";
import SuccessWindow from "./SuccessWindow";

const QuizSegment = () => {
  const [allowedSection, setAllowedSection] = useState("initial")
  const [result, setResult] = useState([]); //final results
  const [isResultAval, setIsResultAval] = useState(false);

  const allowedQuizSection = {
    initial: (
      <QuizWindow setAllowedSection={setAllowedSection} setResult={setResult} setIsResultAval={setIsResultAval} />
    ),
    load: <Loader />,
    successWindow: <SuccessWindow />,
  };

  return (
    <section>
      <Container
        className="
                        h-full  py-10 my-10
                          flex flex-col items-center justify-center gap-2.5
                          "
      >
        <div className="w-[600px] bg-violet-700 rounded-2xl p-4">
          {allowedQuizSection[allowedSection]}
        </div>
      </Container>
      {/* result segment */}
      <div className={isResultAval ? "block" : "hidden"}>
        <Container
          className="
                              h-full  py-10 my-10
                                flex flex-col items-center justify-center gap-10
                                "
        >
          <h2 className="text-5xl ">Your Results</h2>
          <p className="text-lg">
            Career paths that match your interests and strengths.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {result.map((r) => {
              const { id, title, desc } = r;
              return (
                <div
                  key={id}
                  className="bg-zinc-900 min-h-[250px] inset-shadow-2xs inset-shadow-violet-800  px-4 py-4 rounded-xl flex flex-col items-center justify-center gap-5"
                >
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <Link className=" primary-btn w-full text-center mt-4 py-2 px-4 cursor-pointer">
                    Explore Career
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default QuizSegment;
