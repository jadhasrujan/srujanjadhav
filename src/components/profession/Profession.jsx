import Roles from "./Roles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import {
  faRobot,
  faFire,
  faServer,
  faPenRuler,
  faMobileScreen,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const rolesData = [
  {
    id: 1,
    title: "Flutter",
    description: "Developing cross-platform mobile apps with responsive UI and smooth animations.",
    icon: faMobileScreen,
    color: "#02569B",
  },
  {
    id: 2,
    title: "Python",
    description: "Building backend services, automation scripts, and data processing tools.",
    icon: faPython,
    color: "#3776AB",
  },
  {
    id: 3,
    title: "UiPath",
    description: "Designing robotic process automation (RPA) workflows to streamline business processes.",
    icon: faRobot,
    color: "#FA4616",
  },
  {
    id: 4,
    title: "Firebase",
    description: "Integrating real-time databases, authentication, and cloud functions.",
    icon: faFire,
    color: "#FFCA28",
  },
  {
    id: 5,
    title: "REST APIs",
    description: "Designing and consuming RESTful APIs for seamless communication.",
    icon: faServer,
    color: "#009688",
  },
  {
    id: 6,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
    icon: faPenRuler,
    color: "#E91E63",
  },
  {
    id: 7,
    title: "Git",
    description: "Version control for efficient code management and collaboration.",
    icon: faGitAlt,
    color: "#F05032",
  },
  {
    id: 8,
    title: "SQL",
    description: "Managing and querying relational databases for robust data storage.",
    icon: faDatabase,
    color: "#00758F",
  },
];

const Profession = () => {
  return (
    <div
      className="content px-2 pt-32 pb-10 md:pt-44 md:pb-15 lg:pt-60 lg:pb-25 relative"
      id="skills"
    >
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-900 dark:text-white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <p className="section-title text-gray-900 dark:text-white transition-colors duration-300">Technical Skills</p>
        <p className="mt-6 text-sm sm:text-lg font-normal text-gray-500 dark:text-gray-400 transition-colors duration-300">
          My technical skillset spanning mobile, backend, and automation technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
