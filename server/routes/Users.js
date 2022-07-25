const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")

//destructing users to extract properties from objects and bind them to variables
const { Users } = require("../models");

//async because we want the data to be inserted before moving forward with request
router.post("/", async (req, res) => {
    const {username, password} = req.body
    //use bcrypt to hash and encrypt passwords
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        })
        res.json("SUCCESS")
    })
})

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    //username has to match username
    const user = await Users.findOne({ where: {username : username}})

    if(!user){
        res.json({error: "User does not exist"})
    } else{
    //match stores result of comparison
    bcrypt.compare(password, user.password).then((match) => {
        if(!match){
            res.json ({error: "Wrong Username and Password Combination"})
        }
        else{
            res.json("Logged in!")
        }
    })
}
})
//export so usable by index.js
module.exports = router;