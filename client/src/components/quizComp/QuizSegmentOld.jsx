import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import QuizQuestion from "./QuizQuestion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { quizData } from "../../mockdata/quizQuesAns";
import { useRef, useState } from "react";


const QuizSegment = () => {
  const [selected, setSelected] = useState(false);
  const swiperRef = useRef(null)


  const handleClick = () => {
    console.log(swiperRef)
  }
  const [visibleQuestionId, setVisibleQuestionId] = useState(null);

  console.log("visi: ", visibleQuestionId)

  const handlePoints = (answer) => {

    pointsTable.push(answer);

    // console.log(pointsTable);
  };

  const handleAnswers = () => {
    const target = quizData.find((item) => (item.id = visibleQuestionId));

    const option = target.options.find((item) => item.id === selected);

    console.log(option.career);
    // setAnswer(option.career)
    // handlePoints(option.career);

    return;
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
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              loop={false}
              // onSlideChange={(swiper) =>
              //   setVisibleQuestionId(swiper.activeIndex)
              // }
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {quizData.map((q) => {

                return (
                  <SwiperSlide id={q.id}>
                    <QuizQuestion
                      data={q}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="w-full flex justify-between mt-6">
              <button
                className={`back-btn flex items-center gap-1 bg-white text-black px-2 py-1 rounded-sm cursor-pointer ${visibleQuestionId === 1 ? "opacity-0" : " opacity-100"}`}
              >
                <ArrowLeft /> Back
              </button>
              <button
                className="next-btn flex items-center gap-1 bg-white text-black px-2 py-1 rounded-sm cursor-pointer"
                onClick={handleClick}
              >
                {visibleQuestionId === 10 ? "Submit" : "Next"} <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuizSegment;
