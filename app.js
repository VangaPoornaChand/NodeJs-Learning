const express = require("express");
const app = express();
const PORT = 6969



app.get("/", (req,res) => {
    
    res.send("Welcome to first Application....");
})

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`))
