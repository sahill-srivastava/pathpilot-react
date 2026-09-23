import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Container from "../layout/Container";
import { ChevronLeft, ChevronRight, FolderCode } from "lucide-react";

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
            <div className="prev_btn cursor-pointer p-2 rounded-full">
              <ChevronLeft />
            </div>
            <div className="next_btn cursor-pointer p-2 rounded-full">
              <ChevronRight />
            </div>
          </div>
          <div className="mx-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".prev_btn",
                nextEl: ".next_btn",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              loop
              speed={600}
              breakpoints={{
                390: {
                  slidesPerView: 1,
                },

                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {projects.map((p, index) => {
                const { title, level, skills, description } = p;
                return (
                  <SwiperSlide key={index}>
                    <div className="card_bg_gradient h-[380px] rounded-2xl p-6 flex flex-col gap-2">
                      <div className="bg-violet-600 h-[50px] w-[50px] flex items-center justify-center rounded-full ">
                        <FolderCode />
                      </div>
                      <div className="mt-5 flex flex-col gap-3">
                        <h3 className="mt-3 text-xl">{title}</h3>
                        <p className="text-violet-500 italic">{level}</p>
                        <p>{skills.join(" • ")}</p>
                        <p className="mt-3">{description}..</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsRoadmap;
