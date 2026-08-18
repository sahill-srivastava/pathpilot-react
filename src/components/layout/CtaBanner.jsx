import { ArrowRight } from "lucide-react";
import Container from "./Container";
import { Link } from "react-router-dom";

const CtaBanner = ({data}) => {
  return (
    <section className="cta_bg_color h-[300px] md:h-[400px] " >
      <Container
        className="
                    h-full  my-[60px] py-10
                      flex flex-col items-center justify-center gap-2.5
                      "
      >
        <h2 className="text-center md:text-4xl mb-1 md:mb-4 light:text-white">{data.heading.prefixText} <span className="text-violet-600">{data.heading.highlightedText}</span> {data.heading.suffixText}</h2>
        <p className="text-center light:text-white">{data.description}</p>
        <Link to={data.buttonUrl} className="mt-5 md:mt-10 primary-btn px-4 md:px-10 py-2.5 md:py-4 flex gap-1 items-center">{data.buttonText} <ArrowRight /></Link>
       
      </Container>
    </section>
  );
};

export default CtaBanner;
