import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="max-w-106 rounded-lg outline-none hover:shadow-2xl duration-300 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white/20 dark:border-gray-700/50 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl">
      <img src={data?.image} alt={`${data?.title} image`} />
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-gray-900 dark:text-gray-100 text-md xxs:text-lg font-semibold pt-1 mb-3 transition-colors duration-300">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 dark:text-gray-400 text-xs xxs:text-[14px] text-wrap transition-colors duration-300"
        >
          {data?.description}
        </p>

        {/* </p> */}
      </div>
    </div>
  );
};

export default Projects;
