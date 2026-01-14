const express=require('express')
const route=express.Router();
const authController=require("../controllers/auth.controller")
const verify_user=require("../middlewares/verifyUserBody")

route.post("/auth/signup",verify_user,authController.signUp);
route.post("/auth/signin",authController.signIn);

module.exports=route;