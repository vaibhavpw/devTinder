const express = require("express");
const app = express();

app.get("/user", (req, res,next) => {
   console.log("first route handler")
   next();
    // res.send({firstname:"Vaibhav",lastName:"Wadhavane"});
  },
  (req, res,next) => {
    console.log("Second route handler")
     res.send("Second route handler");
     next();
   },
   (req, res,next) => {
    console.log("Third route handler")
     res.send("Third route handler");
   },
);

  

app.listen(3000, () => console.log("listening on port 3000"));

