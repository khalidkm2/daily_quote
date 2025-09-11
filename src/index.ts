import express from "express";
import userRouter from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
import { sendMail } from "#utils/mail.js";
import cron from "node-cron";
import { getRandomQuote } from "#services/quoteService.js";
import { getAllUsersMail } from "#services/userService.js";
import { chunkArray } from "#utils/helper.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const port = process.env.PORT ?? "9001";

// running every minute
cron.schedule("* * * * *",async function(){
try {
   //get quote
   let quote = await getRandomQuote();
   if(!quote){
     quote = {
      id:999,
      author:"khalid",
      text:"all is well"
     }
   }
  
   // get users
   const emails = await getAllUsersMail();
   
   //send to all user
  const chunks = chunkArray(emails,50)

  for(const batch of chunks){

    await Promise.all(batch.map(mail => sendMail(mail,quote)))

    // optional use sleep
  }

} catch (error) {
  console.log(error)
}
})

//userRoutes
app.use("/api/v1",userRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});