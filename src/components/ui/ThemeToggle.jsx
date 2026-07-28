import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../utils/configSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch()

  const theme = useSelector(store => store.config.defaultTheme);

  const icon = theme === "light" ? <Moon size={20} /> : <Sun size={20}/>;

  function handleTheme() {
    if (theme === "light") {
      dispatch(setTheme("dark"))
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
    }

    if (theme === "dark") {
      dispatch(setTheme("light"))
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    }
  }

  return <button onClick={handleTheme} className="cursor-pointer">{icon}</button>;
}
