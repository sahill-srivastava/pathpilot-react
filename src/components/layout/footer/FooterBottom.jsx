import PrivacyPolicy from "./Policy";
import TermsConditions from "./TermsConditions";
import { Copyright } from "lucide-react";

const FooterBottom = () => {
  const d = new Date();

  // const footerBottomClasses = ;

  return (
    <div
      className="
    text-[14px] bg-amber-300
    flex flex-col items-start

    md:flex-row md:justify-content
    "
    >
      <div className="flex gap-1">
        <span>Copyright</span>
        <Copyright size={18} />
        {d.getFullYear()}
        <span>PathPilot</span>
      </div>

      <div>
        <PrivacyPolicy />
        <TermsConditions />
      </div>
    </div>
  );
};

export default FooterBottom;
