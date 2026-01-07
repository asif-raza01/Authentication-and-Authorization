const express=require('express');
const app=express();
app.use(express.json())

const ideaRoute=require('./routes/ideas.route.js')


const port=3000;
app.use("/ideas_app/v1",ideaRoute);


app.listen(port,()=>{
    console.log(`server is listening at port number:${port}`);
})