import logo from "../../assets/logo.png";
import logoLight from "../../assets/logo-light.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Logo() {
  const { theme } = new useContext(ThemeContext);

  return (
    <>
      <Link to="/">
        <img
          className="w-[200px]"
          src={theme === "light" ? logo : logoLight}
          alt="Pathpilot-logo"
        />
      </Link>
    </>
  );
}
