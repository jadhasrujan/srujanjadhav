import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExpand, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import card1 from "../assets/images/portfolio-images/card-1.png";
import card2 from "../assets/images/portfolio-images/card-2.png";
import card3 from "../assets/images/portfolio-images/card-3.png";

// Dummy data for "More Projects"
const moreProjectsData = [
    {
        id: 1,
        image: card1,
        category: "App Development",
        title: "Teacher’s App",
        description: "A comprehensive app to manage student data efficiently using Firebase.",
        link: "#!",
        color: "#4F46E5"
    },
    {
        id: 2,
        image: card2,
        category: "App Development",
        title: "Expense Tracker",
        description: "Track daily expenses with categorization and real-time updates.",
        link: "#!",
        color: "#10B981"
    },
    {
        id: 3,
        image: card3,
        category: "App Development",
        title: "MyWallpaperHub",
        description: "A wallpaper app integrating Pexels API.",
        link: "#!",
        color: "#F59E0B"
    },
    {
        id: 4,
        image: card1,
        category: "Web Development",
        title: "Portfolio v1",
        description: "Previous version of my portfolio built with HTML/CSS.",
        link: "#!",
        color: "#EF4444"
    },
    {
        id: 5,
        image: card2,
        category: "RPA",
        title: "Invoice Automation",
        description: "Automated invoice processing using UiPath.",
        link: "#!",
        color: "#EC4899"
    },
    {
        id: 6,
        image: card3,
        category: "Python Scripting",
        title: "Data Scraper",
        description: "Python script to scrape and analyze data from various sources.",
        link: "#!",
        color: "#8B5CF6"
    },
];

const ProjectCard = ({ data, index }) => {
    return (
        <div
            className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid mb-6"
            style={{
                animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(20px)'
            }}
        >
            <style>
                {`
                    @keyframes fadeInUp {
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>

            {/* Image */}
            <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span
                        className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white rounded-full bg-white/20 backdrop-blur-md border border-white/10"
                        style={{ color: data.color }}
                    >
                        {data.category}
                    </span>

                    <h3 className="text-2xl font-bold text-white mb-2">{data.title}</h3>
                    <p className="text-gray-200 text-sm line-clamp-2 mb-4">{data.description}</p>

                    <div className="flex gap-3">
                        <a
                            href={data.link}
                            className="btn btn-sm bg-white text-gray-900 border-none hover:bg-gray-200 gap-2"
                        >
                            View Project <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                        <button className="btn btn-circle btn-sm btn-ghost text-white border border-white/30 hover:bg-white/20">
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MoreProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(moreProjectsData.map(item => item.category))];

    const filteredProjects = filter === 'All'
        ? moreProjectsData
        : moreProjectsData.filter(item => item.category === filter);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 relative overflow-hidden">

            {/* Creative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="content px-4 py-32 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="section-title text-gray-900 dark:text-white mb-6">Explore My Work</h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10">
                        A curated collection of projects showcasing my journey in coding, design, and automation.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                        ? 'bg-picto-primary text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry-like Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {filteredProjects.map((data, index) => (
                        <ProjectCard data={data} key={data.id} index={index} />
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-picto-primary transition-colors font-medium">
                        <FontAwesomeIcon icon={faArrowRight} className="rotate-180" /> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MoreProjects;
