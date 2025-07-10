import Newsletter from "../models/newsletterModel.js";

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.json({ success: false, message: "Invalid email" });
    }

    const exists = await Newsletter.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Already subscribed" });
    }

    await Newsletter.create({ email });
    res.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
