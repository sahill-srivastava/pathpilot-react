import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import QuizQuestion from "./QuizQuestion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { quizData } from "../../mockdata/quizQuesAns";

const QuizSegment = () => {

  console.log(quizData)
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
          <div>
            <Swiper 
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            autoplay
            loop={false}
            speed={600}
            navigation={
              {
                prevEl: ".back-btn",
                nextEl: ".next-btn"
              }
            }
            >
              {
                quizData.map(q => {
                  return (
                        <SwiperSlide>
                <QuizQuestion data={q} />
              </SwiperSlide>
                  )
                })
              }
            
            
            </Swiper>
            <div className="w-full flex justify-between mt-10">
              <button className="back-btn flex items-center gap-1 bg-white text-black px-2 py-1 rounded-sm cursor-pointer">
                <ArrowLeft /> Back
              </button>
              <button className="next-btn flex items-center gap-1 bg-white text-black px-2 py-1 rounded-sm cursor-pointer">
                Next <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuizSegment;
