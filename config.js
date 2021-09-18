import dotenv from "dotenv";
dotenv.config();
export default {
  MONGODB_URL: process.env.DB_CONNECTION,
};
