import Container from "../layout/Container";

const CareerRelatedRoadmaps = ({ data }) => {
  console.log(data);
  const { relatedRoadmaps } = data;
  return (
    <section className="h-full">
      <Container
        className="
             w-full h-full
             flex flex-col items-center gap-2.5
           "
      >
        <h2>Related Roadmaps</h2>
        <p>
         Follow structured roadmaps to build the skills needed for this career.
        </p>
        <div
          className="
            w-full h-fit mt-[80px]
            grid grid-cols-1
            md:grid-cols-[1fr_1fr_1fr]
            gap-4
          "
        >
          {relatedRoadmaps.map((r) => {
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

export default CareerRelatedRoadmaps;
