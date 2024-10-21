const express = require("express");
const app = express();
// const {userAuth}=require("./middleware/user");

// app.use("/user",userAuth)

app.get("/getUserData",(req,res)=>{
  throw new Error("Somethfaawsfgsa");
  res.send("User Data Sent");
  })
  



  app.use("/",(err,req,res,next)=>{
    if(err){
      res.send("Something Went Wrong");
    }
    });

  

app.listen(3000, () => console.log("listening on port 3000"));

