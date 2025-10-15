import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { logout } from "../redux/slices/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access current user from Redux
  const { currentUser } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-purple-800 text-white shadow-lg sticky top-0 z-50">
      <div>
        <h2
          className="text-xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Project Manager
        </h2>
      </div>

      {/* Middle Links */}
      <ul className="flex space-x-10">
        <li
          className="hover:text-gray-200 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>

        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <Link to="/project">
          <li className="hover:text-gray-200 cursor-pointer">Projects</li>
        </Link>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>

      <div className="buttons">
        {currentUser ? (
          <div className="flex items-center space-x-4">
            {currentUser && (
              <span className="font-medium text-sm">
                👋 {currentUser.username}
              </span>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-purple-100 text-purple-600 hover:bg-purple-200 px-4 py-2 rounded-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
