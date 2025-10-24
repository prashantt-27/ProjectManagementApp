import CompleteLandingPage from "./CompleteLandingPage";

const About = () => {
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
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100 text-purple-600",
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
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100 text-blue-600",
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
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100 text-pink-600",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Time Tracking",
      description:
        "Log time spent on tasks automatically and generate detailed reports. Understand where your time goes and optimize your workflow efficiency.",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100 text-emerald-600",
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      title: "Smart Notifications",
      description:
        "Stay informed with intelligent alerts for deadlines, updates, and mentions. Customize notification preferences to match your workflow style.",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100 text-orange-600",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Advanced Security",
      description:
        "Your data is protected with enterprise-grade encryption and security measures. Control access with role-based permissions and audit logs.",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      iconBg: "bg-violet-100 text-violet-600",
    },
  ];

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              ✨ Powerful Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Manage Projects Better
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the tools and features that make project management
              simple, efficient, and enjoyable for teams of all sizes
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`${feature.iconBg} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    {feature.icon}
                  </div>
                  {/* Decorative Element */}
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg opacity-20 group-hover:opacity-40 transition-opacity`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
        </div>
      </section>
    </>
  );
};

export default About;
