import { config } from "dotenv";

import app from "./app.js";
import sequelize from "./infrastructure/database/config/database.js";

// Para crear las tablas la primera vez
//import "./models/index.js";

config();

const PORT = process.env.PORT || 4000;

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("Se estableció la conexion con la base de datos");
    app.listen(PORT);
    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.log("Error: " + error);
  }
}

main();
