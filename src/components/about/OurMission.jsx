import Container from "../layout/Container";
import BoyImg from "../../assets/boy.png";

const OurMission = () => {
  return (
    <section>
      <Container
        className="
                       h-full  py-20
                         grid grid-cols-1 gap-10
                         "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className=" bg-zinc-900 rounded-4xl  p-6 md:p-8">
            <h2 className="w-1/2 text-4xl md:text-6xl leading-tight mb-5">Our Mission</h2>
            <p className="leading-relaxed">
              Choosing a career shouldn't feel overwhelming. PathPilot brings
              career exploration and structured learning together, helping
              learners spend less time wondering “What should I learn?” and more
              time learning, building, and moving forward.
            </p>
          </div>
          <div className=" bg-violet-800 rounded-4xl  p-6 md:p-8">
            <h2 className="w-1/2 text-4xl md:text-6xl leading-tight mb-5">Our Vision</h2>
            <p className="leading-relaxed">
              PathPilot aims to become a practical career and learning companion
              that helps people move from confusion → clarity → skills →
              opportunities — with personalized learning, progress tracking,
              assessments, and practical projects.
            </p>
          </div>
        </div>
        <div className="bg-zinc-900 rounded-4xl  p-6 md:p-8 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="w-[20%] text-4xl md:text-6xl leading-tight mb-10">
              Our Approach
            </h2>
            <h4 className="text-xl mb-4">Learn With Direction, Not Randomly</h4>
            <p className=" leading-relaxed">
              Know where you're going before you start running. PathPilot helps
              learners understand their options, choose a direction, and follow
              a structured path toward their goals.
            </p>
          </div>
          <div className="hidden md:flex justify-center ms-10 ">
            <img className="w-[30%]" src={BoyImg} alt="boy-image" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurMission;
