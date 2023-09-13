import fs from 'fs';

export const jsonParse = () => {
   return JSON.parse(fs.readFileSync('src/fakeDB/fakebd.json',{ encoding: 'utf-8'}) || "[]");
};

export const jsonStringfy = (allUsers) => {
  fs.writeFileSync('src/fakeDB/fakebd.json', JSON.stringify(allUsers), () => { });
};