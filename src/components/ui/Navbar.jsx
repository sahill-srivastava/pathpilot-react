import { Link } from "react-router-dom";
import Container from "../layout/Container";
import NavLink from "../ui/NavLink";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";
import { Bookmark, TrendingUp } from "lucide-react";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className=" shadow-[0_6px_8px_-2px_rgba(0,0,0,0.1) dark:shadow-[0_6px_8px_-2px_rgba(255,255,255,0.4)]">
      <Container className="flex items-center justify-between ">
        <Link to="/">
          <img
            className="w-[200px]"
            src={theme === "light" ? logo : logoDark}
            alt="Pathpilot-logo"
          />
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
