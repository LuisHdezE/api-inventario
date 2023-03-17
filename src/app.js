import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import url from "url";
import morgan from "morgan";

//import userRoutes from "./interfaces/routes/user.routes.js";
import categoryRoutes from "./application/routes/category.routes.js";
//import conceptRoutes from "./interfaces/routes/concept.routes.js";
//import configRoutes from "./interfaces/routes/config.routes.js";

// import routes from "./routes/index.routes.js";
//import router from "./routes/index.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//set more security to request
app.use(helmet());

//Allow cors
app.use(cors());

//set module for helped request information
app.use(morgan("combined"));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use(categoryRoutes);
/*app.use(conceptRoutes);
app.use(configRoutes);
app.use(userRoutes);*/
export default app;
