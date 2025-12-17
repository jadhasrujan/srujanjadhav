import { useEffect, useState } from "react";
// import logo from "../../../assets/logo.png"; // Logo removed as per earlier instructions
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "about" },
  { id: 3, name: "Skills", url: "skills" },
  { id: 4, name: "Experience", url: "experience" },
  { id: 5, name: "Projects", url: "portfolio" },
  { id: 6, name: "Education", url: "education" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const NavBar = ({ theme, toggleTheme }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = navItems.map((item) => (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      <Link
        onClick={handleMenuClick}
        to={item.url}
        smooth={true}
        duration={1000}
        spy={true}
        offset={-100}
        activeStyle={{
          backgroundColor: "#2563EB",
          color: "white",
        }}
        className={`hover:text-picto-primary px-3 py-2 mx-1 rounded-md transition-colors`}
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1400px] rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-xl bg-blue-100/30 dark:bg-blue-900/20 transition-all duration-500 ease-in-out ${position > 50 ? "py-2 bg-blue-100/60 dark:bg-blue-900/50 shadow-lg" : "py-4"
        } hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.6)] hover:bg-blue-100/50 dark:hover:bg-blue-900/40 text-gray-800 dark:text-gray-100`}
    >
      <div className="navbar flex justify-between mx-auto content px-4">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-10 mt-3 w-80 p-2 shadow-lg font-semibold bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
            >
              {menu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5 cursor-pointer"
          >
            <div className="relative w-12 h-12 flex items-center justify-center ms-[12px] group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-500/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                <span className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-picto-primary dark:group-hover:text-blue-300 transition-colors">SJ</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="lg:flex items-center gap-4">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>



          <p className="">
            <Link
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary"
              href="#contact"
              to={`contact`}
              smooth={true}
              duration={900}
            >
              Contact
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
