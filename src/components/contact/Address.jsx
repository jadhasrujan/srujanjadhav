import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-[10px] bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-white/20 dark:border-gray-600/50 hover:scale-[1] duration-450 cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,_0,_0,_0.1)] shadow-gray-200 dark:shadow-none max-sm:mx-auto transition-all"
      /* Scale effect:  */
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-10 md:h-12 aspect-square ${hover ? "bg-picto-primary" : "bg-white/60 dark:bg-white/10"
          } center rounded-[4px] transition-colors duration-300`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-lg md:text-xl ${hover ? "text-white" : "text-picto-primary"
            }`}
        />
      </div>
      <div className="ms-3.25">
        <p className="text-[12px] md:text-[14px] text-[#424E60] dark:text-gray-300 font-normal transition-colors duration-300">
          {item?.title}:
        </p>
        <p className="text-[14px] md:text-[16px] text-[#132238] dark:text-gray-100 font-medium transition-colors duration-300">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
