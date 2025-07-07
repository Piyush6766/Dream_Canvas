import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);
  const { darkMode } = useContext(ThemeContext);

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="py-3 px-4 sm:px-8"
    >
      <div
        className={`max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl shadow-xl backdrop-blur-md border transition-all duration-700 ease-in-out 
          ${darkMode ? "bg-gray-900/60 border-gray-700" : "bg-white/60 border-gray-200"}`}
      >
        <form onSubmit={onSumbitHandler} className="flex flex-col items-center">
          {/* Image Preview */}
          <div className="relative mb-6 w-full flex justify-center">
            <img
              src={image}
              alt="Generated Result"
              className="max-w-full max-h-[400px] rounded-xl shadow-md"
            />
            {loading && (
              <span className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full animate-pulse rounded-bl-xl rounded-br-xl" />
            )}
          </div>

          {/* Loading Text */}
          {loading && <p className="text-sm text-gray-500 mb-6">Loading...</p>}

          {/* Prompt Input */}
          {!isImageLoaded && (
            <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-1 mt-4 rounded-full">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Describe what you want to generate"
                className="flex-1 bg-transparent outline-none ml-5 placeholder:text-white/60"
              />
              <button
                type="submit"
                className="bg-zinc-900 px-10 sm:px-16 py-2.5 rounded-full text-white hover:bg-zinc-800 transition"
              >
                Generate
              </button>
            </div>
          )}

          {/* Buttons: Download or Generate Again */}
          {isImageLoaded && (
            <div className="flex gap-3 mt-4 flex-wrap justify-center">
           <button
  onClick={() => setIsImageLoaded(false)}
  className="bg-zinc-900 text-white px-6 py-2 rounded-full hover:bg-zinc-200 hover:text-black transition"
>
  Generate Another
</button>


              <a
                href={image}
                download
                className="bg-zinc-900 text-white px-6 py-2 rounded-full hover:bg-zinc-200 hover:text-black transition"
              >
                Download
              </a>
            </div>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Result;
