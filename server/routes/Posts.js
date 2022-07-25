const express = require('express');
const router = express.Router();

//destructing posts to extract properties from objects and bind them to variables
const { Posts } = require("../models");

//write requests
router.get("/", async (req, res) => { //req for request, res for response
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
})

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id
    //rerturns posts based on id in the database
    const post = await Posts.findByPk(id)
    res.json(post)
})

//async because we want the data to be inserted before moving forward with request
router.post("/", async (req, res) => {
    //all data sending in request
    const post = req.body; //body is stuff in post, req would need to be defined
    //sequalize has function called create
    await Posts.create(post);
    res.json(post);
})

//export so usable by index.js
module.exports = router;