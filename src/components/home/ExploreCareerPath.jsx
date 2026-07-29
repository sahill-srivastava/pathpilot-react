import Container from "../layout/Container";

const ExploreCareerPath = () => {
  return (
    <section>
      <Container
        className="
               min-h-[500px]
               flex flex-col items-center justify-center
               "
      >
        <h2 className="mb-5">Explore Career Paths</h2>
        <p>Browse careers across technology, design, data, and more.</p>
        <div
          className="
                   w-full
                   grid grid-cols-1 gap-10
                   md:grid-cols-3
                   "
        >

        </div>
      </Container>
    </section>
  );
};

export default ExploreCareerPath;
