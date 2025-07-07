import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Razorpay from "razorpay";
import transactionModel from "../models/transactionModel.js";
import "dotenv/config";

// ✅ Razorpay Instance
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ REGISTER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    res.json({
      success: true,
      token,
      user: { name: newUser.name },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      success: true,
      token,
      user: { name: user.name },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ GET CREDITS (TOKEN PROTECTED)
export const userCredits = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      credits: user.creditBalance,
      user: { name: user.name },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ PAYMENT INITIATION (TOKEN PROTECTED)
export const paymentRazorpay = async (req, res) => {
  try {
    const { planId } = req.body;

    const userData = await userModel.findById(req.userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let credits, amount;
    switch (planId) {
      case "Basic Plan":
        credits = 100;
        amount = 10;
        break;
      case "Advanced Plan":
        credits = 500;
        amount = 50;
        break;
      case "Business Plan":
        credits = 5000;
        amount = 250;
        break;
      default:
        return res.json({ success: false, message: "Invalid plan" });
    }

    const transaction = await transactionModel.create({
      userId: req.userId,
      plan: planId,
      credits,
      amount,
      date: Date.now(),
    });

    const order = await razorpayInstance.orders.create({
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: transaction._id.toString(),
    });

    res.json({ success: true, order });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ VERIFY PAYMENT (TOKEN PROTECTED)
export const verifyRazorPay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    if (orderInfo.status !== "paid") {
      return res.json({ success: false, message: "Payment not completed" });
    }

    const transaction = await transactionModel.findById(orderInfo.receipt);
    if (!transaction || transaction.payment) {
      return res.json({
        success: false,
        message: "Invalid or already used transaction",
      });
    }

    const user = await userModel.findById(transaction.userId);
    const updatedCredits = user.creditBalance + transaction.credits;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: updatedCredits,
    });
    await transactionModel.findByIdAndUpdate(transaction._id, {
      payment: true,
    });

    res.json({ success: true, message: "Credits added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
