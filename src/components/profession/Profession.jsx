import Roles from "./Roles";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faRobot,
  faFire,
  faServer,
  faPenRuler,
  faCode,
  faMobileScreen
} from "@fortawesome/free-solid-svg-icons";

const rolesData = [
  {
    id: 1,
    title: "Python",
    description: "Building backend services, automation scripts, and data processing tools.",
    icon: faPython,
  },
  {
    id: 2,
    title: "Flutter",
    description: "Developing cross-platform mobile apps with responsive UI and smooth animations.",
    icon: faMobileScreen,
  },
  {
    id: 3,
    title: "UiPath",
    description: "Designing robotic process automation (RPA) workflows to streamline business processes.",
    icon: faRobot,
  },
  {
    id: 4,
    title: "Firebase",
    description: "Integrating real-time databases, authentication, and cloud functions.",
    icon: faFire,
  },
  {
    id: 5,
    title: "REST APIs",
    description: "Designing and consuming RESTful APIs for seamless communication.",
    icon: faServer,
  },
  {
    id: 6,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
    icon: faPenRuler,
  },

];

const Profession = () => {
  return (
    <div
      className="content px-2 pt-32 pb-10 md:pt-44 md:pb-15 lg:pt-60 lg:pb-25"
      id="skills"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="section-title text-gray-900 dark:text-white transition-colors duration-300">Technical Skills</p>
        <p className="mt-6 text-sm sm:text-lg font-normal text-gray-500 dark:text-gray-400 transition-colors duration-300">
          My technical skillset spans across mobile and web development, with a strong focus on Python, Flutter, and RPA with UiPath.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
