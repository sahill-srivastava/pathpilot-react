import { ArrowRight } from "lucide-react";
import Container from "../layout/Container";

const CtaBanner = () => {
  return (
    <section className="cta_bg_color h-[300px] md:h-[400px] " >
      <Container
        className="
                    h-full  my-[60px] py-10
                      flex flex-col items-center justify-center gap-2.5
                      "
      >
        <h2 className="text-center md:text-4xl mb-1 md:mb-4 light:text-white">Ready to Start Your <span className="text-violet-600">Learning</span> Journey?</h2>
        <p className="text-center light:text-white">Explore careers, discover learning roadmaps, and take your first step toward building a successful future.</p>
        <button className="mt-5 md:mt-10 primary-btn px-4 md:px-10 py-2.5 md:py-4 flex gap-1 items-center">Get Started <ArrowRight /></button>
       
      </Container>
    </section>
  );
};

export default CtaBanner;
