import Container from "../layout/Container";

const CareerInvolve = ({ data }) => {
  return (
    <section className="cta_bg_color h-[300px] md:h-[400px] ">
      <Container
        className="
                          h-full  my-[60px] py-10
                         flex flex-col items-center justify-center gap-2.5
                         "
      >
        <div className="w-[900px] flex flex-col items-center">
             <span
            className="bg-violet-900 light:text-white rounded-4xl mb-5 font-medium px-5 py-2.5 uppercase"
            style={{ fontSize: "13px" }}
          >
            Career Scope
          </span>
          <h2 className="text-center md:text-4xl mb-1 md:mb-10 light:text-white">
            What does this career involve?
          </h2>
          <p className="text-center light:text-white">{data}</p>
        </div>
      </Container>
    </section>
  );
};

export default CareerInvolve;
