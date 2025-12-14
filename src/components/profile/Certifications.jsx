
const certificationsData = [
    {
        id: 1,
        title: "Flutter Certification",
        issuer: "Udemy",
        year: "2024",
    },
    {
        id: 2,
        title: "Python Certification",
        issuer: "Udemy",
        year: "2020",
    },
];

const Certifications = () => {
    return (
        <div className="content py-10 md:py-15 transition-colors duration-300" id="certifications">
            <div className="text-center mb-10">
                <p className="section-title text-gray-900 dark:text-white transition-colors duration-300">Certifications</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
                {certificationsData.map((cert) => (
                    <div
                        key={cert.id}
                        className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none transition-all duration-300 border border-white/20 dark:border-gray-700/50 flex flex-col items-center text-center hover:shadow-lg dark:hover:shadow-none"
                    >
                        <div className="w-12 h-12 bg-white/60 dark:bg-white/10 rounded-full flex items-center justify-center text-picto-primary dark:text-gray-200 text-xl font-bold mb-4 transition-colors duration-300">
                            {cert.title.charAt(0)}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 transition-colors duration-300">{cert.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">{cert.issuer}</p>
                        <span className="text-sm text-gray-400 dark:text-gray-500 font-medium transition-colors duration-300">{cert.year}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
