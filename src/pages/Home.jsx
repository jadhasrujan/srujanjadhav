import Reveal from "../components/common/Reveal";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import Education from "../components/profile/Education";
import Certifications from "../components/profile/Certifications";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Animated Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300/40 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-300/40 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300/40 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full">
        <div className="content">
          <Introduction />
          <Reveal animation="fade-up" delay="delay-100">
            <Profile />
          </Reveal>
        </div>

        <Reveal className="pb-10" animation="zoom-in">
          <Profession />
        </Reveal>

        <Reveal className="pt-10 pb-10" animation="fade-up">
          <WorkProcess />
        </Reveal>

        <Reveal className="pb-10" animation="fade-up">
          <Portfolio />
        </Reveal>

        <Reveal className="pb-10" animation="fade-right">
          <Education />
        </Reveal>

        <Reveal className="pb-10" animation="fade-left">
          <Certifications />
        </Reveal>

        <Reveal className="pb-10" animation="fade-up">
          <WorkTogether />
        </Reveal>

        <Reveal className="pb-20" animation="zoom-in">
          <Contact />
        </Reveal>
      </div>
    </div>
  );
};

export default Home;
