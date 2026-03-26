import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";


const app = express();
const client = new PrismaClient();


app.get("/", (req, res)=>{
    const data = client.user.findMany();
    res.json({
        data,
    })
})


app.post("/",async (req, res)=>{
    const data = await client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    res.json({
        message: "post endpoint",
    })
})




app.listen(3000, ()=>{
    console.log("app started at port 3000");
})