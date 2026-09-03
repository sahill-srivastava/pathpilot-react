import Container from "../layout/Container";

const CareerOverview = ({ data }) => {
  console.log(data);

  const { title, overview } = data;
  return (
    <section>
      <Container
        className="
                      my-15  min-h-[400px]
                      flex flex-col items-center justify-center
                      "
      >
        <div className="w-[800px] flex flex-col gap-2.5 items-center">
          <span
            className="bg-violet-900 light:text-white rounded-4xl mb-2.5 font-medium px-5 py-2.5 uppercase"
            style={{ fontSize: "13px" }}
          >
            Career Overview
          </span>
          <h1 className="mb-2 md:mb-5 light:text-white">What is {title}?</h1>
          <p className="text-center">{overview}</p>
        </div>
      </Container>
    </section>
  );
};

export default CareerOverview;
