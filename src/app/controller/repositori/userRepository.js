import fs from 'fs'
import { randomUUID } from "crypto";

export function create(payload, token) {
  let allUsers = [];
  allUsers = JSON.parse(fs.readFileSync('src/fakeDB/fakebd.json',{ encoding: 'utf-8'}) || "[]");
  payload = ({
    ...payload,
    token:token,
    id: randomUUID()
  });
  allUsers.push(payload);
  fs.writeFileSync('src/fakeDB/fakebd.json', JSON.stringify(allUsers), () => { });

  return token
};