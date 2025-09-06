// index.ts
import express from "express";
import userRouter from "./routes/userRoute.js"
// import { middleware } from "#middlewares/middlewares.js";

const app = express();
const port = process.env.PORT ?? "9001";

// app.get("/", middleware);

//userRoutes
app.post("/api/v1/user",userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});