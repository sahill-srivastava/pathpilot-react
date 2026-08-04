import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
// import "swiper/css/navigation";
import "swiper/css/navigation";
import Container from "../layout/Container";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

const StructuredLearningRoadmaps = () => {
  return (
    <section className="bg-violet-700/10">
      <Container
        className="
                   min-h-[500px] my-[60px]
                   flex flex-col items-center justify-center
                   "
      >
        <h2 className="mb-5">Structured Learning Roadmaps</h2>
        <p className="mb-15 text-center">
          Step-by-step learning paths designed to keep you focused and
          organised.
        </p>

     <div className="swiper_container w-full relative">
        <div className="swiper_navigation_container flex justify-between absolute -left-10 -right-10 top-[50%] bottom-[50%] z-10">
          <button className="custom--prev cursor-pointer p-2">
            <ChevronLeft size={24} />
          </button>
          <button className="custom-next cursor-pointer p-2">
            <ChevronRight size={24} />
          </button>
        </div>

         <Swiper
         loop={true}
          speed={600}
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom--prev",
            nextEl: ".custom-next",
          }}
          spaceBetween={30}
          slidesPerView={3}
          className="h-[200px]"
        >
          <SwiperSlide className="bg-red-500 p-5 rounded">
            <div className="w-full flex flex-col gap-10 items-start">
              <h3>Frontend Development</h3>
              <ul className="flex flex-wrap gap-2.5 justify-start">
                <li>HTML</li>
                <li>
                  <MoveRight />
                </li>
                <li>CSS</li>
                <li>
                  <MoveRight />
                </li>
                <li>JavaScript </li>
                <li>
                  <MoveRight />
                </li>
                <li>React</li>
                <li>
                  <MoveRight />
                </li>
                <li>Projects</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-yellow-300 p-5 rounded">
            <div className="w-full flex flex-col gap-10 items-start">
              <h3>Frontend Development</h3>
              <ul className="flex flex-wrap gap-2.5 justify-start">
                <li>HTML</li>
                <li>
                  <MoveRight />
                </li>
                <li>CSS</li>
                <li>
                  <MoveRight />
                </li>
                <li>JavaScript </li>
                <li>
                  <MoveRight />
                </li>
                <li>React</li>
                <li>
                  <MoveRight />
                </li>
                <li>Projects</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-yellow-300 p-5 rounded">
            <div className="w-full flex flex-col gap-10 items-start">
              <h3>Frontend Development</h3>
              <ul className="flex flex-wrap gap-2.5 justify-start">
                <li>HTML</li>
                <li>
                  <MoveRight />
                </li>
                <li>CSS</li>
                <li>
                  <MoveRight />
                </li>
                <li>JavaScript </li>
                <li>
                  <MoveRight />
                </li>
                <li>React</li>
                <li>
                  <MoveRight />
                </li>
                <li>Projects</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-yellow-300 p-5 rounded">
            <div className="w-full flex flex-col gap-10 items-start">
              <h3>Frontend Development</h3>
              <ul className="flex flex-wrap gap-2.5 justify-start">
                <li>HTML</li>
                <li>
                  <MoveRight />
                </li>
                <li>CSS</li>
                <li>
                  <MoveRight />
                </li>
                <li>JavaScript </li>
                <li>
                  <MoveRight />
                </li>
                <li>React</li>
                <li>
                  <MoveRight />
                </li>
                <li>Projects</li>
              </ul>
            </div>
          </SwiperSlide>
         
         
        </Swiper>
     </div>
      </Container>
    </section>
  );
};

export default StructuredLearningRoadmaps;
