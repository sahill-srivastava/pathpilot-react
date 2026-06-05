import { Link } from "react-router-dom";

export default function NavLink() {
  return (
    <div className="flex flex-col items-start md:flex-row items-center gap-4">
      <Link
        to="/about"
        className="border-b-1 border-slate-200 py-2 cursor-pointer"
      >
        About
      </Link>
      <Link
        to="/careers"
        className="border-b-1 border-slate-200 py-2 cursor-pointer"
      >
        Careers
      </Link>
      <Link
        to="/roadmaps"
        className="border-b-1 border-slate-200 py-2 cursor-pointer"
      >
        Roadmaps
      </Link>
      <Link
        to="/quiz"
        className="border-b-1 border-slate-200 py-2 cursor-pointer"
      >
        Quiz
      </Link>
    </div>
  );
}
