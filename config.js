import dotenv from "dotenv";
dotenv.config();
export default {
  MONGODB_URL: process.env.DB_CONNECTION,
  ENV: process.env.ENV,
  SLACKURL: process.env.WEBHOOKURL,
};
