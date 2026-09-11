import Container from "../layout/Container";

const CareerOverview = ({ data }) => {
  const { title, overview } = data;

  if(!title) return;
  if(!overview) return;
  return (
    <section>
      <Container
        className="
                      w-full h-full
                      flex flex-col items-center justify-center
                      "
      >
        <div className="flex flex-col items-start">
          
          <h2 className="mb-2 text-2xl md:mb-2 light:text-white">What is {title}?</h2>
          <p className="leading-8 text-white/90">{overview}</p>
        </div>
      </Container>
    </section>
  );
};

export default CareerOverview;
