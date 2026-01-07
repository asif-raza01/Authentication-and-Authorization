const express=require('express')

const route=express.Router();

const ideas_controller=require('../controllers/ideas.controller.js')


route.get("/ideas",ideas_controller.getAllIdeas);

route.get("/ideas/:id",ideas_controller.getIdeaBasedOnId);

route.post("/ideas",ideas_controller.createIdea);
route.put("/ideas/:id",ideas_controller.updateIdea);
route.delete("/ideas/:id",ideas_controller.deleteIdea)

module.exports=route;