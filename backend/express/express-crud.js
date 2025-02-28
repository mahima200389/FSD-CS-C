import express from "express";
const users=[{
    id:1,
    name:"Mahima",
    age:21
}]
const app =express();
const port=3000;
app.use(express.json());
app.get('/',(req,res)=>{res.send("HELLO CS_C");    
});

app.get('/users',(req,res)=>{
    res.send(users);

});

//this api is for getting the details of the user withthe specified id given like id=5//
app.get('/users/:id',(req,res)=>{
    const{id}=req.params;
    const user=users.find(user=>user.id==id);
    res.send(user);
});

//patching new name for particular id//
app.patch('/users/:id',(req,res)=>{
    const{id}=req.params;
    const{name}=req.body;
    const index=users.findIndex(user=>user.id==id);
    users[index].name=name;
    res.send(users);
});
app.delete('/users/:id',(req,res)=>{
    const{id}=req.params;
    const index =users.findIndex(user =>user.id==id);
    users.splice(index,1);
    res.send("User is Deleted Succesfully");
})

app.post('/users',(req,res)=>{
    const {name,age} = req.body;
    const newID=users.length>0? users[users.length-1].id+1 : 1;

    users.push({id: newID,name,age});
    res.send("new user created successfully");
})

// app.use(express.text());

app.post('/',(req,res)=>
{
    const data=req.body;
    console.log(data);
    res.send("data added succesfully");

});

app.listen(port,()=>{console.log(`Server is running at the ${port}`);
});
