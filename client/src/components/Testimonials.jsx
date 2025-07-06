import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 py-12 px-6"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
        Customer Testimonials
      </h1>
      <p className="text-gray-500 mb-12 text-center">What Our Users Are Saying</p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {testimonialsData.slice(0, 6).map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/20 p-6 rounded-lg shadow-md border flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-20 mb-3"
            />
            <h2 className="text-xl font-semibold">{testimonial.name}</h2>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
            
            {/* Star Ratings */}
            <div className="flex my-2">
              {Array(testimonial.stars)
                .fill()
                .map((_, idx) => (
                  <img key={idx} src={assets.rating_star} alt="star" className="w-4" />
                ))}
            </div>

            <p className="text-center text-sm text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
