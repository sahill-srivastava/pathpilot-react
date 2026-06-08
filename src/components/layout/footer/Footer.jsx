// import { Copyright as CopyrightIcon } from "lucide-react";

import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import Container from "../Container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <FooterTop />
        <FooterBottom />
      </Container>
    </footer>
  );
}
