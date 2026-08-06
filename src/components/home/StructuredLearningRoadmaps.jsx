import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css/navigation";
import "swiper/css/navigation";
import Container from "../layout/Container";
import { ChevronLeft, ChevronRight, MoveRight, MoveUpRight, Tally1 } from "lucide-react";
import { learningRoadmapData } from "../../mockdata/home";
import React from "react";

const StructuredLearningRoadmaps = () => {
  return (
    <section className="">
      <Container
        className="
                   min-h-[500px] my-[60px] py-10
                   flex flex-col items-center justify-center
                   "
      >
        <h2 className="mb-5 text-center">Structured Learning Roadmaps</h2>
        <p className="mb-15 text-center">
          Step-by-step learning paths designed to keep you focused and
          organised.
        </p>

        <div className="swiper_container w-full relative">
          <div className="swiper_navigation_container flex justify-center gap-2 md:justify-between absolute -left-2 -right-2 md:-left-10 md:-right-10 top:[0] -bottom-[12%] md:top-[50%] md:bottom-[50%] z-10">
            <button className="custom--prev cursor-pointer p-2">
              <ChevronLeft size={24} className=" hover:text-violet-500" />
            </button>
            <button className="custom-next cursor-pointer p-2">
              <ChevronRight size={24}  className=" hover:text-violet-500" />
            </button>
          </div>

          <Swiper
            loop={true}
            speed={800}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 4000,
            }}
            navigation={{
              prevEl: ".custom--prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={2}
            breakpoints={
              {
                390: {
                  slidesPerView: 3
                }
              }
            }
            className="h-fit"
          >
            {learningRoadmapData.map((card) => (
              <SwiperSlide
              className={`${card.bgColor} group  px-5 py-8 rounded-2xl`}
                key={card.id}
              >
                <div className="w-full flex flex-col items-start gap-5">
                  <h3 className="text-xl mb-2.5 font-medium ">{card.title}</h3>
                  <ul className="flex flex-col gap-0 justify-start">
                    {card.tools.map((tool, index) => (
                      <React.Fragment key={index}>
                        <li>
                          <span className="mr-2">●</span>
                          {tool}
                        </li>
                        {index < card.tools.length - 1 && (
                          <li>
                            <Tally1 />
                          </li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                  <a href={card.buttonUrl}>
                    <button className="flex gap-2 items-center bg-white text-black rounded px-5 py-2.5 mt-5 cursor-pointer group/button">
                    {card.buttonText}
                    <MoveUpRight
                      size={16}
                      className="transition-transform duration-100 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                    />
                  </button>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

         <button className="secondary-btn mt-20 py-2.5 px-5 flex gap-2.5 items-center">View More <MoveRight /></button>
      </Container>
    </section>
  );
};

export default StructuredLearningRoadmaps;
