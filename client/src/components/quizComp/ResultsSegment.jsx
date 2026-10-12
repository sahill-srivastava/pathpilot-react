import { Link } from "react-router-dom";
import Container from "../layout/Container";

const ResultsSegment = () => {
  return (
    <section>
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
          <div className="bg-zinc-900 h-[250px] inset-shadow-2xs inset-shadow-violet-800  px-4 py-4 rounded-xl flex flex-col items-center justify-center gap-5">
            <h4>Frontend Developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              quaerat.
            </p>
            <div className="mt-5 flex gap-4">
              <Link className=" primary-btn py-2 px-4 cursor-pointer">
                Explore Career
              </Link>
              <Link className="hover:text-black bg-transparent hover:bg-white border rounded-md text-[14px] cursor-pointer light:text-white py-2 px-4 ">
                View Roadmap
              </Link>
            </div>
          </div>
          <div className="bg-zinc-900 h-[250px] inset-shadow-2xs inset-shadow-violet-800  px-4 py-4 rounded-xl flex flex-col items-center justify-center gap-5">
            <h3 className="text-2xl">Frontend Developer</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              quaerat.
            </p>
            <div className="mt-5 flex gap-4">
              <Link className=" primary-btn py-2 px-4 cursor-pointer">
                Explore Career
              </Link>
              <Link className="hover:text-black bg-transparent hover:bg-white border rounded-md text-[14px] cursor-pointer light:text-white py-2 px-4 ">
                View Roadmap
              </Link>
            </div>
          </div>
          <div className="bg-zinc-900 h-[250px] inset-shadow-2xs inset-shadow-violet-800  px-4 py-4 rounded-xl flex flex-col items-center justify-center gap-5">
            <h3 className="text-2xl">Frontend Developer</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              quaerat.
            </p>
            <div className="mt-5 flex gap-4">
              <Link className=" primary-btn py-2 px-4 cursor-pointer">
                Explore Career
              </Link>
              <Link className="hover:text-black bg-transparent hover:bg-white border rounded-md text-[14px] cursor-pointer light:text-white py-2 px-4 ">
                View Roadmap
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResultsSegment;
