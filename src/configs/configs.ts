import * as dotenv from "dotenv";

dotenv.config();

const { BASE_URL, USERNAME, PASSWORD } = process.env;

const configs = {
  BASE_URL,
  USERNAME,
  PASSWORD,
};

export default configs;
