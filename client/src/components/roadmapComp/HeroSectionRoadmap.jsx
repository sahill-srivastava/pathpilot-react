import { Link } from "react-router-dom";
import Container from "../layout/Container";

const HeroSectionRoadmap = () => {
  return (
    <section
      className={`hero_bg_color light:hero_bg_color_light md:h-[600px] `}
    >
      <Container
        className="
                        h-full  py-10
                          flex flex-col items-center justify-center gap-2.5
                          "
      >
        <div className="w-[330px] md:w-[800px] flex flex-col items-center text-center justify-center gap-2.5">
          <span
            className="bg-violet-900 light:text-white rounded-4xl mb-2.5 font-medium px-5 py-2.5 uppercase"
            style={{ fontSize: "13px" }}
          >
            LEARNING ROADMAPS
          </span>
          <h1 className="mb-2 md:mb-5 light:text-white">
            Choose Your
            <span className="text-violet-600"> Learning Path</span>
          </h1>
          <p className="md:text-lg light:text-white">
            Follow structured roadmaps that take you from the fundamentals to
            practical, job-ready skills.
          </p>
          <div className="mt-5 md:mt-10 flex gap-6">
            <Link
              
              className="secondary-btn px-3 py-2.5"
            >
             Explore Careers
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSectionRoadmap;
