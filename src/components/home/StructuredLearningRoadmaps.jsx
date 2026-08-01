import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"
import Container from "../layout/Container";
import { MoveRight } from "lucide-react";

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

        {/* Swiper  */}
        <Swiper
        modules={Navigation}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        >
          <SwiperSlide>
            <div className="flex flex-col gap-2.5 items-start">
              <h3>Frontend Development</h3>
              <ul className="flex gap-2.5 justify-start">
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
          <SwiperSlide>
            <div className="w-full flex flex-col gap-2.5 items-start">
              <h3>Frontend Development</h3>
              <ul className="flex gap-2.5 justify-start">
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



      </Container>
    </section>
  );
};

export default StructuredLearningRoadmaps;
