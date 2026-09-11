import Container from "../layout/Container";

const CareerInvolve = ({ data }) => {
  const { whatItInvolves } = data;
  return (
    <section>
      <Container
        className="
                         w-full h-full
                         flex flex-col items-center justify-center
                         "
      >
        <div className="flex flex-col items-start">
          <h2 className="mb-2 text-2xl md:mb-2 light:text-white">
           What does this career involve?                                 
          </h2>
          <p className="leading-8 text-white/90">{whatItInvolves}</p>
        </div>
      </Container>
    </section>
  );
};

export default CareerInvolve;
