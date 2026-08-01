import { useSelector } from "react-redux";
import Container from "../layout/Container";
import { exploreCareerPath } from "../../mockdata/home";
import { MoveRight } from "lucide-react";

const ExploreCareerPath = () => {
  const theme = useSelector((store) => store.config.defaultTheme);

  const exploreCareerPathClass = `
            ${theme === "light" ? "card_bg_gradient_light" : "card_bg_gradient"}
            h-[400px] rounded-2xl p-6
            flex flex-col gap-4 justify-between
            `;

  return (
    <section>
      <Container
        className="
               min-h-[500px] my-[60px]
               flex flex-col items-center justify-center
               "
      >
        <h2 className="mb-5">Explore Career Paths</h2>
        <p className="mb-15 text-center">
          Browse careers across technology, design, data, and more.
        </p>
        <div
          className="
                   w-full
                   grid grid-cols-1 gap-10
                   md:grid-cols-3
                   "
        >
          {exploreCareerPath.map((card) => (
            <div
             className={exploreCareerPathClass}
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-xl mt-10 mb-5 font-medium">{card.title}</h3>
                <p>Difficulty: {card.difficulty}</p>
                <p>Duration: {card.duration}</p>
                <p>
                 {card.desc}
                </p>
              </div>
              <button className="hover:text-black bg-transparent hover:bg-white border rounded-md text-[14px] cursor-pointer light:text-white py-2 mt-5">
               {card.buttonText}
              </button>
            </div>
          ))}
        
        </div>

        <button className="secondary-btn mt-20 py-2.5 px-5 flex gap-2.5 items-center">View More <MoveRight /></button>
      </Container>
    </section>
  );
};

export default ExploreCareerPath;
