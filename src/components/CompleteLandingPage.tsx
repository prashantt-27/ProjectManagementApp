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

// Simple Marquee Component
const Marquee = ({ children, reverse = false, className = "" }: any) => {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-4"
        animate={{
          x: reverse ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
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
      colorLight: "from-purple-500 to-indigo-500",
      colorDark: "from-purple-600 to-indigo-600",
    },
    {
      name: "Michael Rodriguez",
      role: "Founder at StartupHub",
      image: "MR",
      content:
        "Best project management tool we've ever used. The time tracking feature alone has saved us countless hours. Highly recommend for any growing team!",
      rating: 5,
      colorLight: "from-blue-500 to-cyan-500",
      colorDark: "from-blue-600 to-cyan-600",
    },
    {
      name: "Emily Watson",
      role: "Creative Director at DesignLab",
      image: "EW",
      content:
        "The collaborative features are game-changing. Our remote team stays perfectly synchronized, and the real-time updates keep everyone on the same page effortlessly.",
      rating: 5,
      colorLight: "from-pink-500 to-rose-500",
      colorDark: "from-pink-600 to-rose-600",
    },
    {
      name: "Sophia Lee",
      role: "Project Manager at CodeFlow",
      image: "SL",
      content:
        "Our workflow efficiency skyrocketed. The dashboards are clean, and everything feels modern and fast.",
      rating: 5,
      colorLight: "from-green-500 to-emerald-500",
      colorDark: "from-green-600 to-emerald-600",
    },
    {
      name: "David Kim",
      role: "Team Lead at InnovateX",
      image: "DK",
      content:
        "Impressive UI/UX and top-tier performance. Switching themes feels seamless. Great work!",
      rating: 5,
      colorLight: "from-orange-500 to-yellow-500",
      colorDark: "from-orange-600 to-yellow-600",
    },
    {
      name: "Ava Johnson",
      role: "Marketing Head at BrightWave",
      image: "AJ",
      content:
        "An elegant platform with smooth animations. Love how intuitive everything feels.",
      rating: 5,
      colorLight: "from-fuchsia-500 to-purple-500",
      colorDark: "from-fuchsia-600 to-purple-600",
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
      color: "from-gray-600 to-gray-700",
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
      color: "from-purple-600 to-indigo-600",
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
      color: "from-emerald-600 to-green-600",
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

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  const TestimonialsCard = ({
    name,
    role,
    content,
    rating,
    image,
    colorLight,
    colorDark,
  }: any) => (
    <motion.figure
      whileHover={{ scale: 1.05 }}
      className={`relative w-72 cursor-pointer overflow-hidden rounded-2xl border p-6 mx-4 transition-all
        ${
          darkMode
            ? "border-gray-700 bg-gray-800 hover:bg-gray-750 shadow-lg hover:shadow-2xl"
            : "border-gray-200 bg-white hover:shadow-xl shadow-md"
        }`}
    >
      <div className="flex items-center mb-3">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <blockquote
        className={`text-sm italic mb-4 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        "{content}"
      </blockquote>
      <div className="flex items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 text-white bg-linear-to-br ${
            darkMode ? colorDark : colorLight
          }`}
        >
          {image}
        </div>
        <div>
          <figcaption
            className={`font-semibold ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {name}
          </figcaption>
          <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </motion.figure>
  );

  return (
    <div
      className={
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }
    >
      {/* Testimonials Section */}
      <section
        className={`py-20 ${
          darkMode ? "bg-gray-800" : "bg-linear-to-b from-gray-50 to-white"
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
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Loved by Teams{" "}
              <span className="block bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Around the World
              </span>
            </h2>
          </motion.div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12">
            <Marquee className="mb-4">
              {firstRow.map((t, i) => (
                <TestimonialsCard key={i} {...t} />
              ))}
            </Marquee>

            <Marquee reverse>
              {secondRow.map((t, i) => (
                <TestimonialsCard key={i} {...t} />
              ))}
            </Marquee>

            {/* Improved linear Edges */}
            <div
              className={`pointer-events-none absolute inset-y-0 left-0 w-1/4 ${
                darkMode
                  ? "bg-linear-to-r from-gray-800"
                  : "bg-linear-to-r from-white"
              }`}
            ></div>
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 w-1/4 ${
                darkMode
                  ? "bg-linear-to-l from-gray-800"
                  : "bg-linear-to-l from-white"
              }`}
            ></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        className={`py-20 ${
          darkMode ? "bg-gray-900" : "bg-linear-to-b from-white to-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className={`text-4xl lg:text-5xl font-bold mb-12 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Choose Your Perfect{" "}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
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
                className={`rounded-2xl p-8 shadow-xl border-2 transition-all duration-500
                  ${
                    plan.popular
                      ? "scale-105 border-purple-500 bg-linear-to-br from-purple-600 to-indigo-600 text-white"
                      : darkMode
                      ? "border-gray-700 hover:-translate-y-2 bg-gray-800 text-gray-100 hover:border-gray-600"
                      : "border-gray-200 hover:-translate-y-2 bg-white text-gray-900 hover:border-purple-300 hover:shadow-2xl"
                  }`}
              >
                {plan.popular && (
                  <span className="px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block bg-white/20 text-white backdrop-blur-sm">
                    ⭐ Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`mb-4 ${
                    plan.popular
                      ? "text-purple-100"
                      : darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
                <p className="text-5xl font-bold mb-6">
                  ${plan.price}
                  <span className="text-lg font-normal">/mo</span>
                </p>
                <ul className="text-left mb-8 space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0"
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
                      <span
                        className={
                          plan.popular
                            ? "text-purple-50"
                            : darkMode
                            ? "text-gray-300"
                            : "text-gray-700"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${
                    plan.popular
                      ? "bg-white text-purple-700 hover:bg-purple-50 shadow-lg"
                      : darkMode
                      ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500"
                      : "bg-linear-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg"
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`py-20 ${
          darkMode ? "bg-gray-800" : "bg-linear-to-b from-gray-50 to-white"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className={`text-4xl lg:text-5xl font-bold text-center mb-12 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
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
                    ? "bg-gray-900 border-gray-700 hover:border-gray-600"
                    : "bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span
                    className={`font-semibold text-lg ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={darkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    ▼
                  </motion.span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`px-6 pb-5 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
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
