// import { randomInt } from "crypto";

export const randomBase16 = (length) => random("0123456789abcdef", length);

const random = (chars, length) => {
  const n = chars.length;
  let str = "";
  for (let i = 0; i < length; ++i) str += chars[Math.floor(Math.random() * n)];

  return str;
};
