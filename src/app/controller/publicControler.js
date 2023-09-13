import {} from 'dotenv/config'
import jwt from "jsonwebtoken";
import { create, getById, getAllUsers } from "./repository/userRepository.js";

const  JWT_SECRET = process.env.JWT_SECRET

let result = {};
let payload = {};

// rota publica
export const index = (req, res) => {
  return res.json({ message: 'index ok' });
};
// rota de criação de usuario com token jwt
export const signIn = (req, res) => {
   payload = req.body;

  create(payload);

  return res.json(token);
};

// rota login com token 
export const signUp = (req, res) => {
  payload = req.body;
  const token = jwt.sign(payload, JWT_SECRET,{expiresIn:10});
  result = getById(payload);
  if(result.length) {
    return res.json({token});
  } else {
    return res.status(404).send('senha ou email invalido');
  };
};

// rota listar usuarios
export const getAll = (req, res) => {
  getAllUsers();
};






