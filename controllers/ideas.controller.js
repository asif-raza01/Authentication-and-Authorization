const ideasModel = require('../models/ideas.model.js');
const ideas=require('../models/ideas.model.js');

let id=3;// initally the last id number so to auto incremet 


exports.getAllIdeas=(req,res)=>{
    res.status(200).send(ideas)
}


exports.getIdeaBasedOnId=(req,res)=>{
    const idea_id=req.params.id;

    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }else{
        console.log(`Idea with id ${idea_id} does not exist`)
        res.status(404).send({message:`Idea with id ${idea_id} does not exist`});
    }
}

exports.createIdea=(req,res)=>{
    id++;
    idea_object=req.body;
    console.log(idea_object)
    idea_object["id"]=id;
    ideas[id]=idea_object;
    res.status(201).send(idea_object);
}

exports.updateIdea=(req,res)=>{
    const idea_id=req.params.id;
    if(ideas[idea_id]){
        const idea_object=req.body;
        ideas[idea_id]=idea_object;
        res.status(200).send(ideas[idea_id])
    }else{
        res.status(404).send({message:"Id is not present"})
    }
}

exports.deleteIdea=(req,res)=>{
    const idea_id=req.params.id;
    if(ideas[idea_id]){
        delete ideas[idea_id];
        res.status(200).send({message:"Id has been deleted"})
    }else{
        res.status(404).send({message:"Id is not present"})
    }

}





