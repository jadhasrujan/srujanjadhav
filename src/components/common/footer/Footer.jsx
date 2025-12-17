import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const socialLinks = [
  { id: 1, icon: faLinkedinIn, url: "#" },
  { id: 2, icon: faGithub, url: "#" },
  { id: 3, icon: faInstagram, url: "#" },
  { id: 4, icon: faTwitter, url: "#" },
];

const navLinks1 = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About Me", url: "about" },
  { id: 3, name: "Technical Skills", url: "skills" },
  { id: 4, name: "Experience", url: "experience" },
];

const navLinks2 = [
  { id: 5, name: "Projects", url: "portfolio" },
  { id: 6, name: "Education", url: "education" },
  { id: 7, name: "Certifications", url: "certifications" },
  { id: 8, name: "Contact", url: "contact" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      scroller.scrollTo(id, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden mt-20">
      {/* Wave Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-gray-50 dark:fill-gray-950">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="content pt-32 pb-12 px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-16">

          {/* Brand & Quote */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-lg">SJ</div>
              <span className="text-2xl font-bold tracking-wide">Srujan's Portfolio</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Transforming ideas into digital reality through code, creativity, and innovation. Let's build something amazing together.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
            <div>
              <h4 className="text-lg font-bold mb-6 text-gray-200">Main</h4>
              <ul className="space-y-4">
                {navLinks1.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.url)}
                      className="text-gray-400 hover:text-white cursor-pointer transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-gray-200">Explore</h4>
              <ul className="space-y-4 text-gray-400">
                {navLinks2.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.url)}
                      className="text-gray-400 hover:text-white cursor-pointer transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-lg font-bold mb-6 text-gray-200">Get in Touch</h4>
              <p className="text-gray-400 mb-2">Nashik, Maharashtra</p>
              <p className="text-gray-400">srujanexample@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Srujan Ganesh Jadhav. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
    </div>
  );
};

export default Footer;
