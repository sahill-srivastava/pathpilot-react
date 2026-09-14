import { useSelector } from "react-redux";
import Container from "../layout/Container";
import { Link } from "react-router-dom";

const CardsRoadmap = ({ data }) => {
  const theme = useSelector((store) => store.config.defaultTheme);

  const careersDataClass = `
            ${theme === "light" ? "card_bg_gradient" : "card_bg_gradient"}
            h-[400px] rounded-2xl p-6
            flex flex-col gap-4 justify-between
            `;

  return (
    <section>
      <Container
        className="
               my-15
               flex flex-col items-center justify-center
               "
      >
        <div
          className="
                   w-full my-15
                   grid grid-cols-1 gap-10
                   md:grid-cols-3
                   "
        >
          {data &&
            data.map((card) => (
              <div key={card.id} className={careersDataClass}>
                <div className="flex flex-col gap-3 ">
                  <h3 className="text-xl mt-10 mb-5 font-medium light:text-white">
                    {card.title}
                  </h3>
                  <p className="light:text-white">
                    Difficulty: {card.difficulty}
                  </p>
                  <p className="light:text-white">Duration: {card.duration}</p>
                  <p className="light:text-white">{card.desc}</p>
                </div>
                <Link
                  to={`/roadmaps/${card.slug}`}
                  className="hover:text-black bg-transparent text-center hover:bg-white border rounded-md text-[14px] cursor-pointer light:text-white py-2 mt-5"
                >
                  {card.buttonText}
                </Link>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default CardsRoadmap;
