import PrivacyPolicy from "./Policy";
import TermsConditions from "./TermsConditions";
import { Copyright } from "lucide-react";

const FooterBottom = () => {
  const d = new Date();

  // const footerBottomClasses = ;

  return (
    <div
      className="
    text-[14px] bg-purple-600
    flex flex-col items-start gap-4

    md:flex-row md:justify-content
    "
    >
      <div className="flex gap-1">
        <span>Copyright</span>
        <Copyright size={18} />
        {d.getFullYear()}
        <span>PathPilot</span>
      </div>

      <div className="flex flex-col gap-4">
        <PrivacyPolicy />
        <TermsConditions />
      </div>
    </div>
  );
};

export default FooterBottom;
