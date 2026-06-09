import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "../../ui/Logo";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div
      className="
    bg-green-600
    mt-5 mb-10
    flex flex-col gap-4
    md:flex-row
    "
    >
      <div>
        <Logo />
        <p>
          PathPilot helps learners discover career paths, build in-demand
          skills, and achieve their professional goals through structured
          roadmaps and guided learning.
        </p>
      </div>
      <div>
        <h3 className="mb-2.5">Quick Links</h3>
        <ul className="flex flex-col gap-4">
          <li className="flex">
            <Link to="/" className="flex-1 cursor-pointer">
              Home
            </Link>
          </li>
          <li className="flex">
            <Link to="/about" className="flex-1 cursor-pointer">
              About
            </Link>
          </li>
          <li className="flex">
            <Link to="/careers" className="flex-1 cursor-pointer">
              Careers
            </Link>
          </li>
          <li className="flex">
            <Link to="/roadmaps" className="flex-1 cursor-pointer">
              Roadmaps
            </Link>
          </li>
          <li className="flex">
            <Link to="/quiz" className="flex-1 cursor-pointer">
              Quiz
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-2.5">Contact Info</h3>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2">
            <MapPin size={18} className="mt-1"/>
            <span>Gomtinagar, Lucknow, Uttar Pradesh, India</span>
          </li>
          <li className="flex gap-2">
            <Mail size={18} className="mt-1"/>
            <Link to="mailto:sahilsrivastavawork@gmail.com">
              sahilsrivastavawork@gmail.com
            </Link>
          </li>
          <li className="flex gap-2">
            <Phone size={18} className="mt-1"/>
            <Link to="tel:+91 8601143080">+91 8601143080</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
