import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import QuizQuestion from "./QuizQuestion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { quizData } from "../../mockdata/quizQuesAns";
import { useRef, useState } from "react";

const QuizSegment = () => {
  const [selected, setSelected] = useState(false); //true/false
  const [selectedOption, setSelectedOption] = useState(null); //A,B,C,D
  const [answer, setAnswer] = useState(null); //A,B,C,D
  const [isSelected, setIsSelected] = useState(false); //for error
  const [activeIndex, setActiveIndex] = useState(0); //
  const swiperRef = useRef(null);

  const reset = () => {
    setSelected(false);
    setSelectedOption(null);
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
    reset();
    console.log(selectedOption);
    console.log(answer);
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
        </div>
      </Container>
    </section>
  );
};

export default QuizSegment;
