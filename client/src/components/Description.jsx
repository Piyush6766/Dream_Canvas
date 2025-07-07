import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Description = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 px-2"
    >
      <div
        className={`w-full max-w-5xl shadow-2xl rounded-3xl border p-8 md:p-14 backdrop-blur-md transition-colors duration-300
          ${darkMode
            ? "bg-gray-900/90 border-gray-700"
            : "bg-white/90 border-gray-200"
          }`}
      >
        <motion.h1
          className={`text-4xl sm:text-5xl font-bold mb-4 drop-shadow-xl text-center ${
            darkMode ? "text-blue-300" : "text-blue-800"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Bring Your Ideas to Life with AI
        </motion.h1>

        <motion.p
          className={`mb-12 text-lg max-w-3xl leading-relaxed mx-auto text-center ${
            darkMode ? "text-gray-300" : "text-gray-800"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Enter your vision in words and watch as artificial intelligence
          transforms your thoughts into vivid, high-quality visuals—perfect for
          creators, marketers, designers, or dreamers.
        </motion.p>

        <div className="flex flex-col gap-10 md:gap-16 md:flex-row items-center">
          {/* Sample Image Section */}
          <motion.img
            src={assets.sample_img_1}
            alt="AI Generated Example"
            className="w-80 xl:w-96 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-blue-100 dark:border-blue-900"
            whileHover={{ scale: 1.05 }}
          />

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="max-w-xl"
          >
            <h2
              className={`text-2xl font-semibold mb-4 ${
                darkMode ? "text-neutral-100" : "text-neutral-800"
              }`}
            >
              AI-Generated Images in Seconds
            </h2>
            <p
              className={`mb-5 leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Whether you’re designing a futuristic product, visualizing an
              imaginary world, or simply looking for inspiration—our AI model
              brings your ideas to life in stunning detail.
            </p>

            <h2
              className={`text-2xl font-semibold mb-4 ${
                darkMode ? "text-neutral-100" : "text-neutral-800"
              }`}
            >
              Why Use DreamCanvas?
            </h2>
            <ul
              className={`list-disc pl-5 leading-loose mb-4 ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              <li>
                <span
                  className={`font-medium ${
                    darkMode ? "text-blue-400" : "text-blue-700"
                  }`}
                >
                  Effortless Creativity
                </span>{" "}
                – No design experience required.
              </li>
              <li>
                <span
                  className={`font-medium ${
                    darkMode ? "text-blue-400" : "text-blue-700"
                  }`}
                >
                  Instant Outputs
                </span>{" "}
                – Get professional results in under 10 seconds.
              </li>
              <li>
                <span
                  className={`font-medium ${
                    darkMode ? "text-blue-400" : "text-blue-700"
                  }`}
                >
                  Unlimited Ideas
                </span>{" "}
                – Generate images for branding, marketing, art, or fun.
              </li>
            </ul>

            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-800"}`}
            >
              DreamCanvas empowers everyone—from entrepreneurs to artists—to
              unlock their imagination through powerful text-to-image AI.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
