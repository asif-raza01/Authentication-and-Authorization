const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();


(async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGODB connection successful");
    }catch(err){
        console.log("Error while connecting",err);
    }//finally{

    // }
})();

const app=express();
app.use(express.json());



const ideaRoute=require('./routes/ideas.route.js');
const port=3000;
app.use("/ideas_app/v1",ideaRoute);
const authRoute=require("./routes/auth.route.js");
app.use("/ideas_app/v1",authRoute);
app.listen(port,()=>{
    console.log(`server is listening at port number:${port}`);
})