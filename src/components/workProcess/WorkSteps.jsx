import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 dark:shadow-none ease-out duration-1000 flex gap-6 items-start transition-all ${style && style
        }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-11 h-11 sm:w-18 sm:h-18 ${hover ? "bg-picto-primary" : "bg-white/60 dark:bg-white/10"
          } text-center center rounded-md shrink-0 flex items-center justify-center transition-colors duration-300 backdrop-blur-sm`}
      >
        <span
          className={`text-xl sm:text-2xl font-bold ${hover ? "text-white" : "text-picto-primary"
            } transition-colors duration-300`}
        >
          {data?.id}
        </span>
      </div>
      <div className="mt-0">
        <p className="font-semibold sm:text-xl text-gray-900 dark:text-gray-100 transition-colors duration-300">{`${data?.title}`}</p>
        <p className="mt-3 text-[13px] sm:text-[16px] text-[#697482] dark:text-gray-400 transition-colors duration-300">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
