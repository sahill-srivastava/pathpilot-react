import { Link, useParams } from "react-router-dom";
import Container from "../layout/Container";
import { careersData } from "../../mockdata/career";

const CareerDetail = () => {
  const { slug } = useParams();

  const role = careersData.find((item) => item.slug === slug);

  console.log(role);

  const {difficulty, duration, category} = role
  const { eyebrow, title, subtitle, description, primaryCTA, secondaryCTA } = role.hero;


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
          <div className="w-[330px] md:w-[800px] flex flex-col items-center text-center justify-center gap-4">
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
        </Container>
      </section>
      <section>
        <Container
          className="
               my-15 
               flex flex-col items-center justify-center
               "
        >
          <div className=" w-full grid grid-cols-1 md:grid-cols-4 gap-2.5">
          <div className="bg-violet-600 rounded-2xl flex flex-col items-center p-10">
            <h4>Difficulty</h4>
            {difficulty}
          </div>
          <div className="bg-violet-600 rounded-2xl flex flex-col items-center p-10">
            <h4>Duration</h4>
            {duration}
          </div>
          <div className="bg-violet-600 rounded-2xl flex flex-col items-center p-10">
            <h4>Career Type</h4>
            <p>Devlopment</p>
          </div>
          <div className="bg-violet-600 rounded-2xl flex flex-col items-center p-10">
            <h4>Category</h4>
            {category}
          </div>
         
          </div>
        </Container>
      </section>
    </>
  );
};

export default CareerDetail;
