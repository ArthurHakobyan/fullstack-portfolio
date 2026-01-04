const express = require("express");

const app = express();

app.use(express.json());

app.get("/",(req, res)=>{
  res.json({ message: "API is working" });
});

app.get("/health", (req, res) =>{
  res.json({status: "OK"})
})

app.listen(3000, ()=> {
  console.log("Server running on http://localhost:3000");
});

// Test commit: checking GitHub token authentication

app.post("/projects", (req,res)=>{
  const {title, description} = req.body;

  if(!title || !description) {
    return res.status(400).json({error: "Title and description are required"})
  }

  return res.status(201).json({message: "Project created successfully",
    project: {title, description}
  })
})
