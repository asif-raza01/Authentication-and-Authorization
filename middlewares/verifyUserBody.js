const usersModel = require("../models/users.model");

verifyUser= async(req,res,next)=>{
    //verify code
    //name
    if(!req.body.name){
        res.status(400).send({
            message:"Failed! Username not provided"
        })
        return;
    }
    //userId
    if(!req.body.userId){
        res.status(400).send({
            message:"Failed! UserId not provided"
        })
        return;
    }
    //userId validation
    const alreadyExist=await usersModel.findOne({userId:req.body.userId});
    if(alreadyExist){
        res.status(400).send({
            message:"User already Exists"
        })
    }
    //email
    if(!req.body.email){
        res.status(400).send({
            message:"Failed! email not provided"
        })
        return;
    }
    //email id validation
    const emailExist=await usersModel.findOne({email:req.body.email});
    if(emailExist){
        res.status(400).send({
            messsage:"Email already Exist"
        })
    }

    next();
};

module.exports=verifyUser;