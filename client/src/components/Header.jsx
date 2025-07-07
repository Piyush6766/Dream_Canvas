import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    user ? navigate("/result") : setShowLogin(true);
  };

  return (
    <motion.div
      className={`flex flex-col-reverse sm:flex-row justify-between border items-center px-4 md:px-6 lg:px-10 py-16 gap-8 rounded-3xl shadow-xl backdrop-blur-sm transition-colors duration-300
        ${darkMode ? "bg-gray-900/50" : "bg-white/50"}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Text Section */}
      <div className="sm:w-1/2 text-center sm:text-left">
        <motion.div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-lg mb-5 
            ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-neutral-300"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className={`font-medium ${darkMode ? "text-neutral-200" : "text-neutral-600"}`}>
            Unleash your creativity
          </p>
          <img src={assets.star_icon} alt="Star Icon" className="h-5" />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-2xl leading-tight bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Create Stunning AI-Generated Images in Seconds
        </motion.h1>

        <motion.p
          className={`text-lg mt-4 max-w-lg ${darkMode ? "text-neutral-200" : "text-neutral-600"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Turn your ideas into breathtaking visuals with the power of AI. No design experience needed—just your imagination.
        </motion.p>

        <motion.button
          className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClickHandler}
        >
          Generate Magic
          <img src={assets.star_group} alt="Star Group" className="h-6" />
        </motion.button>
      </div>

      {/* Hero Image */}
      <motion.img
        className="sm:w-1/2 w-full max-w-md sm:max-w-lg"
        src={assets.header}
        alt="AI Illustration"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default Header;
