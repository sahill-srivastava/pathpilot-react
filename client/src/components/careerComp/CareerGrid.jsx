import { Link } from "react-router-dom";
import Container from "../layout/Container";

const CareerGrid = ({ data }) => {
  console.log(data);
  const { title, overview } = data;
  return (
    <section>
      <Container
        className="
                    my-15 
                      grid grid-cols-1 md:grid-cols-[30%_1fr] gap-2.5
                      "
      >
        <div className="bg-violet-800 p-5 flex flex-col gap-5">
          <div className="flex gap-2.5">
            <div className="text-8xl">01</div>
            <p>Career Overview</p>
          </div>
          <div className="flex gap-2.5">
            <div className="text-8xl">01</div>
            <p>Career Overview</p>
          </div>
          <div className="flex gap-2.5">
            <div className="text-8xl">01</div>
            <p>Career Overview</p>
          </div>
          <div className="flex gap-2.5">
            <div className="text-8xl">01</div>
            <p>Career Overview</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2.5 ">
          <div className=" p-4 rounded ">
            <h3 className="mt-4">What is {title}?</h3>
            <p>{overview}</p>
          </div>
          <div className=" p-4 rounded ">
            <h3 className="mt-4">What is {title}?</h3>
            <p>{overview}</p>
          </div>
          <div className=" p-4 rounded ">
            <h3 className="mt-4">What is {title}?</h3>
            <p>{overview}</p>
          </div>
          <div className=" p-4 rounded ">
            <h3 className="mt-4">What is {title}?</h3>
            <p>{overview}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareerGrid;
