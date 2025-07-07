import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";

const BuyCredit = () => {
  const { user, backendUrl, token, setShowLogin, loadCreditsData } =
    useContext(AppContext);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success("Credit Added");
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) return setShowLogin(true);
      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) initPay(data.order);
    } catch (error) {
      toast.error("Something went wrong in payment!");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="px-4 py-6 sm:px-10"
    >
      <div
        className={`w-full max-w-6xl mx-auto p-6 sm:p-10 border rounded-3xl shadow-xl backdrop-blur-md transition-all duration-700 ease-in-out 
          ${
            darkMode
              ? "bg-gray-900/60 border-gray-700"
              : "bg-white/60 border-gray-200"
          }`}
      >
        <div className="text-center mb-10">
          <button
            className={`px-10 py-2 rounded-full mb-4 transition-all duration-300
    ${
      darkMode
        ? "bg-gray-800 border border-gray-600 text-white hover:bg-gray-700"
        : "bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 border border-gray-300 text-gray-800 hover:from-indigo-300 hover:to-pink-300"
    }
  `}
          >
            Our Plans
          </button>

          <h1
            className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-blue-700"
            }`}
          >
            Choose the Plan That Works for You
          </h1>
          <p
            className={`max-w-2xl mx-auto text-sm sm:text-base ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Pick a credit pack and start generating amazing AI visuals
            instantly.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 w-72 sm:w-80 shadow-md transition-all duration-500 hover:scale-[1.03]
                ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "bg-gradient-to-br from-indigo-100 via-white to-pink-100 border-gray-200 text-gray-800"
                }`}
            >
              <p className="font-semibold text-lg mb-2">{item.id}</p>
              <p className="text-sm mb-6">{item.desc}</p>
              <p className="text-xl font-bold mb-6">
                ${item.price}{" "}
                <span className="text-sm font-normal">
                  / {item.credits} credits
                </span>
              </p>
              <button
                onClick={() => paymentRazorpay(item.id)}
                className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition"
              >
                {user ? "Purchase" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BuyCredit;
