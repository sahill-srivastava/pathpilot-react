import { Link } from "react-router-dom";

export default function NavLink() {
  return (
    <div className="hidden sm:flex gap-4">
      <Link to="/about">About</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/roadmaps">Roadmaps</Link>
      <Link to="/quiz">Quiz</Link>
    </div>
  );
}
