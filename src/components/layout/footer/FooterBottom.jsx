import PrivacyPolicy from "./Policy";
import TermsConditions from "./TermsConditions";
import { Copyright } from "lucide-react";

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
        <span>PathPilot</span>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <PrivacyPolicy />
        <TermsConditions />
      </div>
    </div>
  );
};

export default FooterBottom;
