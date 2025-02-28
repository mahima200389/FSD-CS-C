// const express=require ("express");  we will not use this method as this is common js method//
//get is used to take data  to the url get is a request
import express from "express";
const app=express();
app.get('/',(req,res)=>{
    res.send("WELCOME TO THE CS BRANCH");

});


// http://localhost:3000/api/?name=mahima&rollno=21
//by default values are given as raj and 323
// http://localhost:3000/api
//        app.get('/api',(req,res)=>{
//     // const {name = "raj",rollno = "323" }=req.query;
//        const {name,rollno}=req.query;
//        res.send(`MY NAME IS ${name} and rollno is ${rollno}`);

// });


app.get('/api',(req,res)=>{
    try
    {
    const{name,rollno}=req.query;
    if(!name){
         // res.send({status: 404,message:"Name Dena Hai"});
            res.status(404).send("Name Dena hai");
        }
        res.send(`My name is ${name} and rollno is ${rollno}`);

        }
        catch(error)
        {
            console.log("ERROR IS:"+error.message);
        }
});
app.get('/api1/:name/:rollno',(req,res)=>{
    const{ name}=req.params;
    res.send(`My name is ${name}`);
    

});
const port=3000;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});

