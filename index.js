import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import empRouter from "./Routers/empRoute.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const port = 4000 || process.env.PORT

app.use("/api",empRouter)

app.get("/", (req, res) => {
  res.status(200).send("Welcome to our App");
});

app.listen(port, () => {
  console.log("App is running in the port",port);
});
