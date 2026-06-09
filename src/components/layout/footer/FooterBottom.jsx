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

    md:flex-row md:items-center md:justify-between md:pt-2.5 md:pb-3.5
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
