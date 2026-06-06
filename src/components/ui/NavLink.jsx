import { Link } from "react-router-dom";

export default function NavLink() {
  return (
    <div className="w-full flex flex-col items-start md:flex-row items-center ">
      <Link
        to="/about"
        className="w-full border-b-1 border-slate-200 py-2 cursor-pointer px-4 py-3  hover:bg-[var(--accent-color)] hover:text-white"
      >
        About
      </Link>
      <Link
        to="/careers"
        className="w-full border-b-1 border-slate-200 py-2 cursor-pointer p-4 py-3 hover:bg-[var(--accent-color)] hover:text-white"
      >
        Careers
      </Link>
      <Link
        to="/roadmaps"
        className="w-full border-b-1 border-slate-200 py-2 cursor-pointer p-4 py-3 hover:bg-[var(--accent-color)] hover:text-white"
      >
        Roadmaps
      </Link>
      <Link
        to="/quiz"
        className="w-full border-b-1 border-slate-200 py-2 cursor-pointer p-4 py-3 hover:bg-[var(--accent-color)] hover:text-white"
      >
        Quiz
      </Link>
    </div>
  );
}
