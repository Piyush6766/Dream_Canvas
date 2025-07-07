import React, { useContext } from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Steps = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-32 px-4"
    >
      <h1
        className={`text-3xl sm:text-4xl font-semibold mb-2 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        How it works
      </h1>
      <p
        className={`text-lg mb-8 text-center ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Transform Words Into Stunning Images
      </p>

      {/* Step Cards */}
      <div className="space-y-4 w-full max-w-3xl">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className={`group flex items-center gap-5 p-5 border rounded-lg shadow-sm hover:shadow-lg transform transition duration-300 hover:scale-[1.02] backdrop-blur-md
              ${darkMode
                ? "bg-gray-900/50 border-gray-700 hover:bg-gray-800/60"
                : "bg-white/50 border-gray-200 hover:bg-[#F8F4FF]"}
            `}
          >
            {/* Icon with grayscale effect */}
            <img
              src={item.icon}
              alt="icon"
              className="w-14 h-14 object-contain filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
            />

            {/* Text */}
            <div>
              <h2
                className={`text-lg sm:text-xl font-semibold mb-1 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h2>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
