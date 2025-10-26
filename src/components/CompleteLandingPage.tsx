import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay },
  }),
};

const CompleteLandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { darkMode } = useTheme();

  const testimonials = [
    {
      name: "Prashant Prajapati",
      role: "Student at LJ University",
      image: "PP",
      content:
        "This platform transformed how our team collaborates. We've seen a 40% increase in productivity since switching. The interface is intuitive and the features are exactly what we needed.",
      rating: 5,
      color: darkMode
        ? "from-gray-700 to-gray-600"
        : "from-purple-500 to-indigo-500",
    },
    {
      name: "Michael Rodriguez",
      role: "Founder at StartupHub",
      image: "MR",
      content:
        "Best project management tool we've ever used. The time tracking feature alone has saved us countless hours. Highly recommend for any growing team!",
      rating: 5,
      color: darkMode
        ? "from-gray-700 to-gray-600"
        : "from-blue-500 to-cyan-500",
    },
    {
      name: "Emily Watson",
      role: "Creative Director at DesignLab",
      image: "EW",
      content:
        "The collaborative features are game-changing. Our remote team stays perfectly synchronized, and the real-time updates keep everyone on the same page effortlessly.",
      rating: 5,
      color: darkMode
        ? "from-gray-700 to-gray-600"
        : "from-pink-500 to-rose-500",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic task management",
        "2 team members",
        "5GB storage",
        "Email support",
        "Mobile app access",
      ],
      color: darkMode
        ? "from-gray-600 to-gray-700"
        : "from-gray-600 to-gray-700",
      popular: false,
    },
    {
      name: "Professional",
      price: "29",
      description: "Ideal for growing teams and businesses",
      features: [
        "Unlimited projects",
        "Advanced task management",
        "Up to 25 team members",
        "100GB storage",
        "Priority support",
        "Custom integrations",
        "Time tracking",
        "Advanced analytics",
      ],
      color: darkMode
        ? "from-purple-600 to-indigo-600"
        : "from-purple-600 to-indigo-600",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Unlimited storage",
        "24/7 dedicated support",
        "Custom workflows",
        "Advanced security",
        "API access",
        "White-label options",
      ],
      color: darkMode
        ? "from-emerald-600 to-green-600"
        : "from-emerald-600 to-green-600",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "You get full access to all Professional features for 14 days, no credit card required.",
    },
    {
      question: "Can I change plans at any time?",
      answer:
        "Yes! You can upgrade or downgrade your plan anytime, and changes take effect immediately.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption and comply with GDPR and SOC 2 standards.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes! Save 20% when you choose annual billing on any paid plan.",
    },
  ];

  return (
    <div
      className={
        darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
      }
    >
      {/* 🌍 Testimonials Section */}
      <section
        className={`py-20 ${
          darkMode ? "bg-gray-800" : "bg-gradient-to-b from-gray-50 to-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span
              className={`px-4 py-2 rounded-full font-semibold inline-block ${
                darkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-purple-100 text-purple-700"
              }`}
            >
              💬 Testimonials
            </span>
            <h2
              className={`text-4xl lg:text-5xl font-bold mt-4 ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Loved by Teams{" "}
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Around the World
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
                className={`rounded-2xl p-8 shadow-lg border transition-all duration-500 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 hover:shadow-2xl"
                    : "bg-white border-gray-100 hover:shadow-2xl"
                }`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p
                  className={
                    darkMode
                      ? "text-gray-300 mb-6 italic"
                      : "text-gray-700 mb-6 italic"
                  }
                >
                  "{t.content}"
                </p>
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4 bg-gradient-to-br ${t.color} text-white`}
                  >
                    {t.image}
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💎 Pricing Section */}
      <section
        className={`py-20 ${
          darkMode ? "bg-gray-900" : "bg-gradient-to-b from-white to-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className={`text-4xl lg:text-5xl font-bold mb-12 ${
              darkMode ? "text-gray-200" : "text-gray-900"
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Choose Your Perfect{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Pricing Plan
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
                className={`rounded-2xl p-8 shadow-lg border-2 transition-all duration-500
            ${
              plan.popular
                ? darkMode
                  ? "scale-105 border-purple-600 bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
                  : "scale-105 border-purple-600 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : darkMode
                ? "border-gray-700 hover:-translate-y-2 bg-gray-800 text-gray-200"
                : "border-gray-100 hover:-translate-y-2 bg-gray-200 text-gray-900"
            }
          `}
              >
                {plan.popular && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block ${
                      darkMode
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                        : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                    }`}
                  >
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    darkMode
                      ? plan.popular
                        ? "text-white"
                        : "text-gray-200"
                      : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={
                    darkMode ? "text-gray-400 mb-4" : "text-gray-600 mb-4"
                  }
                >
                  {plan.description}
                </p>
                <p
                  className={`text-5xl font-bold mb-6 ${
                    darkMode
                      ? plan.popular
                        ? "text-white"
                        : "text-gray-200"
                      : "text-gray-900"
                  }`}
                >
                  ${plan.price}
                </p>
                <ul className="text-left mb-8 space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
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
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-bold text-lg ${
                    plan.popular
                      ? "bg-white text-purple-700 hover:bg-gray-100"
                      : darkMode
                      ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ❓ FAQ Section */}
      <section
        className={`py-20 ${
          darkMode ? "bg-gray-800" : "bg-gradient-to-b from-gray-50 to-white"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className={`text-4xl lg:text-5xl font-bold text-center mb-12 ${
              darkMode ? "text-gray-200" : "text-gray-900"
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className={`rounded-xl shadow-md border transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-900 border-gray-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span
                    className={`font-semibold text-lg ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={
                      darkMode
                        ? "px-6 pb-5 text-gray-400"
                        : "px-6 pb-5 text-gray-600"
                    }
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompleteLandingPage;
