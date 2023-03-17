import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const db = process.env.DEV_DATABASE;
const host = process.env.DEV_HOST;
const user = process.env.DEV_USER;
const pass = process.env.DEV_PASS;

const sequelize = new Sequelize(db, user, pass, {
  host,
  dialect: "mysql",
});

export default sequelize;
