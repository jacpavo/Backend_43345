import express from "express";
import dotenv from "dotenv";
import { addLogger } from "./logger.config.js";
dotenv.config();

const app = express();
app.use(addLogger);

app.get("/", (req, res) => {
  req.logger.warn("alerta");
  req.logger.silly('hola')
  res.send({ message: "prueba de logger" });
});

app.use(express.json());

app.listen(8080, () => {
  console.log("servidor levantado");
});