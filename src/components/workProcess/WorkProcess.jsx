import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCode, faLaptopCode, faRobot } from "@fortawesome/free-solid-svg-icons";

const experienceData = [
  {
    id: 1,
    category: "Full Stack Development",
    role: "Freelance Developer",
    title: "Vehicle Document Checker Platform",
    date: "Sep 2025 – Oct 2025",
    description: "Developed a platform that fetches vehicle details via RC number. Integrated Razorpay for payments and a WhatsApp bot for automated document delivery.",
    icon: faLaptopCode,
    color: "#3B82F6", // Blue
    tech: ["Flutter", "Dart", "Hostinger", "Firebase"]
  },
  {
    id: 2,
    category: "Frontend Development",
    role: "Freelance Developer",
    title: "Trading Bot Platform",
    date: "May 2024 – Jun 2024",
    description: "Designed and built a responsive frontend for a trading bot. Created a user-friendly UI and integrated it seamlessly with backend services.",
    icon: faCode,
    color: "#8B5CF6", // Purple
    tech: ["Python", "Django", "React", "REST API"]
  },
];

const WorkProcess = () => {
  return (
    <div className="content px-4 py-20 relative" id="experience">
      {/* Decorative Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-40 bottom-20 w-1 bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0"></div>

      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="section-title text-gray-900 dark:text-white">Professional Experience</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          My professional journey through freelance projects and development roles.
        </p>
      </div>

      <div className="space-y-12">
        {experienceData.map((item, index) => (
          <div key={item.id} className={`flex flex-col md:flex-row gap-8 md:gap-0 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

            {/* Content Side */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
              <div
                className="group p-6 md:p-8 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ "--accent-color": item.color }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-white shadow-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.category}
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <FontAwesomeIcon icon={faBriefcase} className="text-xs" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[var(--accent-color)] transition-colors">
                  {item.role}
                </h3>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
                  {item.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Center Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900 border-4 border-white dark:border-gray-800 shadow-xl z-10">
              <div className="w-full h-full rounded-full flex items-center justify-center" style={{ color: item.color, backgroundColor: `${item.color}20` }}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
            </div>

            {/* Empty Side for Layout */}
            <div className="w-full md:w-1/2 hidden md:block"></div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
