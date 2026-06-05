import { Moon, Sun } from "lucide-react";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const icon = theme === "light" ? <Moon /> : <Sun />;


  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
    }

    if (theme === "dark") {
      setTheme("light");
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    }
  }

  return <button onClick={handleTheme}>{icon}</button>;
}
