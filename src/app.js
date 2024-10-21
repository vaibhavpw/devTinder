const express = require("express");
const app = express();
const {userAuth}=require("./middleware/user");

app.use("/admin",(req,res,next)=>{
  const token="xyzz";
  const isAdminAuthorised=token==="xyz";
  if(!isAdminAuthorised){
    res.status(404).send("Unauthorized Request");
  }else{
    next();
  }
});

app.use("/user",userAuth)

app.use("/user/getUserData",(req,res)=>{
res.send("User Data Sent")
})

app.get("/admin/getAllData",(req,res)=>{
res.send("All data sent")
});

  

app.listen(3000, () => console.log("listening on port 3000"));

