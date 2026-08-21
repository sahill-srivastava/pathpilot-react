import { Search } from "lucide-react";
import { useState } from "react";

const SearchCareer = ({ filterCareerData }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(e.target.value);
    filterCareerData(value)
  }

  return (
    <div className="w-full flex items-center bg-white/90  h-[40px] md:h-[50px] rounded-4xl border border-2 border-violet-600">
      <input
        onChange={handleSearch}
        value={query}
        type="text"
        className="rounded-l-4xl w-full h-full  px-6 flex-1 text-base text-zinc-600 border-none outline-none text-black"
        placeholder="Search careers by role, skill, or technology..."
      />
      <div className=" h-full rounded-4xl p-2 flex items-center justify-center">
        <Search className="h-[30px] w-[30px] md:h-[35px] md:w-[35px] p-2 rounded-4xl bg-violet-600" />
      </div>
    </div>
  );
};

export default SearchCareer;
