import { Link } from "react-router-dom";
import Container from "../layout/Container";
import NavLink from "../ui/NavLink";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";
import { Bookmark, TextAlignJustify, TrendingUp } from "lucide-react";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className="
      shadow-white/40
      shadow-sm
      light:shadow-black/10
    "
    >
      <Container className="w-screen md:w-full flex items-center justify-between relative">
        <Link to="/">
          <img
            className="w-[200px]"
            src={theme === "light" ? logo : logoDark}
            alt="Pathpilot-logo"
          />
        </Link>

        <div className="flex text-white md:hidden light:text-black">
          <TextAlignJustify size={20} />
        </div>

        <div
          className="
        bg-white text-black  rounded mx-2

        flex flex-col  gap-4
        absolute z-10 top-full left-0 right-0
  
        light:text-black light:border light:border-slate-300
        
        md:w-2/3 md:relative 
        md:flex-row md:justify-between  
        md:bg-transparent  md:text-white md:border-none
        "
        >
          <NavLink />

          <div className="flex items-center gap-4 p-4">
            <Link to="/bookmarks">
              <Bookmark size={20} />
            </Link>
            <Link to="/progress-tracker">
              <TrendingUp size={20} />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
}
