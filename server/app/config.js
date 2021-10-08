import dotenv from "dotenv";

dotenv.config();

export default {
  // TODO: Add additional configs 🔧 here.
  db: {
    url: process.env.DB_CLIENT_URL, // TODO: Add default value for local development.
  },
  jwt: {
    expirationTime: process.env.JWT_EXPIRATION || "1d",
    secret: process.env.JWT_SECRET,
  },
  saltRounds: 10,
};
