import { Link } from "react-router-dom";

export default function NavLink() {
  return (
    <div className="w-full flex flex-col items-start md:flex-row items-center gap-4">
      <Link
        to="/about"
        className="w-full border-b-1 border-slate-200 py-2 cursor-pointer"
      >
        About
      </Link>
      <Link
        to="/careers"
        className="w-full border-b-1 border-slate-200 py-2 cursor-pointer"
      >
        Careers
      </Link>
      <Link
        to="/roadmaps"
        className="w-full border-b-1 border-slate-200 py-2 cursor-pointer"
      >
        Roadmaps
      </Link>
      <Link
        to="/quiz"
        className="w-full border-b-1 border-slate-200 py-2 cursor-pointer"
      >
        Quiz
      </Link>
    </div>
  );
}
