import userModel from "../models/userModel.js";
import axios from "axios";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  console.log("🔐 userId from token:", req.userId);
  console.log("🧠 prompt:", req.body.prompt);
  console.log("🔑 ClipDrop API Key Present:", !!process.env.CLIPDROP_API);

  try {
    const userId = req.userId;
    const { prompt } = req.body;

    if (!userId || !prompt) {
      return res.status(400).json({ success: false, message: "Missing Details" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found Please login first" });
    }

    if (user.creditBalance <= 0) {
      return res.status(402).json({ success: false, message: "No Credit Balance" });
    }

    // 🔧 Prepare form data
    const form = new FormData();
    form.append("prompt", prompt);
    

    // 📡 Call ClipDrop API
    const response = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      form,
      {
        headers: {
          ...form.getHeaders(),
          Accept: "image/*",
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer", 
      }
    );

    // 🖼️ Convert image to base64
    const base64Image = Buffer.from(response.data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    // 🧾 Deduct 1 credit
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    // ✅ Send success response
    res.json({
      success: true,
      message: "Image generated",
      resultImage,
      creditBalance: user.creditBalance - 1,
    });
  } catch (error) {
    const raw = error?.response?.data;
    const status = error?.response?.status || 500;
    const decoded = raw ? Buffer.from(raw).toString("utf-8") : "";
    const parsed = decoded ? JSON.parse(decoded) : {};

    console.error("❌ ClipDrop Error:", {
      status,
      message: parsed.message || parsed.error || decoded,
    });

    res.status(status).json({
      success: false,
      status,
      message: parsed.message || parsed.error || decoded || "Unknown error",
    });
  }
};
