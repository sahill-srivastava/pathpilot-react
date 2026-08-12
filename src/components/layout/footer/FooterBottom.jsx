import { Link } from "react-router-dom";
import PrivacyPolicy from "./Policy";
import TermsConditions from "./TermsConditions";
import { Copyright } from "lucide-react";
import { DEVELOPER_URL } from "../../../utils/constants";

const FooterBottom = () => {
  const d = new Date();

  // const footerBottomClasses = ;

  return (
    <div
      className="
    text-[14px] 
    flex flex-col items-start gap-4
    border-t border-white/20
    md:flex-row md:items-center md:justify-between pt-6 pb-10
    "
    >
      <div className="flex gap-1 md:items-center">
        <span>Copyright</span>
        <Copyright size={18} />
        {d.getFullYear()}
        <span>Pathpilot - Designed & Developed by</span>
        <a
          href={DEVELOPER_URL}
          className="hover:text-violet-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sahil Srivastava
        </a>
      </div>

      <div className="flex flex-col gap-4 md:gap-20 md:flex-row md:items-center">
        <PrivacyPolicy />
        <TermsConditions />
      </div>
    </div>
  );
};

export default FooterBottom;
