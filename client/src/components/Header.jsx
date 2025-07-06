import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    user ? navigate("/result") : setShowLogin(true);
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between items-center text-left  px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Description Section */}
      <div className="sm:w-1/2">
        <motion.div
          className="flex justify-center items-center w-80 gap-2 bg-white px-4 py-2 rounded-full border border-neutral-300 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-neutral-600 font-medium">Unleash your creativity</p>
          <img src={assets.star_icon} alt="Star Icon" className="h-5" />
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-6xl font-bold max-w-[800px] mt-6"
        >
          Create stunning
          <span className="text-blue-600"> AI-Generated Images</span>
          , in seconds.
        </motion.h1>

        <motion.p
          className="text-lg text-neutral-600 max-w-xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Transform your imagination into breathtaking visuals effortlessly. No design skills needed—just pure creativity!
        </motion.p>

        <motion.button
          className="text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-md px-8 py-3 rounded-full mt-6 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClickHandler}
        >
          Generate Magic
          <img className="h-6" src={assets.star_group} alt="Star Group" />
        </motion.button>
      </div>

      {/* Hero Image */}
      <motion.img
        className="sm:w-1/2 mt-6  sm:mt-0 sm:ml-6  "
        src={assets.header}
        alt="Header Illustration"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default Header;
