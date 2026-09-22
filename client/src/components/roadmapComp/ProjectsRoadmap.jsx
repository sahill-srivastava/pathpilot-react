import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Container from "../layout/Container";
import { ChevronLeft, ChevronRight, MoveRight, MoveUpRight } from "lucide-react";

const ProjectsRoadmap = ({ data }) => {
  const { projects } = data;
  console.log(projects);

  return (
    <section>
      <Container
        className="
                  w-full h-full my-25 
                  flex flex-col items-center justify-center
                  "
      >
        <span
          className="bg-violet-900 light:text-white rounded-4xl mb-4 font-medium px-5 py-2.5 uppercase"
          style={{ fontSize: "13px" }}
        >
          Projects
        </span>
        <h2 className="mb-2 md:mb-6 md:text-4xl light:text-white text-center">
          Build While You Learn
        </h2>
        <p className="md:w-[80%] leading-8 text-center md:text-lg text-white/90">
          Turn what you learn into real projects and build a portfolio along the
          way.
        </p>
        <div className="w-full relative my-15">
          <div className="absolute top-[50%] w-full flex justify-between">
            <div className="prev_btn">
              <ChevronLeft />
            </div>
            <div className="next_btn">
              <ChevronRight />
            </div>
          </div>
          <div className="mx-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".prev_btn",
                nextEl: ".next-btn",
              }}
              // autoplay
              slidesPerView={3}
              spaceBetween={20}
              loop
              speed={600}
            >
              <SwiperSlide>
                <div className="h-full w-full rounded-2xl inset-shadow-[0_8px_25px_rgba(0,0,0,0.25)] inset-shadow-violet-700 py-5 px-7 flex flex-col gap-2.5">
                    <h3 className="mt-3">Task Management App</h3>
                    <p>Level: Intermediate</p>
                    <p>Skills: React, Node.js, MongoDB</p>
                    <p>
                      Build a full-stack task application with authentication,
                      CRUD operations, and a responsive frontend.
                    </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full rounded-2xl inset-shadow-[0_8px_25px_rgba(0,0,0,0.25)] inset-shadow-violet-700 py-5 px-7 flex flex-col gap-2.5">
                    <h3 className="mt-3">Task Management App</h3>
                    <p>Level: Intermediate</p>
                    <p>Skills: React, Node.js, MongoDB</p>
                    <p>
                      Build a full-stack task application with authentication,
                      CRUD operations, and a responsive frontend.
                    </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full rounded-2xl inset-shadow-[0_8px_25px_rgba(0,0,0,0.25)] inset-shadow-violet-700 py-5 px-7 flex flex-col gap-2.5">
                    <h3 className="mt-3">Task Management App</h3>
                    <p>Level: Intermediate</p>
                    <p>Skills: React, Node.js, MongoDB</p>
                    <p>
                      Build a full-stack task application with authentication,
                      CRUD operations, and a responsive frontend.
                    </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full rounded-2xl inset-shadow-[0_8px_25px_rgba(0,0,0,0.25)] inset-shadow-violet-700 py-5 px-7 flex flex-col gap-2.5">
                    <h3 className="mt-3">Task Management App</h3>
                    <p>Level: Intermediate</p>
                    <p>Skills: React, Node.js, MongoDB</p>
                    <p>
                      Build a full-stack task application with authentication,
                      CRUD operations, and a responsive frontend.
                    </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full rounded-2xl inset-shadow-[0_8px_25px_rgba(0,0,0,0.25)] inset-shadow-violet-700 py-5 px-7 flex flex-col gap-2.5">
                    <h3 className="mt-3">Task Management App</h3>
                    <p>Level: Intermediate</p>
                    <p>Skills: React, Node.js, MongoDB</p>
                    <p>
                      Build a full-stack task application with authentication,
                      CRUD operations, and a responsive frontend.
                    </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full rounded-2xl inset-shadow-[0_8px_25px_rgba(0,0,0,0.25)] inset-shadow-violet-700 py-5 px-7 flex flex-col gap-2.5">
                    <h3 className="mt-3">Task Management App</h3>
                    <p>Level: Intermediate</p>
                    <p>Skills: React, Node.js, MongoDB</p>
                    <p>
                      Build a full-stack task application with authentication,
                      CRUD operations, and a responsive frontend.
                    </p>
                </div>
              </SwiperSlide>
             
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsRoadmap;
