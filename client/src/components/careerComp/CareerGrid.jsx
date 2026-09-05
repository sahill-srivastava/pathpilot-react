import Container from "../layout/Container";

const CareerGrid = ({ data }) => {
  const { title, overview, whatItInvolves, responsibilities, requiredSkills, toolsUsed } = data;
  return (
    <section>
      <Container
        className="
                    my-15 
                      flex flex-col gap-20
                      "
      >
        <div className=" p-5 grid grid-cols-1 md:grid-cols-[30%_1fr] gap-10">
          <div className="flex mt-2.5 gap-2.5 p-4">
            <div className="text-8xl">01</div>
            <p className="uppercase">Career Overview</p>
          </div>
          <div className="h-fit flex flex-col justify-start items-start gap-2.5 p-6 rounded-2xl bg-zinc-800 ">
            <h3>What is {title}?</h3>
            <p className="w-[80%]">{overview}</p>
          </div>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-[1fr_30%] gap-10">
          <div className="flex flex-col justify-center items-start gap-2.5 p-6 rounded-2xl bg-zinc-800 ">
            <h3>What does this career involve?</h3>
            <p className="w-[80%]">{whatItInvolves}</p>
          </div>
          <div className="flex mt-2.5 gap-2.5 p-4">
            <p className="uppercase">ROLE IN PRACTICE</p>
            <div className="text-8xl">02</div>
          </div>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-[30%_1fr] gap-10">
          <div className="flex mt-2 gap-2.5 p-4">
            <div className="text-8xl">03</div>
            <p className="uppercase">Responsibilities</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-2.5 p-6 rounded-2xl bg-zinc-800 ">
            <h3>What will you do?</h3>
            <ul className="list-disc flex flex-col gap-2 ms-5">
              {responsibilities.map((r, index) => (
                <li key={index}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-[1fr_30%] gap-10">
          <div className="flex flex-col justify-center items-start gap-5 p-6 rounded-2xl bg-zinc-800 ">
            <h3>Skills Required</h3>
            <ul className="flex flex-wrap gap-2">
              {requiredSkills.map((r, index) => (
                <li className="bg-white/20 py-1 px-2 rounded" key={index}>{r}</li>
              ))}
            </ul>
            <h3>Tools Used</h3>
            <ul className="flex flex-wrap gap-2">
              {toolsUsed.map((r, index) => (
                <li className="bg-white/20 py-1 px-2 rounded" key={index}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="flex mt-2.5 gap-2.5 p-4">
            <p className="uppercase">SKILLS & TECHNOLOGIES</p>
            <div className="text-8xl">04</div>
          </div>
        </div>

       
      </Container>
    </section>
  );
};

export default CareerGrid;
