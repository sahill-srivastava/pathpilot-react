import { MoveUpRight } from "lucide-react";
import Container from "../layout/Container";
import Resources from "../../assets/resources.png"

const RecommendedResources = ({ data }) => {
  const { recommendedResources } = data;
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
          Resources
        </span>
        <h2 className="mb-2 md:mb-6 md:text-4xl light:text-white text-center">
          Learn From The Right Resources
        </h2>
        <p className="md:w-[70%] leading-8 text-center md:text-lg text-white/90">
          Access trusted documentation, learning platforms, and developer resources to strengthen your skills at every stage.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_40%] gap-10 md:gap-0 my-15">
          <div className="w-fit flex items-center justify-center md:justify-start gap-2">
            <img className="w-full md:w-[70%]" src={Resources} alt="some-img" />
          </div>

          <div className="flex flex-col items-start gap-8">
            {recommendedResources.map((r, index) => {
              const { title, topics } = r;
              return (
                <div
                  key={index}
                  className={
                    (index % 2 !== 0 ? "bg-violet-700" : "bg-zinc-800") +
                    " w-full h-[100px] grid grid-cols-[1fr_30%] items-center rounded-2xl p-4"
                  }
                >
                  <div>
                    <h5 className="mb-1">{title}</h5>
                    <p>{topics.join(", ")}</p>
                  </div>
                  <div className="flex justify-end items-center">
                    <a href="#" className="cursor-pointer hover:scale-110 p-2">
                      <MoveUpRight />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecommendedResources;
