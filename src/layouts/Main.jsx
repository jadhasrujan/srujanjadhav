import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  useEffect(() => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div data-theme="dark" className="relative min-h-screen">
      <NavBar theme="dark" />
      <Outlet />
      <div className="bg-[#2A374A]">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
