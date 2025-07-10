import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { darkMode } = useContext(ThemeContext);

  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/newsletter/subscribe`,
        { email }
      );
      if (data.success) {
        toast.success("Subscribed successfully!");
        setEmail("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Subscription failed");
    }
  };

  return (
    <footer className="bg-transparent text-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* CARD ONLY: Gradient in Light Theme, Gray in Dark Theme */}
        <div
          className={`
            rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row justify-between gap-6 md:gap-10
            ${
              darkMode
                ? "bg-neutral-800 border border-gray-700"
                : "bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
            }
          `}
        >
          {/* Brand + Description */}
          <div className="md:w-2/5 flex flex-col items-start">
            <div className="flex items-center mb-2">
              <img src={assets.logoo} alt="logo" className="w-20 h-20" />
              <span className="ml-3 font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                DreamCanvas
              </span>
            </div>
            <p
              className={`text-sm leading-relaxed mt-2 max-w-sm ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Transform your imagination into high-quality AI visuals. Fast.
              Stunning. Limitless creativity for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/6">
            <h3
              className={`text-sm font-semibold mb-2 ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              QUICK LINKS
            </h3>
            <ul
              className={`space-y-1 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <li>
                <Link to="#" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-500 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-500 transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:w-1/6">
            <h3
              className={`text-sm font-semibold mb-2 ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              SUPPORT
            </h3>
            <ul
              className={`space-y-1 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <li>
                <Link to="#" className="hover:text-blue-500 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-500 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-500 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/4">
            <h3
              className={`text-sm font-semibold mb-2 ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              STAY UPDATED
            </h3>
            <p
              className={`text-sm mb-3 ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Subscribe to our newsletter for updates and tips.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full sm:flex-1 px-4 py-2 text-sm rounded-md border ${
                  darkMode
                    ? "bg-neutral-700 text-white border-gray-600 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-800"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button
                onClick={handleSubscribe}
                className="px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`text-center text-sm mt-10 pt-6 border-t ${
            darkMode
              ? "text-gray-400 border-gray-700"
              : "text-gray-500 border-gray-200"
          }`}
        >
          © {currentYear} DreamCanvas. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
