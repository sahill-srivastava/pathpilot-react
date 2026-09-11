import Container from "../layout/Container";

const CareerLearningPaths = ({ data }) => {
  const { suggestedLearningPaths } = data;
  return (
    <section className="h-full">
      <Container
        className="
                w-full h-full
                flex flex-col items-center gap-2.5
              "
      >
        <h2>Suggested Learning Paths</h2>
        <p>
         Explore structured learning paths that help you build the skills needed for your next career move.
        </p>
        <div
          className="
               w-full h-fit mt-[80px]
               grid grid-cols-1
               md:grid-cols-[1fr_1fr_1fr]
               gap-4
             "
        >
          {suggestedLearningPaths.map((r) => {
            return (
              <div
                key={r}
                className="
                    bg-zinc-900
                    inset-shadow-2xs inset-shadow-violet-800
                    relative h-full
                    px-4 py-10
                    rounded-xl
                    flex flex-col items-center
                    gap-10
                  "
              >
                <ul className="flex flex-col items-center gap-4 uppercase">
                  <li>{r}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CareerLearningPaths;
