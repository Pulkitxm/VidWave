import express from "express";
import routes from "./routes";
import { CLIENT_URL, PORT } from "./lib/constants";
import cors from "cors";

const app = express();

app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));

app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
