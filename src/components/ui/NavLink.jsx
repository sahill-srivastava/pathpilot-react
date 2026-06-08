import { Link } from "react-router-dom";

export default function NavLink({isOpenState}) {

  const {isOpen, setIsOpen} = isOpenState;


  const menuItemClasses = `
     w-full border-b-1 border-slate-200 px-4 py-3 cursor-pointer
        hover:bg-[var(--accent-color)] hover:text-white 
        md:hover:text-[var(--accent-color)]
        md:border-none   
        md:hover:bg-transparent
  `;
  return (
    <div className="w-full md:w-fit flex flex-col items-start md:flex-row items-center ">
      <Link
        to="/about"
        className={`
        ${menuItemClasses}
        `}
        onClick={() => {
          setIsOpen(false)
        }}
      >
        About
      </Link>

      <Link
        to="/careers"
        className={`
        ${menuItemClasses}
        `}
         onClick={() => {
          setIsOpen(false)
        }}
      >
        Careers
      </Link>
      <Link
        to="/roadmaps"
        className={`
        ${menuItemClasses}
        `}
         onClick={() => {
          setIsOpen(false)
        }}
      >
        Roadmaps
      </Link>
      <Link
        to="/quiz"
        className={`
        ${menuItemClasses}
        `}
         onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        Quiz
      </Link>
    </div>
  );
}
