import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef, useState } from "react";
import QuizQuestion from "./QuizQuestion";
import { quizData } from "../../mockdata/quizQuesAns";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { careersData } from "../../mockdata/career";

const QuizWindow = ({setAllowedSection, setResult, setIsResultAval}) => {
  const [selected, setSelected] = useState(false); //true/false
  const [selectedOption, setSelectedOption] = useState(null); //A,B,C,D
  const [answer, setAnswer] = useState([]); //frontend, backend
  const [activeIndex, setActiveIndex] = useState(0); //
  const [isSelected, setIsSelected] = useState(false); //for error

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

    setResult(careerMatches);
    setTimeout(() => {
      setIsResultAval(true);
      setAllowedSection("successWindow")
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
      // setShowLoader(true);
      setAllowedSection("load")
      handleOutput();
    }
  };


  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={false}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {quizData.map((q) => {
          return (
            <SwiperSlide>
              <QuizQuestion
                data={q}
                selected={selected}
                setSelected={setSelected}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                setAnswer={setAnswer}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-full flex justify-between mt-6">
        <button
          className={`back-btn flex items-center gap-1 bg-white text-black px-2 py-1 rounded-sm cursor-pointer ${activeIndex === 0 ? "opacity-0" : " opacity-100"} `}
          onClick={() => swiperRef.current.slidePrev()}
        >
          <ArrowLeft /> Back
        </button>
        <button
          className="next-btn flex items-center gap-1 bg-white text-black px-2 py-1 rounded-sm cursor-pointer"
          onClick={handleNextClick}
        >
          {activeIndex === 9 ? "Submit" : "Next"} <ArrowRight />
        </button>
      </div>
      <p
        className={`${isSelected ? "block" : "hidden"} text-sm text-red-600 mt-6`}
      >
        Please select an option...
      </p>
    </div>
  );
};

export default QuizWindow;
