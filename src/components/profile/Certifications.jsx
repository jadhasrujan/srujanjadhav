import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faAward, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const certificationsData = [
    {
        id: 1,
        title: "Flutter Development Bootcamp",
        issuer: "Udemy",
        year: "2024",
        icon: faCertificate,
        color: "#02569B" // Flutter Blue
    },
    {
        id: 2,
        title: "Complete Python Pro Bootcamp",
        issuer: "Udemy",
        year: "2020",
        icon: faAward,
        color: "#3776AB" // Python Blue/Yellow
    },
];

const Certifications = () => {
    return (
        <div className="content py-20 px-4 relative" id="certifications">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="text-center mb-16 relative z-10">
                <p className="section-title text-gray-900 dark:text-white inline-block">
                    Certifications & Awards
                </p>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Recognitions of my technical proficiency and continued learning.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
                {certificationsData.map((cert, index) => (
                    <div
                        key={cert.id}
                        className="group relative bg-white dark:bg-gray-800 rounded-lg p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    >
                        {/* Gradient Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-xy"></div>

                        {/* Card Content */}
                        <div className="relative h-full bg-white dark:bg-gray-900 rounded-lg p-6 md:p-8 flex items-center gap-6 overflow-hidden">

                            {/* Decorative Background Icon */}
                            <FontAwesomeIcon
                                icon={cert.icon}
                                className="absolute -right-6 -bottom-6 text-9xl opacity-[0.03] transform rotate-12 group-hover:rotate-0 transition-transform duration-500"
                            />

                            {/* Left Icon Box */}
                            <div
                                className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300"
                                style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
                            >
                                <FontAwesomeIcon icon={cert.icon} />
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-clip group-hover:whitespace-normal transition-all">
                                    {cert.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-1 mb-3">
                                    Issued by {cert.issuer} • {cert.year}
                                </p>

                                <div className="flex items-center gap-2 text-xs font-semibold text-green-500 bg-green-500/10 px-3 py-1 rounded-full w-fit">
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                    Verified Credential
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
