// import { Copyright as CopyrightIcon } from "lucide-react";

import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/20">
      <Container className="bg-red-600">
        <FooterTop />
        <FooterBottom />
      </Container>
    </footer>
  );
}
