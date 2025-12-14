
const educationData = [
    {
        order: 1,
        title: "Diploma in Electrical Engineering",
        duration: "2024–2027",
        institution: "K K Wagh Polytechnic, Nashik",
        description: "Currently pursuing 2nd year of Diploma.",
    },
    {
        order: 2,
        title: "SSC Board Examination",
        duration: "2023–2024",
        institution: "New Maratha High School, Nashik",
        description: "Schooling completed with excellence.",
    },
];

const Education = () => {
    return (
        <div className="content py-10 md:py-15" id="education">
            <div className="text-center mb-10">
                <p className="section-title text-gray-900 dark:text-white transition-colors duration-300">Education</p>
            </div>
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                {educationData.map((item) => (
                    <div
                        key={item.order}
                        className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border-l-4 border-picto-primary border-y border-r border-white/20 dark:border-gray-700/50 hover:shadow-lg dark:hover:shadow-none transition-all duration-300"
                    >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">{item.title}</h3>
                            <span className="text-sm text-t-primary font-medium bg-white/60 dark:bg-white/10 dark:text-gray-200 px-3 py-1 rounded-full transition-colors duration-300">{item.duration}</span>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1 transition-colors duration-300">{item.institution}</p>
                        <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
