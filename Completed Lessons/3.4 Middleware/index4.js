import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import morgan from "morgan";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send("<h1>Band Created!!!</h1> <h2>Band Name: " + req.body.street + req.body.pet + " </h2>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
