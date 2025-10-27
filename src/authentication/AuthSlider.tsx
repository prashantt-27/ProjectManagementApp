import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register as registerUser } from "../redux/slices/userSlice";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

interface LoginData {
  email: string;
  password: string;
}

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

const AuthSlider: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, reset } = useForm<LoginData & SignUpData>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const onSubmit = (data: any) => {
    if (isLogin) {
      console.log("Login data:", data);
      dispatch(login(data));
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/project");
    } else {
      console.log("Register data:", data);
      dispatch(registerUser(data));
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/login");
    }
    reset();
  };

  return (
    <div
      className={`mt-8 md:mt-6 min-h-screen flex items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className={`relative shadow-2xl rounded-2xl overflow-hidden w-[90%] max-w-4xl flex flex-col md:flex-row backdrop-blur-lg ${
          darkMode ? "bg-gray-800/80" : "bg-white/80"
        }`}
      >
        {/* LEFT PANEL: Decorative + Switch */}
        <motion.div
          key="left-panel"
          layout
          className={`md:w-1/2 p-10 flex flex-col justify-center items-center text-center ${
            darkMode
              ? "bg-gradient-to-br from-purple-900 to-gray-800"
              : "bg-gradient-to-br from-purple-500 to-pink-300"
          }`}
        >
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold mb-4"
          >
            {isLogin ? "Welcome Back!" : "Join the Future"}
          </motion.h2>
          <p className="text-sm mb-6 max-w-xs">
            {isLogin
              ? "Login to continue managing your projects seamlessly."
              : "Create your account and start exploring powerful tools."}
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setIsLogin(!isLogin)}
            className="px-6 py-2 rounded-full font-semibold text-sm shadow-md bg-white/20 border border-white/30 text-white hover:bg-white/30 transition"
          >
            {isLogin ? "Create an account" : "Already have an account?"}
          </motion.button>
        </motion.div>

        {/* RIGHT PANEL: Forms */}
        <motion.div
          layout
          key="right-panel"
          className="md:w-1/2 p-8 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.form
                key="login-form"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-sm space-y-4"
              >
                <h3 className="text-3xl font-bold text-purple-600 text-center mb-4">
                  Login
                </h3>

                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                  />
                </div>

                <div>
                  <label className="block mb-1">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Enter your password"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                  Login
                </motion.button>
              </motion.form>
            ) : (
              <motion.form
                key="signup-form"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-sm space-y-4"
              >
                <h3 className="text-3xl font-bold text-purple-600 text-center mb-4">
                  Sign Up
                </h3>

                <div>
                  <label className="block mb-1">Username</label>
                  <input
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="Enter your username"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                  />
                </div>

                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                  />
                </div>

                <div>
                  <label className="block mb-1">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Enter your password"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                  Sign Up
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthSlider;
