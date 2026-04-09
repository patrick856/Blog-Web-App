import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hiii");
});

app.get("/contact", (req, res) => {
  res.send("call me: +201281743147");
});

app.get("/about", (req, res) => {
  res.send("i am patrick");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

