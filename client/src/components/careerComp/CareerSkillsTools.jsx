import Container from "../layout/Container";

const CareerSkillsTools = ({ data }) => {
  const { requiredSkills, toolsUsed } = data;
  return (
    <section>
      <Container
        className="
                              w-full h-full
                              flex flex-col items-start
                              "
      >
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-2xl light:text-white">
            Skills Required
          </h2>
          <ul className="flex flex-wrap gap-2">
            {requiredSkills.map((r, index) => (
              <li className="bg-white/20 py-1 px-2 rounded" key={index}>
                {r}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl  mt-5 light:text-white">Tools Used</h2>
          <ul className="flex flex-wrap gap-2">
            {toolsUsed.map((r, index) => (
              <li className="bg-white/20 py-1 px-2 rounded" key={index}>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default CareerSkillsTools;
