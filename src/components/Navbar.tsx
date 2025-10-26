import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { logout } from "../redux/slices/userSlice";
import logo from "../assets/logo.jpg";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const { darkMode, toggleDarkMode } = useTheme();

  const { currentUser } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setIsMenuOpen(false);
  };

  const handleNavClick = (path: string, linkName: string) => {
    navigate(path);
    setActiveLink(linkName);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/about", id: "about" },
    { name: "Pricing & Review", path: "/price", id: "price" },
    { name: "Projects", path: "/project", id: "projects" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b shadow-lg transition-all duration-300 ${
          darkMode
            ? "bg-gray-900/80 border-gray-700/50"
            : "bg-white/80 border-gray-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-auto sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleNavClick("/", "home")}
            >
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                    darkMode
                      ? "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500"
                      : "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600"
                  }`}
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h2
                  className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600`}
                >
                  ProjectFlow
                </h2>
                <p
                  className={`text-xs -mt-1 hidden sm:block ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Manage Smarter
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.path, link.id)}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeLink === link.id
                        ? "text-purple-600"
                        : darkMode
                        ? "text-gray-300 hover:text-purple-400"
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    {link.name}
                    {activeLink === link.id && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop Auth & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                    : "bg-purple-100 hover:bg-purple-200 text-purple-600"
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {currentUser ? (
                <>
                  <div
                    className={`flex items-center space-x-3 px-4 py-2 rounded-xl border transition-colors duration-300 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-purple-50 border-purple-200"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-md ${
                        darkMode
                          ? "bg-gray-700 text-gray-200"
                          : "bg-gradient-to-br from-purple-600 to-indigo-600 text-white"
                      }`}
                    >
                      {currentUser.username.charAt(0).toUpperCase()}
                    </div>
                    <span
                      className={`font-medium text-sm ${
                        darkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {currentUser.username}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="group relative px-5 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden flex items-center justify-center"
                  >
                    <span className="relative z-10 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleNavClick("/login", "login")}
                  className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    Login
                  </span>
                </button>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden relative w-10 h-10 rounded-lg flex items-center justify-center focus:outline-none transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-purple-100 hover:bg-purple-200"
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center">
                <span
                  className={`block w-full h-0.5 rounded-full transition-all duration-300 origin-center ${
                    darkMode ? "bg-purple-400" : "bg-purple-600"
                  } ${
                    isMenuOpen
                      ? "rotate-45 translate-y-[7px]"
                      : "rotate-0 translate-y-0"
                  }`}
                ></span>
                <span
                  className={`block w-full h-0.5 rounded-full transition-all duration-300 ${
                    darkMode ? "bg-purple-400" : "bg-purple-600"
                  } ${
                    isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                ></span>
                <span
                  className={`block w-full h-0.5 rounded-full transition-all duration-300 origin-center ${
                    darkMode ? "bg-purple-400" : "bg-purple-600"
                  } ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-[7px]"
                      : "rotate-0 translate-y-0"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`px-4 pb-6 pt-2 space-y-2 backdrop-blur-xl border-t transition-colors duration-300 ${
              darkMode
                ? "bg-gray-900/95 border-gray-700/50"
                : "bg-white/95 border-gray-200/50"
            }`}
          >
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.path, link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeLink === link.id
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                    : darkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen
                    ? "slideIn 0.3s ease-out forwards"
                    : "none",
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {activeLink === link.id && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}

            {/* Mobile Auth Section */}
            <div className="pt-4 border-t border-gray-200/50 space-y-3">
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-purple-50 text-gray-700 hover:bg-purple-100"
                }`}
              >
                <span>Dark Mode</span>
                <div
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                    darkMode ? "bg-purple-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      darkMode ? "transform translate-x-6" : ""
                    }`}
                  />
                </div>
              </button>

              {currentUser ? (
                <>
                  <div
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-300"
                        : "bg-purple-50 border-purple-200 text-gray-700"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-md ${
                        darkMode
                          ? "bg-gray-700 text-gray-200"
                          : "bg-gradient-to-br from-purple-600 to-indigo-600 text-white"
                      }`}
                    >
                      {currentUser.username.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p
                        className={`font-medium text-sm ${
                          darkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        {currentUser.username}
                      </p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Logged in
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleNavClick("/login", "login")}
                  className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
