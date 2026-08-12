import Container from "../layout/Container";
import CtaBgImg from "../../assets/cta-banner.png"

const CtaBanner = () => {
  return (
    <section className="h-[200px] md:h-[400px] cta_bg_color" >
      <Container
        className="
                      my-[60px] py-10
                      flex flex-col items-center justify-center
                      "
      >
        <h2 className="mb-10 text-center">Ready to Start Your Learning Journey?</h2>
        <p>Explore careers, discover learning roadmaps, and take your first step toward building a successful future.</p>
        
       
      </Container>
    </section>
  );
};

export default CtaBanner;
