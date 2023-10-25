require("dotenv").config();
const express = require("express");
const app = express();
const mongoose =  require("mongoose");
const Houses = require("./routes/house");


 
mongoose.connect(process.env.DATABASE_URL ,{useNewUrlParser:true})
const DB = mongoose.connection;
DB.on("error", (error)=>console.error(error));
DB.once("open", ()=>console.log("Connected to Database"));


app.use(express.json());
app.use(Houses);
 
app.listen(4000, ()=>{
    console.log("KIOSOS server IS Running");
})