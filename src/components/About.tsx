import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();
  const { darkMode } = useTheme();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Project Tracking",
      description:
        "Monitor your project progress in real-time with intuitive dashboards and visual reports. Track milestones, deadlines, and team performance at a glance.",
      color: darkMode
        ? "from-gray-700 to-gray-600"
        : "from-purple-500 to-indigo-500",
      bgColor: darkMode ? "bg-gray-800" : "bg-purple-50",
      iconBg: darkMode
        ? "bg-gray-700 text-gray-200"
        : "bg-purple-100 text-purple-600",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Task Management",
      description:
        "Organize tasks with priority levels, due dates, and assignments. Break down complex projects into manageable tasks and boost your productivity.",
      color: darkMode
        ? "from-gray-600 to-gray-500"
        : "from-blue-500 to-cyan-500",
      bgColor: darkMode ? "bg-gray-800" : "bg-blue-50",
      iconBg: darkMode
        ? "bg-gray-700 text-gray-200"
        : "bg-blue-100 text-blue-600",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Team Collaboration",
      description:
        "Work seamlessly with your team through real-time updates, shared workspaces, and integrated communication tools for better coordination.",
      color: darkMode
        ? "from-gray-600 to-gray-500"
        : "from-pink-500 to-rose-500",
      bgColor: darkMode ? "bg-gray-800" : "bg-pink-50",
      iconBg: darkMode
        ? "bg-gray-700 text-gray-200"
        : "bg-pink-100 text-pink-600",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM12 2v2m0 16v2m10-10h-2M4 12H2m15.071-7.071l-1.414 1.414M6.343 17.657l-1.414 1.414M17.657 17.657l-1.414-1.414M6.343 6.343L4.929 4.929"
          />
        </svg>
      ),
      title: "Analytics & Reporting",
      description:
        "Get actionable insights from your project data with customizable reports, charts, and KPIs to make informed decisions.",
      color: darkMode
        ? "from-gray-600 to-gray-500"
        : "from-green-500 to-lime-500",
      bgColor: darkMode ? "bg-gray-800" : "bg-green-50",
      iconBg: darkMode
        ? "bg-gray-700 text-gray-200"
        : "bg-green-100 text-green-600",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7h18M3 12h18M3 17h18M3 22h18M3 2h18"
          />
        </svg>
      ),
      title: "Custom Workflows",
      description:
        "Design and automate workflows that fit your team’s process. Set triggers, approvals, and notifications to streamline work.",
      color: darkMode
        ? "from-gray-700 to-gray-600"
        : "from-yellow-400 to-orange-400",
      bgColor: darkMode ? "bg-gray-800" : "bg-yellow-50",
      iconBg: darkMode
        ? "bg-gray-700 text-gray-200"
        : "bg-yellow-100 text-yellow-600",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M19 3v4M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "File & Resource Management",
      description:
        "Store, share, and manage project files securely. Keep your resources organized and accessible to your team anytime, anywhere.",
      color: darkMode
        ? "from-gray-600 to-gray-500"
        : "from-indigo-500 to-blue-500",
      bgColor: darkMode ? "bg-gray-800" : "bg-indigo-50",
      iconBg: darkMode
        ? "bg-gray-700 text-gray-200"
        : "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-20 lg:py-24 overflow-hidden ${
        darkMode
          ? "bg-gray-900 text-gray-200"
          : "bg-gradient-to-b from-white to-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
              darkMode
                ? "bg-gray-700 text-gray-200"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            ✨ Powerful Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Manage Projects Better
            </span>
          </h2>
          <p
            className={
              darkMode
                ? "text-gray-400"
                : "text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto"
            }
          >
            Discover the tools and features that make project management simple,
            efficient, and enjoyable for teams of all sizes.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              className={`group relative rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-500 border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 hover:-translate-y-2 hover:shadow-2xl"
                  : "bg-white border-gray-100 hover:-translate-y-2 hover:shadow-2xl"
              }`}
            >
              {/* Hover background glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl bg-gradient-to-br ${feature.color} transition-opacity`}
              ></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`${feature.iconBg} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-3 transition-colors ${
                    darkMode
                      ? "text-gray-200 group-hover:text-purple-400"
                      : "text-gray-900 group-hover:text-purple-600"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
