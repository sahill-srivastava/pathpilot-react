import { Link } from "react-router-dom";
import Container from "../layout/Container";
import careerIllustration from "../../assets/career-illustration.png"

const InnerCareerHeroSection = ({ data }) => {
  console.log(data);
  const { eyebrow, title, subtitle, description, primaryCTA, secondaryCTA } =
    data;
  return (
    <section
      className={`hero_bg_color light:hero_bg_color_light md:h-[600px] `}
    >
      <Container
        className="
                        h-full  py-10
                          grid grid-cols-1 md:grid-cols-2  items-center justify-center gap-2.5
                          "
      >
        <div className="flex flex-col gap-2.5 items-start">
          <span
            className="bg-violet-900 light:text-white rounded-4xl mb-2.5 font-medium px-5 py-2.5 uppercase"
            style={{ fontSize: "13px" }}
          >
            {eyebrow}
          </span>
          <h1 className="mb-2 md:mb-5 light:text-white">{title}</h1>
          <p>{subtitle}</p>
          <p>{description}</p>
          <div className="mt-5 md:mt-10 flex gap-6">
            <Link className="primary-btn px-3 py-2.5">{primaryCTA}</Link>
            <Link className="secondary-btn px-3 py-2.5">{secondaryCTA}</Link>
          </div>
          
        </div>
        <div className="flex flex-col gap-2.5 items-start">
            <img src={careerIllustration} alt="career-illustration" />
          </div>
      </Container>
    </section>
  );
};

export default InnerCareerHeroSection;
