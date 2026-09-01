import { Link, useParams } from "react-router-dom";
import Container from "../layout/Container";
import { careersData } from "../../mockdata/career";

const CareerDetail = () => {
  const { slug } = useParams();

  const role = careersData.find((item) => item.slug === slug);

  console.log(role);

  console.log(careersData);

  const { eyebrow, title, subtitle, description, difficulty, duration, primaryCTA, secondaryCTA } = role.hero;
  return (
    <>
      <section
        className={`hero_bg_color light:hero_bg_color_light md:h-[600px] `}
      >
        <Container
          className="
                        h-full  py-10
                          flex flex-col items-center justify-center gap-2.5
                          "
        >
          <div className="w-[330px] md:w-[800px] flex flex-col items-center text-center justify-center gap-2.5">
            <span
              className="bg-violet-900 light:text-white rounded-4xl mb-2.5 font-medium px-5 py-2.5 uppercase"
              style={{ fontSize: "13px" }}
            >
              {eyebrow}
            </span>
            <h1 className="mb-2 md:mb-5 light:text-white">{title}</h1>
            <p>{subtitle}</p>
            <p>{description}</p>
            <div className="flex gap-2">
              <p>{difficulty}</p>
              <span>I</span>
              <p>{duration}</p>
            </div>
            <div className="mt-5 md:mt-10 flex gap-6">
              <Link className="primary-btn px-3 py-2.5">{primaryCTA}</Link>
              <Link className="secondary-btn px-3 py-2.5">{secondaryCTA}</Link>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container
          className="
               my-15
               flex flex-col items-center justify-center
               "
        ></Container>
      </section>
    </>
  );
};

export default CareerDetail;
