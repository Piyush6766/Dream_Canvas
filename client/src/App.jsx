import React, { useContext } from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Gallery from './components/Gallery';
import InspiringCreations from "./components/InspiringCreations";
import Steps from "./components/Steps"; // <-- Import Steps.jsx
import "./App.css"; // Make sure this includes the custom-bg class
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <>
      <AnimatedBackground />
      <div className="relative min-h-screen overflow-hidden mx-4 sm:mx-8 md:mx-16 lg:mx-24">
        {/* Custom Pattern Background */}
        <div className="custom-bg"></div>

        {/* Toast Notifications */}
        <ToastContainer position="top-center" />

        {/* Navigation Bar */}
        <Navbar />

        {/* Conditional Login Modal */}
        {showLogin && <Login />}

        {/* Main Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>

     
    </>
  );
};

export default App;
