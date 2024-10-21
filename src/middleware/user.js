const userAuth=(req,res)=>{
    console.log("Checking User Authentication")
     const token="abc";
     const isAuthorized=token==="abc";
     if(isAuthorized){
      res.send("User Data sent")
     }else{
      res.send("Not A Authorized user")
     }
  }
module.exports={
    userAuth,
}