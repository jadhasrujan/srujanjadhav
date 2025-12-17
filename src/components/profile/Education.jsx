import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const educationData = [
    {
        id: 1,
        title: "Diploma in Electrical Engineering",
        duration: "2024–2027",
        institution: "K K Wagh Polytechnic, Nashik",
        description: "Currently pursuing 2nd year of Diploma, focusing on core electrical concepts and automation.",
        icon: faGraduationCap,
        color: "#2563EB"
    },
    {
        id: 2,
        title: "SSC Board Examination",
        duration: "2023–2024",
        institution: "New Maratha High School, Nashik",
        description: "Completed secondary education with distinct excellence and a strong academic foundation.",
        icon: faSchool,
        color: "#16A34A"
    },
];

const Education = () => {
    return (
        <div className="content py-20 px-4 relative" id="education">

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="text-center mb-16">
                <p className="section-title text-gray-900 dark:text-white inline-block relative">
                    Education Journey
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-70"></span>
                </p>
                <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                    My academic path and qualifications that laid the foundation for my career.
                </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-transparent md:left-1/2 md:-ml-0.5 opacity-30"></div>

                <div className="flex flex-col gap-12">
                    {educationData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            {/* Card Content */}
                            <div className="flex-1 w-full pl-20 md:pl-0">
                                <div
                                    className={`relative p-6 sm:p-8 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group mr-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                                >
                                    <div className="flex flex-col gap-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-picto-primary uppercase tracking-wider">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            {item.duration}
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-picto-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                            {item.institution}
                                        </p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Connector Dot for Mobile (Hidden on MD) */}
                                    <div
                                        className="md:hidden absolute left-[-42px] top-8 w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-10"
                                        style={{ color: item.color }}
                                    >
                                        <FontAwesomeIcon icon={item.icon} className="text-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* Center Icon (Desktop) */}
                            <div className="hidden md:flex flex-none w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-4 border-white dark:border-gray-800 shadow-lg items-center justify-center z-10 transition-transform duration-300 hover:scale-110">
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className="text-2xl"
                                    style={{ color: item.color }}
                                />
                            </div>

                            {/* Empty Space for Balance */}
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
