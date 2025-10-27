import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { HyperText } from "../animation/HyperText";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-200"
          : "bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white"
      }`}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${
            darkMode ? "bg-gray-700" : "bg-purple-300"
          }`}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${
            darkMode ? "bg-gray-600" : "bg-indigo-300"
          }`}
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className={`absolute top-40 left-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${
            darkMode ? "bg-gray-500" : "bg-pink-300"
          }`}
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -30, 10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 4 }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10 items-center">
        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className={`absolute -top-4 -left-4 rounded-2xl p-4 hidden sm:block shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`rounded-full p-2 ${
                  darkMode ? "bg-green-800" : "bg-green-100"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <div
                  className={`text-sm font-bold z-40 ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Task Completed!
                </div>
                <div
                  className={`text-xs z-40 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Great progress today
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className={`absolute -bottom-4 -right-4 rounded-2xl p-4 hidden sm:block shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`rounded-full p-2 ${
                  darkMode ? "bg-purple-700" : "bg-purple-100"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${
                    darkMode ? "text-purple-300" : "text-purple-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z"
                  />
                </svg>
              </div>
              <div>
                <div
                  className={`text-sm font-bold ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Team Updated
                </div>
                <div
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  5 new changes
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-4 sm:p-8 border shadow-2xl ${
              darkMode
                ? "bg-gray-800 border-gray-600"
                : "bg-white/10 border-white/20"
            }`}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/021/436/050/original/project-management-strategic-plan-to-manage-resources-for-development-working-process-and-schedule-task-completion-concept-smart-businessman-project-manager-manage-multiple-project-dashboards-vector.jpg"
              alt="Project Management Dashboard"
              className="w-full rounded-2xl shadow-2xl z-0"
            />
          </motion.div>
        </motion.div>

        {/* Left Text */}
        <div className="space-y-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm ${
              darkMode ? "bg-gray-700/30" : "bg-white/20"
            }`}
          >
            🚀 New: AI-Powered Task Prioritization
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            Take Control of Your{" "}
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Projects Effortlessly
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className={
              darkMode
                ? "text-gray-300 text-lg sm:text-xl max-w-xl"
                : "text-purple-100 text-lg sm:text-xl max-w-xl"
            }
          >
            Track progress, prioritize tasks, and streamline your workflow with
            our intuitive project management platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              className={`group px-8 py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center transform transition-all duration-300 ${
                darkMode
                  ? "bg-gray-200 text-gray-900 hover:scale-105 hover:bg-gray-300"
                  : "bg-white text-purple-600 hover:scale-105 hover:shadow-2xl"
              }`}
            >
              Get Started Free
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <button
              className={`px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center border transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700/50 border-gray-500 text-gray-200 hover:bg-gray-700/70"
                  : "bg-purple-700/50 border-white/30 text-white hover:bg-purple-700/70"
              }`}
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 pt-8"
          >
            {[
              { label: "Active Users", value: "50K+" },
              { label: "Projects", value: "200K+" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold">
                  <HyperText>{stat.value}</HyperText>
                </div>
                <div
                  className={
                    darkMode
                      ? "text-gray-400 text-sm mt-1"
                      : "text-purple-200 text-sm mt-1"
                  }
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg
          viewBox="0 0 1440 120"
          fill={darkMode ? "#1f2937" : "white"}
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
