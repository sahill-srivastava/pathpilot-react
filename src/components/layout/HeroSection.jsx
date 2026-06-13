import Container from "./Container";
// import pathpilotHeroImg from  "../../assets/pathpilot-hero-img.png"
import heroBanner from "../../assets/hero-banner.png";

import useFadeRight from "../../hooks/useFadeRight";

export default function HeroSection() {
  const headingRef = useFadeRight();
  const paraRef = useFadeRight();
  const btnTextRef = useFadeRight();

  return (
    <section
      style={{ backgroundImage: `url(${heroBanner})` }}
      className="bg-cover  md:bg-center bg-no-repeat"
    >
      <Container
        className="
            min-h-[600px] grid grid-cols-1 bg-transparent

            md:grid-cols-2
            
            "
      >
        <div className="flex flex-col justify-center items-start">
          <h1
            ref={headingRef}
            className="text-6xl font-semibold leading-16 md:leading-20  mb-5 light:text-white"
          >
            Discover Your Future, One Step at a Time.
          </h1>
          <p
            ref={paraRef}
            className="max-w-lg text-lg leading-8 light:text-white"
          >
            PathPilot helps students explore careers, discover interests, and
            follow structured learning roadmaps to build confidence in their
            future.
          </p>
          <div className="mt-10 flex gap-6">
            <button ref={btnTextRef} className="primary-btn px-3 py-2.5">
              Explore Careers
            </button>
            <button className="secondary-btn px-3 py-2.5 light:text-white">
              Take Career Quiz
            </button>
          </div>
        </div>

        <div></div>
      </Container>
    </section>
  );
}
