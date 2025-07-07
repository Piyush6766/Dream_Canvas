import React, { useContext } from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Testimonials = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 px-6"
    >
      {/* Single Card Wrapper */}
      <div
        className={`w-full max-w-6xl rounded-3xl border p-6 sm:p-10 backdrop-blur-md shadow-xl transition duration-300
          ${darkMode ? "bg-gray-900/50 border-gray-700" : "bg-white/50 border-gray-200"}`}
      >
        <h1
          className={`text-3xl sm:text-4xl font-semibold mb-2 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Customer Testimonials
        </h1>
        <p
          className={`mb-10 text-center ${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          What Our Users Are Saying
        </p>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "scale", stiffness: 100 }}
              className={`p-6 rounded-xl border shadow-sm hover:shadow-md flex flex-col items-center text-center transition duration-300
                ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-20 h-20 mb-4 object-cover"
              />
              <h2
                className={`text-lg font-semibold mb-1 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {testimonial.name}
              </h2>
              <p className={`text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                {testimonial.role}
              </p>

              {/* Star Ratings */}
              <div className="flex mb-3">
                {Array(testimonial.stars)
                  .fill()
                  .map((_, i) => (
                    <img
                      key={i}
                      src={assets.rating_star}
                      alt="star"
                      className="w-4 h-4 mx-0.5"
                    />
                  ))}
              </div>

              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
