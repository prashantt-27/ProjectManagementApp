import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/slices/userSlice";
import { useTheme } from "../context/ThemeContext"; // Adjust the path as needed

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log({ email, password });
    dispatch(register({ username, email, password }));
    setUsername("");
    setEmail("");
    setPassword("");
    navigate("/login");
  };

  return (
    <>
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div
          className={`shadow-lg rounded-lg p-8 w-full max-w-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
            Register Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label
                className={`block mb-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-black"
                }`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                className={`block mb-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-black"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                className={`block mb-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-black"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p
            className={`text-center mt-6 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Already have an account?{" "}
            <a
              href="#"
              className="text-purple-600 font-semibold hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
