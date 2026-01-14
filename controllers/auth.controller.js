const userModel=require("../models/users.model.js")
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const config=require("../config/auth.config")

exports.signUp=async(req,res)=>{
    const userObj={
        name:req.body.name,
        userId:req.body.userId,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,8)
    }

    try {
        const userCreated=await userModel.create(userObj);
        const postResponse={
            name:userCreated.name,
            userId:userCreated.userId,
            email:userCreated.email,
            createdAt:userCreated.createdAt,
            updatedAt:userCreated.updatedAt,
            message:"Registration successful!"
        };
        res.status(201).send(postResponse)
    } catch (err) {
        console.log("Some error while saving the user in DB",err.message);
        res.status(500).send({
            message:"some internal error"
        })
    }
}

//login for sign in

exports.signIn=async(req,res)=>{
    const user=await userModel.findOne({userId:req.body.userId});
    if(!user){
        res.status(400).send({
            message:"User does not exists"
        })
        return;
    }
    console.log(user)

    const passwordIsValid=bcrypt.compareSync(req.body.password,user.password);
    if(!passwordIsValid){
        res.status(400).send({
            message:"Pass is not matching Try again!!"
        })
        return;
    }
    const token=jwt.sign({id:user.userId},config.secret,{
        expiresIn:60
    })
    res.status(200).send({
        name:user.name,
        userId:user.userId,
        email:user.email,
        accessToken:token
    })


}