import { randomUUID } from "crypto";
import { jsonParse, jsonStringfy } from './utils/fakebdextract.js';

let allUsers = [];
let filtered = [];

export function create(payload) {
  allUsers = jsonParse();
  payload = ({
    ...payload,
    id: randomUUID()
  });
  allUsers.push(payload);
  jsonStringfy(allUsers);

  return token
};

export function getById({ email, senha }) {
  allUsers = jsonParse();
  filtered = allUsers.filter((item) => item.email === email && item.senha === senha);
  return filtered
};

export function getAllUsers() {
  console.log('rota get all');
}