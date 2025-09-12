import express from "express";
import userRouter from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
import { sendMail } from "#utils/mail.js";
import cron from "node-cron";
import { getRandomQuote } from "#services/quoteService.js";
import { getAllUsers } from "#services/userService.js";
import { chunkArray, isUserPreferredTime } from "#utils/helper.js";

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
   const allUsers = await getAllUsers()
   const usersToSend = allUsers.filter((user) => isUserPreferredTime(user))
   console.log(usersToSend)
   //send to all preferred user
  const chunks = chunkArray(usersToSend,50)

  for(const batch of chunks){

    await Promise.all(batch.map(mail => sendMail(mail,quote)))

    // optional use sleep
    // add indexes / nextSendTime approach
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