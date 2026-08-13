import Container from "../layout/Container";
import MissionImg from "../../assets/our-mission.png"

const OurMission = () => {
  return (
    <section className="md:h-[600px] ">
      <Container
        className="
                       h-full  py-10
                         grid grid-cols-1 md:grid-cols-2
                         "
      >
        <div className=" flex flex-col justify-center order-1">
          <h2 className="text-7xl md:text-8xl mb-5">Our Mission</h2>
          <p className="leading-relaxed">
            Choosing a career can feel overwhelming when there are hundreds of
            technologies, roles, courses, and learning resources available.
            PathPilot's mission is to simplify that journey by bringing career
            exploration and structured learning into one place. We want learners
            to spend less time wondering "What should I learn?" and more
            time actually learning and building.
          </p>
        </div>
        <div className="order-0">
            <img src={MissionImg} alt="our-mission-img" />
        </div>
      </Container>
    </section>
  );
};

export default OurMission;
