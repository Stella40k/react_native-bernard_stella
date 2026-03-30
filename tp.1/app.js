import express from "express";
import cors from "cors";
import items from "./routes/items.toute.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/items", items);

app.listen(PORT, ()=>{
    console.log("server corriendo", PORT);
})