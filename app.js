import express from 'express';

const router = express.Router();

router.get("/",(req,res)=>{
    console.log("Express Routings");
    res.send("hello express routing");
});

router.get("/hello",(req,res)=>{
    console.log("The /hello router");
    res.send("Hello /hello Router");
})

export default router;