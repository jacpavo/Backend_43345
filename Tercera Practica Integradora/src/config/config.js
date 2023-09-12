import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT,
  ENVIRONMENT: process.env.ENVIRONMENT,
  MONGO_URL_PROD: process.env.MONGO_URL_PROD,
  MONGO_URL_DEV: process.env.MONGO_URL_DEV,
  GMAIL_USER_AUTH: process.env.GMAIL_USER_AUTH,
  GMAIL_PASS_AUTH: process.env.GMAIL_PASS_AUTH,
};