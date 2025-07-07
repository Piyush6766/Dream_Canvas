import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [state, setState] = useState("Login");
  const { showLogin, setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const route = state === "Login" ? "/login" : "/register";
      const payload = state === "Login" ? { email, password } : { name, email, password };

      const { data } = await axios.post(`${backendUrl}/api/user${route}`, payload);

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setShowLogin(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0.2, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white max-w-3xl w-full rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-xl relative"
      >
        {/* Close Button */}
        <img
          src={assets.cross_icon}
          alt="Close"
          className="absolute top-4 right-4 w-5 cursor-pointer"
          onClick={() => setShowLogin(false)}
        />

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-neutral-700 mb-1">
            {state}
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            {state === "Login"
              ? "Welcome back! Sign in to continue."
              : "Create a new account to get started."}
          </p>

          {state !== "Login" && (
            <div className="mb-4">
              <label className="block text-sm mb-1 text-gray-600">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-600">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              className="w-full border rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full border rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <p className="text-sm text-blue-600 mb-4 cursor-pointer hover:underline">
            Forgot password?
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {state === "Login" ? "Login" : "Create Account"}
          </button>

          <p className="text-sm text-center mt-5">
            {state === "Login" ? (
              <>
                Don’t have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer font-medium hover:underline"
                  onClick={() => setState("Sign Up")}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer font-medium hover:underline"
                  onClick={() => setState("Login")}
                >
                  Login
                </span>
              </>
            )}
          </p>
        </form>

        {/* Image */}
        <img
          src={assets.login}
          alt="Illustration"
          className="hidden md:block w-80 h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Login;
