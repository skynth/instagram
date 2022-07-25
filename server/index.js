//starting an api
//The primary use of Express is to provide server-side logic for web and mobile applications
//one layer above Node js that helps manage servers and routes
const express = require('express');
const app = express();
const cors = require('cors')

//can parse json
app.use(express.json());
//whitelist own API so can make api request from my computer to react app runnig on my computer
app.use(cors())


//tables using sequelize, it will get code in models and use
//import posts model
const db = require('./models')

//routers: ex:instagram.com/posts
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter);
const commentsRouter = require('./routes/Comments')
app.use("/comments", commentsRouter);
const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter);

//When we start our api, we wont to go over every table in models folder and create table if they dont exist
db.sequelize.sync().then(() => {

    //Web server ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client. 
    //This is the entrypoint of our api
    app.listen(3001, () => { //pick port to run server in (doesnt really matter just cant be same as one initized by application)
    console.log("Server running on port 3001"); //localhost:3001
    });
})






