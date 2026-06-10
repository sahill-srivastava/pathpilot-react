import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "../../ui/Logo";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div
      className="
    pt-12 pb-20
    flex flex-col gap-4
    md:flex-row
    "
    >
      <div className="flex-1">
        <Logo />
        <p>
          PathPilot helps learners discover career paths, build in-demand
          skills, and achieve their professional goals through structured
          roadmaps and guided learning.
        </p>
      </div>

      <div
        className="
      flex-1
      flex flex-col 
      md:items-center
      "
      >
        <h3 className="mb-5">Quick Links</h3>
        <ul className="flex flex-col gap-4">
          <li className="flex">
            <Link to="/" className="flex-1 link-hover">
              Home
            </Link>
          </li>
          <li className="flex">
            <Link to="/about" className="flex-1 link-hover">
              About
            </Link>
          </li>
          <li className="flex">
            <Link to="/careers" className="flex-1 link-hover">
              Careers
            </Link>
          </li>
          <li className="flex">
            <Link to="/roadmaps" className="flex-1 link-hover">
              Roadmaps
            </Link>
          </li>
          <li className="flex">
            <Link to="/quiz" className="flex-1 link-hover">
              Quiz
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <h3 className="mb-5">Contact Info</h3>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 link-hover blank">
            <MapPin size={18} className="mt-1" />
            <Link to="https://maps.app.goo.gl/Fx7cDyMmLVta7MxM7" target="_blank">
              Gomtinagar, Lucknow, Uttar Pradesh, India
            </Link>
          </li>
          <li className="flex gap-2 link-hover">
            <Mail size={18} className="mt-1" />
            <Link to="mailto:sahilsrivastavawork@gmail.com">
              sahilsrivastavawork@gmail.com
            </Link>
          </li>
          <li className="flex gap-2 link-hover">
            <Phone size={18} className="mt-1" />
            <Link to="tel:+91 8601143080">+91 8601143080</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
