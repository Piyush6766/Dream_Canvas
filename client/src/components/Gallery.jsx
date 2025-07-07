import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

import rover from "../assets/rover.png";
import robo from "../assets/robo.png"
import ads from "../assets/ads.png";
import owl from "../assets/owl.png";
import queen from "../assets/queen.png";
import drago from "../assets/drago.png";

const sampleImages = [rover, robo, ads, owl, queen, drago];

const Gallery = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.section
      className="py-3 px-6 sm:px-12"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div
        className={`w-full max-w-6xl mx-auto p-6 sm:p-10 border rounded-3xl shadow-xl backdrop-blur-md transition-all duration-700 ease-in-out
          ${darkMode ? "bg-gray-900/60 border-gray-700" : "bg-white/60 border-gray-200"}`}
      >
        <div className="text-center mb-10">
          <h2
            className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
              darkMode ? "text-white" : "text-blue-700"
            }`}
          >
            Inspiration Gallery
          </h2>
          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg transition-colors duration-500 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore a collection of AI-generated visuals that demonstrate the
            power of imagination and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-auto">
          {sampleImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform duration-500 hover:scale-[1.03] bg-white flex items-center justify-center p-4"
            >
              <img
                src={img}
                alt={`Gallery item ${index + 1}`}
                className="max-w-full max-h-[300px] object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
