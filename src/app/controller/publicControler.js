import {} from 'dotenv/config'
import jwt from "jsonwebtoken";
import { create } from "./repositori/userRepository.js";

const  JWT_SECRET = process.env.JWT_SECRET

export const index = (req, res) => {
  return res.json({ message: 'index ok' });
};
// rota de criação de usuario com token jwt
export const signIn = (req, res) => {
  let payload = req.body;
  const token = jwt.sign(payload, JWT_SECRET);

  create(payload, token);

  return res.json(token);
};





