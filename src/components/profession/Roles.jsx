import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Roles = ({ role }) => {
  return (
    <div
      className="p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-white/20 dark:border-gray-700/50 flex flex-col items-start h-full relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-picto-primary transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300"></div>

      <div className="mb-4 w-12 h-12 rounded-lg bg-white/60 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center text-picto-primary text-2xl font-bold group-hover:bg-picto-primary group-hover:text-white transition-colors duration-300">
        <FontAwesomeIcon icon={role?.icon} />
      </div>

      <p className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-picto-primary transition-colors duration-300">
        {role?.title}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {role?.description}
      </p>
    </div>
  );
};

export default Roles;
