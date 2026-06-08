import { Link } from "react-router-dom";
import Container from "../layout/Container";
import NavLink from "../ui/NavLink";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/logo.png";
import logoLight from "../../assets/logo-light.png";
import { Bookmark, TextAlignJustify, TrendingUp, X } from "lucide-react";

import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  const menuContainerClasses = `
        bg-white text-black  rounded mx-2

        flex-col  gap-4
        absolute z-10 top-full left-0 right-0
  
        light:text-black light:border light:border-slate-300
        
        md:w-2/3 md:relative 
        md:flex md:flex-row md:justify-between  
        md:bg-transparent  md:text-white md:border-none
  `;

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
            src={theme === "light" ? logo : logoLight}
            alt="Pathpilot-logo"
          />
        </Link>

        <div
          className="flex text-white md:hidden light:text-black"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <X size={20} /> : <TextAlignJustify size={20} />}
        </div>

        <div
          className={`
        ${isOpen ? "flex" : "hidden"}
        ${menuContainerClasses}
        `}
        >
          <NavLink isOpenState={{ isOpen, setIsOpen }} />

          <div className="flex items-center gap-4 p-4">
            <Link
              to="/bookmarks"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Bookmark size={20} />
            </Link>
            <Link
              to="/progress-tracker"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <TrendingUp size={20} />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
}
