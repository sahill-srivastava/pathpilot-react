import { Search } from "lucide-react";

const SearchCareer = () => {
  return (
    <div className="w-full mb-20 flex items-center bg-white/80 hover:bg-white/90 h-[60px] rounded-4xl border border-2 border-violet-600">
      <input
        type="text"
        className="rounded-l-4xl w-full h-full  px-6 flex-1 text-base text-zinc-600 border-none outline-none text-black"
      />
      <div className=" h-full rounded-4xl p-2 flex items-center justify-center">
        <Search className=" h-[40px] w-[40px] p-2 rounded-4xl bg-violet-600" />
      </div>
    </div>
  );
};

export default SearchCareer;
