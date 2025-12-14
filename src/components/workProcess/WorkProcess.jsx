import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "Freelancer | Vehicle Document Checker Platform",
    description: "Sep 2025 – Oct 2025. RC number input → instant vehicle details. Razorpay payment integration. WhatsApp bot automation for document delivery.",
  },
  {
    id: 2,
    title: "Freelancer | Trading Bot Platform",
    description: "May 2024 – Jun 2024. Built clean, responsive frontend. Designed user-friendly UI. Connected frontend with backend features.",
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="experience"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center text-gray-900 dark:text-white transition-colors duration-300">Experience</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
          I have worked on various freelance projects, gaining hands-on experience in full-stack development, automation, and UI/UX design.
        </p>
      </div>

      <div className="grid xs:grid-cols-1 justify-end my-2 w-full mx-auto md:w-3/4 xl:w-full space-y-6">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`p-4 sm:p-8 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 w-full transition-all duration-300`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
