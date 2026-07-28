import logo from "../../assets/logo.png";
import logoLight from "../../assets/logo-light.png";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

export default function Logo() {
  const theme = useSelector(store => store.config.defaultTheme)

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
