import express from "express";
import {Request, Response} from "express";

const app = express();
console.clear();

app.get("/", (request: Request, response: Response) => {
    response.send("Alô mundo!");
});
app.listen(3000, () => {
    console.log("O servidor está ok");
});