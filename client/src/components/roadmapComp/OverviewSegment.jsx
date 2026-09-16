import Container from "../layout/Container";

const OverviewSegment = ({ data }) => {
  const { title, overview } = data;
  return (
    <section>
      <Container
        className="
                         w-full h-[400px] 
                         flex flex-col items-center justify-center
                         "
      >
        <span
          className="bg-violet-900 light:text-white rounded-4xl mb-4 font-medium px-5 py-2.5 uppercase"
          style={{ fontSize: "13px" }}
        >
          Overview
        </span>
        <h2 className="mb-2 md:mb-6 md:text-4xl light:text-white text-center">{title}</h2>
        <p className="md:w-[80%] leading-8 text-center md:text-lg text-white/90">
          {overview}
        </p>
      </Container>
    </section>
  );
};

export default OverviewSegment;
