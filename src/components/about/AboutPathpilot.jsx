import Container from "../layout/Container";

const AboutPathpilot = () => {
  return (
    <section className="hero_bg_color md:h-[600px] ">
      <Container
        className="
                    h-full  py-10
                      flex flex-col items-center justify-center gap-2.5
                      "
      >
        <div className="w-[330px] md:w-[800px] flex flex-col items-center text-center justify-center gap-2.5">
          <span
            className="bg-violet-900 rounded-4xl mb-2.5 font-medium px-5 py-2.5 uppercase"
            style={{ fontSize: "13px" }}
          >
            About PathPilot
          </span>
          <h1 className="mb-2 md:mb-5 ">
            Helping You <span className="text-violet-600">Find Your</span> Path
          </h1>
          <p className="md:text-lg">
            PathPilot is a career guidance and learning platform built to help
            students and beginners make better decisions about their future.
          </p>
          <p className="md:text-lg">
            Explore career options, understand what different roles require,
            follow structured learning roadmaps, and build practical skills one
            step at a time.
          </p>
          <div className="mt-5 md:mt-10 flex gap-6">
            <button className="primary-btn px-3 py-2.5">Explore Careers</button>
            <button className="secondary-btn px-3 py-2.5 light:white">
              Take Career Quiz
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPathpilot;
