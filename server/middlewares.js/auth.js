import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, message: "Access denied. Login Again." });
    }

    const token = authHeader.split(" ")[1]; // Extract the token after 'Bearer '

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("🔐 token:", token);
    console.log("🔓 decoded token ID:", tokenDecode.id);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized. Login Again." });
    }
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
};

export default userAuth;
