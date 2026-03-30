const express = require("express");
const app = express();
const PORT = 30000; 

app.use(express.json());

app.listen(PORT, ()=>{
    console.log("server on", PORT)
})