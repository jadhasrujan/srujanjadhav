import person from "../../assets/images/person.png";
import Reveal from "../common/Reveal";
import "./introduction.css";


const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-32 lg:pt-44 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-center max-lg:text-center">
        <Reveal animation="fade-right" className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full text-gray-900 dark:text-white">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full text-picto-primary">
              Srujan Ganesh Jadhav
            </span>
          </p>
          <p className="text-xl xxs:text-2xl lg:text-3xl font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200">
            Python & Flutter Developer
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-600 dark:text-gray-300">
            Building practical, user-centered applications with Python and Flutter.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              className="btn-primary btn btn-sm xxs:btn-lg text-white"
              href="#portfolio"
            >
              View Projects
            </a>
            <a
              className="btn btn-outline btn-sm xxs:btn-lg hover:bg-picto-primary hover:text-white dark:text-white dark:border-white transition-all duration-300"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
      <Reveal
        animation="fade-left"
        delay="delay-200"
        className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative"
      >
        <img
          className="shadow-2xl shadow-gray-200 dark:shadow-none w-full h-full absolute bottom-0 object-cover bg-white dark:bg-gray-800 rounded-3xl transition-colors duration-300 animate-float"
          src={person}
          alt="Srujan Ganesh Jadhav"
        />
      </Reveal>
    </div>
  );
};


export default Introduction;
