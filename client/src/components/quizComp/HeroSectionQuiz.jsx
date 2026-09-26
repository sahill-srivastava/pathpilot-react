import { Link } from "react-router-dom";
import Container from "../layout/Container";

const HeroSectionQuiz = () => {
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
            Quiz
          </span>
          <h1 className="mb-2 md:mb-5 light:text-white">
            Find Your
            <span className="text-violet-600"> Career</span> Path
          </h1>
          <p className="md:text-lg light:text-white">
            Answer a few questions about your interests and strengths to
            discover career paths that align with you.
          </p>
          <div className="mt-5 md:mt-10 flex gap-6">
            <Link to="/about" className="primary-btn px-3 py-2.5">
              Start Quiz
            </Link>
          </div>
          <div className="mt-10">
            <ul className="flex flex-wrap flex-col md:flex-row gap-2.5 md:text-lg">
                <li className="shrink-0">10 Questions</li>
                <li className="shrink-0">•</li>
                <li className="shrink-0">~3 Minutes</li>
                <li className="shrink-0">•</li>
                <li className="shrink-0">Personalized Results</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSectionQuiz;
