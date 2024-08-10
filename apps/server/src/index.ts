import express from "express";
import { PORT } from "./lib/constants";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
