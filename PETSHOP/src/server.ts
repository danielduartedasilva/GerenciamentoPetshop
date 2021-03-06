import express from "express";
import cors from "cors";
import { router } from "./config/routes";
import { mongoose } from "./config/database";

console.clear();
const app = express();
const database = mongoose;

app.use(cors());
app.use(express.json()); //para dizer que a aplicação vai receber dados em json
app.use(router);

app.listen(3000, () => {
  console.log("O servidor está ok");
});
