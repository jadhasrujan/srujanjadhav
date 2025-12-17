import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Roles = ({ role }) => {
  return (
    <div
      className="group relative h-full"
      style={{
        "--role-color": role?.color || "#2563EB"
      }}
    >
      <div
        className="relative h-full bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between overflow-hidden"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 20px 40px -15px ${role?.color}40`;
          e.currentTarget.style.borderColor = `${role?.color}60`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '';
          e.currentTarget.style.borderColor = '';
        }}
      >
        {/* Background Gradient Blob */}
        <div
          className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{ backgroundColor: role?.color }}
        />

        <div>
          {/* Header with Icon */}
          <div className="flex justify-between items-start mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
              style={{
                backgroundColor: `${role?.color}15`,
                color: role?.color
              }}
            >
              <FontAwesomeIcon icon={role?.icon} />
            </div>

            {/* Decorative Dot Grid */}
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-[var(--role-color)] transition-colors duration-300">
            {role?.title}
          </h3>

          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
            {role?.description}
          </p>
        </div>

        {/* Animated Bottom Bar */}
        <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 h-1 rounded-full overflow-hidden">
          <div
            className="h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"
            style={{ backgroundColor: role?.color }}
          />
        </div>
      </div>
    </div>
  );
};

export default Roles;
