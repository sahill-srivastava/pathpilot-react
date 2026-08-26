import Container from "../layout/Container";
import PathpilotForImg from "../../assets/pathpilot-for.png";

const PathpilotFor = () => {
  return (
    <section>
      <Container
        className="
                        h-full md:mt-20 md:mb-40
                         grid grid-cols-1 md:grid-cols-2 gap-5
                          "
      >
        <div className="relative  flex items-center justify-center">
          <img
            className="w-full relative md:absolute md:top-[-70px] md:left-[-100px]  "
            src={PathpilotForImg}
            alt="pathpilot for image"
          />
        </div>
        <div className=" flex flex-col gap-4">
           <span
            className="bg-violet-900 light:text-white w-fit rounded-4xl mb-2.5 font-medium px-5 py-2.5 uppercase"
            style={{ fontSize: "13px" }}
          >
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl mb-2">Who Is PathPilot For?</h2>
          <p className="ps-2 text-lg">PathPilot is designed for:</p>
          <ul className="ps-2 list-disc  ms-6 flex flex-col gap-4 text-lg">
            <li>Students exploring career options</li>
            <li>Beginners starting their technical journey</li>
            <li>Learners switching to a new career</li>
            <li>Self-taught developers and professionals</li>
            <li>Anyone looking for a structured way to learn new skills</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default PathpilotFor;
