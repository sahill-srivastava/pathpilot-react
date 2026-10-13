import { Link } from "react-router-dom";
import Container from "../layout/Container";
import { useSelector } from "react-redux";

const ResultsSegment = ({ showLoader, setShowLoader }) => {
  const result = useSelector((store) => store.quizResult.result);

  if (!result) {
    return;
  } else {
    setShowLoader(false);
    return (
      <section className={showLoader ? "block" : "hidden"}>
        <Container
          className="
                        h-full  py-10 my-10
                          flex flex-col items-center justify-center gap-10
                          "
        >
          <h2 className="text-5xl ">Your Results</h2>
          <p className="text-lg">
            Career paths that match your interests and strengths.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {result.map((r) => {
              const { id, title, desc } = r;
              return (
                <div
                  key={id}
                  className="bg-zinc-900 min-h-[250px] inset-shadow-2xs inset-shadow-violet-800  px-4 py-4 rounded-xl flex flex-col items-center justify-center gap-5"
                >
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <Link className=" primary-btn w-full text-center mt-4 py-2 px-4 cursor-pointer">
                    Explore Career
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }
};

export default ResultsSegment;
