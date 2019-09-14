console.log("hi world!")

 //const express = require('express') 
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//import {userRouter} from "./Routers/userRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express()

//init.js 설정후 삭제 const PORT = 4000;
//init.js 설정후 삭제 const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
/*
function handleListening(){
    console.log(`Listening on: http://localhost:${4000}`);
}

function handleHome(req, res){
    console.log(req);
    res.send("Hello from home");
}
function handleProfile(req, res){
    res.send("You are on my profile");
}

// const handleHome = (req, res) => res.send("Hello from home good");
// const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("Between")
    next();
}*/

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));



//const middleware = (req, res, next) => {res.send("not happening")};
// app.get("/", handleHome);
// app.get("/profile", handleProfile);
// app.use("/user", userRouter);
 

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);




//init.js 설정후 삭제 app.listen(PORT, handleListening);

export default app;