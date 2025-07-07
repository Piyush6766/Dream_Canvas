import React, { useContext, useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex items-center justify-between py-4 px-4 sm:px-10 lg:px-0">
      {/* Logo & Branding */}
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src={assets.logoo} alt="Logo" className="w-20 sm:w-24" />
        </Link>
        <p className="hidden md:block text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
          DreamCanvas
        </p>
      </div>

      {/* Right Side Navigation */}
      <div className="flex items-center gap-4">
        {/* Box for Gallery, Pricing, Login */}
        <div className="flex items-center gap-4 bg-gray-100 bg-opacity-70 rounded-full px-4 py-2">
          <Link
            to="/gallery"
            className="text-sm sm:text-base text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            Gallery
          </Link>
          {!user && (
            <>
              <p
                className="text-sm sm:text-base text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => navigate("/buy")}
              >
                Pricing
              </p>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
              >
                Login
              </button>
            </>
          )}
        </div>

        {user && (
          <>
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full hover:scale-105 transition-all duration-300"
            >
              <img src={assets.credit_star} alt="Credit Icon" className="w-5" />
              <p className="text-sm font-medium text-gray-700">
                Credits: {credit}
              </p>
            </button>

            <p className="text-gray-600 hidden sm:block">Hi, {user.name}</p>

            <div className="relative" ref={dropdownRef}>
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-10 cursor-pointer drop-shadow"
                onClick={() => setShowDropdown((prev) => !prev)}
              />
              {showDropdown && (
                <div className="absolute top-12 right-0 bg-white border rounded-md shadow-md text-sm z-10">
                  <ul>
                    <li
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        )}

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-2 px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white transition"
          title="Toggle theme"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
