import { useState } from "react";
import HeroSectionQuiz from "../components/quizComp/HeroSectionQuiz";
import QuizSegment from "../components/quizComp/QuizSegment";
import ResultsSegment from "../components/quizComp/ResultsSegment";

const Quiz = () => {
  const [showLoader, setShowLoader] = useState(false);
  return (
    <>
      <HeroSectionQuiz />
      <QuizSegment showLoader={showLoader} setShowLoader={setShowLoader} />
      <ResultsSegment showLoader={showLoader} setShowLoader={setShowLoader} />
    </>
  );
};

export default Quiz;
