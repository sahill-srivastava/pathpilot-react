import { Link } from "react-router-dom";
import Container from "../layout/Container";
import NavLink from "../ui/NavLink";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/logo.png";
import { Bookmark, TrendingUp } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="shadow-[0_6px_8px_-2px_rgba(0,0,0,0.1)]">
      <Container className="flex items-center justify-between ">
        <Link to="/">
          <img className="w-[200px]" src={logo} alt="Pathpilot-logo" />
        </Link>
        <NavLink />
        <div className="flex gap-4">
          <Link to="/bookmarks">
            <Bookmark size={20} />
          </Link>
          <Link to="/progress-tracker">
            <TrendingUp size={20} />
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </nav>
  );
}
