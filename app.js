console.log("hi world!")

 /* 아래 두문장은 동일한 결과
   const express = require('express') 
   import express from "express";  */

/* 아래 두문장은 동일한 결과
   import {userRouter} from "./Routers/userRouter";
   import userRouter from "./routers/userRouter";*/

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import {localsMiddleware } from "./middlewares";
const app = express()

/* 아래 두함수는 동일한  함수
function handleHome(req, res){
    console.log(req);
    res.send("Hello from home");
}
const handleHome = (req, res) => res.send("Hello from home good");*/

/* 아래 두함수는 동일한  함수
function handleProfile(req, res){
    res.send("You are on my profile");
}
// const handleProfile = (req, res) => res.send("You are on my profile");*/


app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(localsMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;