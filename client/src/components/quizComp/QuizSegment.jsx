import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import QuizQuestion from "./QuizQuestion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { quizData } from "../../mockdata/quizQuesAns";
import { useState } from "react";

const pointsTable = [];

const QuizSegment = () => {
  const [selected, setSelected] = useState("");
  const [visibleQuestionId, setVisibleQuestionId] = useState(1);
  // const [answer, setAnswer] = useState("")

  console.log(quizData)

  const handlePoints = (answer) => {
    console.log(answer);
    console.log(pointsTable);

    pointsTable.push(answer);

    console.log(pointsTable);
  };

  const handleAnswers = () => {
    const target = quizData.find((item) => (item.id = visibleQuestionId - 1));

    const option = target.options.find((item) => item.id === selected);

    // console.log(option.career);
    // setAnswer(option.career)
    handlePoints(option.career);

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
              navigation={{
                prevEl: ".back-btn",
                nextEl: ".next-btn",
              }}
              onSlideChange={(swiper) =>
                setVisibleQuestionId(swiper.activeIndex + 1)
              }
            >
              {quizData.map((q) => {
                console.log(q)

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
                onClick={handleAnswers}
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
