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
    grid grid-cols-1 gap-4
    border-t border-white/20
    md:grid-cols-[60%_40%] md:items-center md:justify-between pt-6 pb-10
    "
    >
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex gap-1">
          Copyright
          <Copyright size={18} />
          {d.getFullYear()}&nbsp; Pathpilot
        </div>
        <div>
          - Designed & Developed by&nbsp;
          <a
            href={DEVELOPER_URL}
            className="hover:text-violet-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sahil Srivastava
          </a>
        </div>
      </div>

      <div className="flex flex-row gap-4 md:gap-20 md:flex-row md:items-center md:justify-end">
        <PrivacyPolicy />
        <TermsConditions />
      </div>
    </div>
  );
};

export default FooterBottom;
