import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    user ? navigate("/result") : setShowLogin(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-24 px-4"
    >
      <div
        className={`max-w-3xl mx-auto rounded-3xl p-10 text-center shadow-xl backdrop-blur-md border transition duration-300
          ${darkMode ? "bg-gray-900/50 border-gray-700" : "bg-white/50 border-gray-200"}`}
      >
        <h2
          className={`text-2xl md:text-4xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          See the Magic. Try Now.
        </h2>

        <button
          onClick={onClickHandler}
          className="group relative inline-flex items-center justify-center px-10 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium shadow-md hover:scale-105 transition-transform duration-300"
        >
          <span className="z-10 relative">Generate Images</span>
          <img
            src={assets.star_group}
            alt="star"
            className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="absolute inset-0 bg-white/10 rounded-full blur-md group-hover:opacity-100 opacity-0 transition-all duration-300"></span>
        </button>
      </div>
    </motion.div>
  );
};

export default GenerateBtn;
