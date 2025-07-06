import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28 text-center md:text-left"
    >
     <motion.h1 
  className="text-4xl sm:text-5xl font-bold mb-3 text-blue-800  drop-shadow-2xl"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 1 }}
>
  Create AI Images Effortlessly
</motion.h1>

      <motion.p
        className="text-gray-500 mb-8 text-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Transform simple text prompts into breathtaking visuals in just seconds. No artistic skills? No problem. Just describe your vision, and let AI bring it to life.
      </motion.p>
      <div className="flex flex-col gap-8 md:gap-14 md:flex-row items-center">
        <motion.img
          src={assets.sample_img_1}
          alt="AI Generated Example"
          className="w-80 xl:w-96  h-fit rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-lg w-full"
        >
          <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
            Turn Your Imagination into Reality
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            From concept art to branding materials, futuristic landscapes to fantasy characters—generate high-quality images instantly with our powerful AI.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
            AI-Powered Text-to-Image Generator
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our cutting-edge AI understands your words and transforms them into visually stunning artwork. Whether you need detailed illustrations, creative concept designs, or product mockups, your imagination is the only limit.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
            Endless Possibilities, Zero Effort
          </h2>
          <ul className="text-gray-600 leading-relaxed list-disc pl-5">
            <li><span className="font-bold">💡 Create with Ease</span> – Just type in your idea and watch AI generate unique visuals.</li>
            <li><span className="font-bold">🎨 High-Quality Results</span> – Crisp, detailed, and professional-grade images every time.</li>
            <li><span className="font-bold">🚀 Fast & Seamless</span> – Get stunning outputs in seconds, no technical expertise needed.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Unlock your creativity and start generating AI-powered images today!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
