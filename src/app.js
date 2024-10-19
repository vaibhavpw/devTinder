const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/user", (req, res) => {
    res.send({firstname:"Vaibhav",lastName:"Wadhavane"});
  });

  app.post("/user",(req,res)=>{
    res.send("Data saved to the database successfully")
  })

app.listen(3000, () => console.log("listening on port 3000"));

