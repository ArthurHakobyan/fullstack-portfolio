const express = require("express");

const app = express();

app.get("/",(req, res)=>{
  res.json({ message: "API is working" });
});

app.get("/health", (req, res) =>{
  res.json({status: "OK"})
})

app.listen(3000, ()=> {
  console.log("Server running on http://localhost:3000");
});
