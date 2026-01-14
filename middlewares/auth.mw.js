const config=require("../config/auth.config")
const jwt=require("jsonwebtoken")
const verifyToken=(req,res,next)=>{
    //verification
    //fetch the access tpken from header
    const token=req.headers["x-access-token"];

    if(!token){
        res.status(403).send({
            message:"No Token Provided"
        });
    }
    jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            res.status(403).send({
                message:"Unauthorized!"
            })
        };
        next();
    })
}

module.exports={verifyToken:verifyToken};