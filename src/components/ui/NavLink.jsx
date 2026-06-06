import { Link } from "react-router-dom";

export default function NavLink() {
  return (
    <div className="w-fit flex flex-col items-start md:flex-row items-center ">
      <Link
        to="/about"
        className="
        w-full border-b-1 border-slate-200 px-4 py-3 cursor-pointer
        hover:bg-[var(--accent-color)] hover:text-white 
        md:border-none   
        md:hover:bg-transparent"
      >
        About
      </Link>
      <Link
        to="/careers"
         className="
        w-full border-b-1 border-slate-200 px-4 py-3 cursor-pointer
        hover:bg-[var(--accent-color)] hover:text-white 
        md:border-none   
        md:hover:bg-transparent"
      >
        Careers
      </Link>
      <Link
        to="/roadmaps"
         className="
        w-full border-b-1 border-slate-200 px-4 py-3 cursor-pointer
        hover:bg-[var(--accent-color)] hover:text-white 
        md:border-none   
        md:hover:bg-transparent"
      >
        Roadmaps
      </Link>
      <Link
        to="/quiz"
         className="
        w-full border-b-1 border-slate-200 px-4 py-3 cursor-pointer
        hover:bg-[var(--accent-color)] hover:text-white 
        md:border-none   
        md:hover:bg-transparent"
      >
        Quiz
      </Link>
    </div>
  );
}
