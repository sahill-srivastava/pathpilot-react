import { useSelector } from "react-redux";
import { careersData } from "../../mockdata/career";
import Container from "../layout/Container";
import SearchCareer from "./SearchCareer";

const CareerCards = () => {
  const theme = useSelector((store) => store.config.defaultTheme);

  const careersDataClass = `
            ${theme === "light" ? "card_bg_gradient" : "card_bg_gradient"}
            h-[400px] rounded-2xl p-6
            flex flex-col gap-4 justify-between
            `;

  // const debounce = (fn, delay) => {

  //   let timer;

  //   return function(...args) {

  //     clearTimeout(timer);

  //     timer = setTimeout(() => {
  //       fn(...args)
  //     }, delay)
  //   }
  // };

  const filterCareerData = (value) => {
    const query = value.toLowerCase().trim().replace(/\s+/g, " ");

    console.log("query: ", query)

    let result;

    //check title
    result = careersData.filter(item => {
      // console.log(item.title.toLowerCase())
      return item.title.toLowerCase().includes(query)
    })
    
    console.log("result: ", result)

  };

      //dbounce query
    // const debouncedFilter = debounce(filterCareerData, 100)

    // console.log(debouncedFilter)

  return (
    <section>
      <Container
        className="
               my-15
               flex flex-col items-center justify-center
               "
      >
        <div className="w-full">
          <div className="container relative overflow-hidden">
            <div className="mb-4 ms-4 flex flex-nowrap items-center gap-2 text-[13px] overflow-x-auto scrollbar-none">
              <strong>Popular:</strong>
              <ul className="ms-2 flex gap-2">
                <li className="px-6 py-1 flex shrink-0 items-center justify-center border border border-violet-600 rounded-4xl hover:bg-zinc-800 cursor-pointer">
                  Web Development
                </li>
                <li className="px-6 py-1 flex shrink-0 items-center justify-center border border border-violet-600 rounded-4xl hover:bg-zinc-800 cursor-pointer">
                  Data
                </li>
                <li className="px-6 py-1 flex shrink-0 items-center justify-center border border border-violet-600 rounded-4xl hover:bg-zinc-800 cursor-pointer">
                  Design
                </li>
                <li className="px-6 py-1 flex shrink-0 items-center justify-center border border border-violet-600 rounded-4xl hover:bg-zinc-800 cursor-pointer">
                  AI
                </li>
              </ul>
            </div>
          </div>
          <SearchCareer filterCareerData={filterCareerData} />
        </div>

        <div
          className="
                   w-full my-15
                   grid grid-cols-1 gap-10
                   md:grid-cols-3
                   "
        >
          {careersData.map((card) => (
            <div key={card.id} className={careersDataClass}>
              <div className="flex flex-col gap-3 ">
                <h3 className="text-xl mt-10 mb-5 font-medium light:text-white">
                  {card.title}
                </h3>
                <p className="light:text-white">
                  Difficulty: {card.difficulty}
                </p>
                <p className="light:text-white">Duration: {card.duration}</p>
                <p className="light:text-white">{card.desc}</p>
              </div>
              <button className="hover:text-black bg-transparent hover:bg-white border rounded-md text-[14px] cursor-pointer light:text-white py-2 mt-5">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CareerCards;
