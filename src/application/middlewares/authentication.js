import jwt from "jsonwebtoken";
import User from "../../domain/models/user.js";

import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET; // llave secreta para la firma del token JWT

// Middleware para verificar la validez del token JWT
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await User.findByPk(decoded.id);
      if (!user) {
        res.status(401).json({ error: "Invalid token" });
      } else {
        req.user = user;
        next();
      }
    } catch (err) {
      res.status(401).json({ error: "Invalid token" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

// Función para generar un token JWT
const generateToken = (user) => {
  const payload = { id: user.id, email: user.email };
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, JWT_SECRET, options);
};

export default { verifyToken, generateToken };
