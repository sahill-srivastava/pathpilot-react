import { useRef } from "react";
import HeroSectionQuiz from "../components/quizComp/HeroSectionQuiz";
import QuizSegment from "../components/quizComp/QuizSegment";

const Quiz = () => {
  const quizRef = useRef(null)
  return (
    <>
      <HeroSectionQuiz quizRef={quizRef} />
      <QuizSegment quizRef={quizRef} />
    </>
  );
};

export default Quiz;
