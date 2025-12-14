import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] xl:p-16 lg:p-12 md:p-10 sm:p-8 p-6 transition-all duration-300`}
      id="about"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

        {/* Left Column: Text & Social */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed">
              <p>
                I am a 2nd Year Diploma student in Electrical Engineering with a strong passion for software development.
                I focus on building efficient applications using <span className="font-semibold text-picto-primary">Python</span> and <span className="font-semibold text-picto-primary">Flutter</span>.
              </p>
              <p>
                My interest lies in creating real-world, user-centric solutions.
                I also have experience in freelance web and frontend development,
                delivering responsive and functional designs.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <div className="inline-block bg-white/30 dark:bg-white/10 rounded-lg p-3 shadow-sm border border-white/40 dark:border-white/10 backdrop-blur-sm transition-colors duration-300">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Right Column: Creative Code Editor */}
        <div className="flex-1 w-full max-w-xl">
          <div className="w-full rounded-xl bg-[#1e1e1e] shadow-2xl overflow-hidden border border-gray-700 hover:scale-[1.02] transition-transform duration-500 group">
            {/* Window Controls */}
            <div className="bg-[#2d2d2d] px-4 py-3 flex gap-2 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-auto text-xs text-gray-500 font-mono">srujan.py</div>
            </div>
            {/* Code Content */}
            <div className="p-6 font-mono text-sm sm:text-base leading-7">
              <div className="text-gray-400">
                class <span className="text-yellow-400">Developer</span>:
              </div>
              <div className="pl-4 text-gray-300">
                def <span className="text-blue-400">__init__</span>(self):
              </div>
              <div className="pl-8 text-gray-300">
                self.name = <span className="text-green-400">"Srujan"</span>
              </div>
              <div className="pl-8 text-gray-300">
                self.role = <span className="text-green-400">"Python & Flutter Dev"</span>
              </div>
              <div className="pl-8 text-gray-300">
                self.diploma = <span className="text-green-400">"Electrical Eng."</span>
              </div>
              <br />
              <div className="pl-4 text-gray-300">
                def <span className="text-blue-400">skills</span>(self):
              </div>
              <div className="pl-8 text-gray-300">
                return [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"Flutter"</span>, <span className="text-green-400">"UiPath"</span>]
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
