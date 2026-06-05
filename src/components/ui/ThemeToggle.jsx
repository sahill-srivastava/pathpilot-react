import { Moon, Sun } from "lucide-react";
import { useState } from "react";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [icon, setIcon] = useState(<Moon size={20} />);

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
      setIcon(<Sun size={20} />);
    }

    if (theme === "dark") {
      setTheme("light");
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
      setIcon(<Moon size={20} />);
    }
  }

  return <button onClick={handleTheme}>{icon}</button>;
}
