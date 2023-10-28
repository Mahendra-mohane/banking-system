// src/index.ts

import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import apiRouter from "./routes/api";

const app: Application = express();

app.use(bodyParser.json());
app.use("/api", apiRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Banking System API!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
