import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
