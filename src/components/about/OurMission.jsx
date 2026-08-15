import Container from "../layout/Container";
import BoyImg from "../../assets/boy.png";

const OurMission = () => {
  return (
    <section>
      <Container
        className="
                       h-full  py-10
                         grid grid-cols-1 gap-10
                         "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="h-[400px] bg-zinc-900 rounded-4xl p-8">
            <h2 className="w-1/2 text-6xl leading-tight mb-5">Our Mission</h2>
            <p className="leading-relaxed">
              Choosing a career can feel overwhelming when there are hundreds of
              technologies, roles, courses, and learning resources available.
              PathPilot's mission is to simplify that journey by bringing career
              exploration and structured learning into one place. We want
              learners to spend less time wondering{" "}
              <strong>"What should I learn?" </strong>
              and more time actually learning and building.
            </p>
          </div>
          <div className="h-[400px] bg-violet-800 rounded-4xl p-8">
            <h2 className="w-1/2 text-6xl leading-tight mb-5">Our Vision</h2>
            <p className="leading-relaxed">
              PathPilot is being built with a long-term vision: to become a
              practical career and learning companion that helps people move
              from <strong>confusion → clarity → skills → opportunities</strong>
              . As the platform evolves, we aim to introduce more personalized
              learning experiences, progress tracking, career assessments,
              practical projects, and other tools that help learners move
              forward with confidence.
            </p>
          </div>
        </div>
        <div className="bg-zinc-900 rounded-4xl p-8 grid grid-cols-1 md:grid-cols-2">
         <div>
           <h2 className="w-[20%] text-6xl leading-tight mb-10">Our Approach</h2>
          <h4 className="text-xl mb-4">Learn With Direction, Not Randomly</h4>
          <p className=" leading-relaxed">
            PathPilot focuses on a simple
            principle: <strong>Know where you're going before you start running. </strong>
            Instead of jumping between random tutorials and technologies,
            learners can understand the bigger picture, choose a direction, and
            follow a structured path toward their goals.
          </p>
         </div>
         <div className="flex justify-end">
          <img className="w-[30%]" src={BoyImg} alt="boy-image" />
         </div>
        </div>
      </Container>
    </section>
  );
};

export default OurMission;
