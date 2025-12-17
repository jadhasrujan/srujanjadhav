import { Link } from "react-router-dom";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "App Development",
    title: "Teacher’s App",
    description:
      "A comprehensive app to manage student data efficiently using Firebase Realtime Database for instant synchronization.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "App Development",
    title: "Expense Tracker",
    description:
      "Track daily expenses with categorization, real-time updates, and clear visual tracking for better financial management.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "App Development",
    title: "MyWallpaperHub",
    description:
      "A wallpaper app integrating Pexels API to browse, preview, and download high-quality wallpapers.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2 relative"
      id="portfolio"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-purple-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]"></div>
        <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-900 dark:text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="xl:mb-17.5 mb-12">
        <div className="max-sm:px-2 text-center mx-auto max-w-2xl">
          <p className="section-title text-gray-900 dark:text-white relative inline-block">
            Recent Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-8 text-gray-500 dark:text-gray-400">
            A selection of my recent work in mobile and web development, highlighting functional design and seamless performance.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center relative z-10">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 w-full">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

      <div className="text-center relative z-10">
        <Link
          to="/more-projects"
          className="btn btn-primary py-3 px-8 mt-16 text-center text-[16px] font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
        >
          View More Projects
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
