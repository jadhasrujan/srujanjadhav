import { faArrowRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="group relative w-full h-[400px] rounded-3xl overflow-hidden cursor-pointer">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${data?.image})` }}
      ></div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent transition-opacity duration-300"></div>

      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">

        {/* Floating Category Tag */}
        <div className="absolute top-6 left-6 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md border border-white/10 rounded-full">
            {data?.category}
          </span>
        </div>

        {/* Text Content - Slides Up */}
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
            {data?.title}
          </h3>

          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 delay-100">
            <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
              {data?.description}
            </p>

            <div className="flex items-center gap-4">
              <a href={data?.link || "#!"} className="btn btn-sm bg-white text-gray-900 border-none hover:bg-gray-200 gap-2 px-4 rounded-full font-bold">
                View Details <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-3xl transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

export default Projects;
