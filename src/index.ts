import express from "express";
import userRouter from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const port = process.env.PORT ?? "9001";


//userRoutes
app.use("/api/v1",userRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});