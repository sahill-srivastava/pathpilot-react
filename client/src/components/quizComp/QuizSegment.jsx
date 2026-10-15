import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import QuizQuestion from "./QuizQuestion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { quizData } from "../../mockdata/quizQuesAns";
import { useRef, useState } from "react";
import Loader from "../layout/Loader";
import { careersData } from "../../mockdata/career";
import { Link } from "react-router-dom";

const QuizSegment = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [selected, setSelected] = useState(false); //true/false
  const [selectedOption, setSelectedOption] = useState(null); //A,B,C,D
  const [answer, setAnswer] = useState([]); //frontend, backend
  const [isSelected, setIsSelected] = useState(false); //for error
  const [activeIndex, setActiveIndex] = useState(0); //
  const [isResultAval, setIsResultAval] = useState(false);
  const [result, setResult] = useState([]); //final results

  const allowedQuizSection = {
    initial: 
  }

  const swiperRef = useRef(null);

  const reset = () => {
    setSelected(false);
    setSelectedOption(null);
  };

  const findResultDetails = (result) => {
    const careerMatches = [];

    result.forEach((item) => {
      const cRes = careersData.find((c) => c.slug === item.career);
      careerMatches.push(cRes);
    });

    console.log(careerMatches);
    setResult(careerMatches);
    setTimeout(() => {
      setIsResultAval(true);
      setShowLoader(false);
    }, 2000);
  };

  // findResultDetails()

  const calculateResult = (scoreboard) => {
    const sorted = scoreboard.sort((a, b) => b.score - a.score);
    const result = sorted.slice(0, 3);
    findResultDetails(result);
    return result;
  };

  const handleOutput = () => {
    const scoreboard = [];

    for (const item of answer) {
      const existingCareer = scoreboard.find((entry) => entry.career === item);

      if (existingCareer) {
        existingCareer.score += 1;
      } else {
        scoreboard.push({
          career: item,
          score: 1,
        });
      }
    }

    calculateResult(scoreboard);
  };

  const handleNextClick = () => {
    if (!selected) {
      setIsSelected(true);
      setTimeout(() => {
        setIsSelected(false);
      }, 2500);
      return;
    }
    swiperRef.current.slideNext();
    reset(); //reset values
    if (activeIndex === 9) {
      setShowLoader(true);
      handleOutput();
    }
    // console.log(answer);
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
         {/* show section */}
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
