const http=require("http");
const fs = require('fs/promises');

// const users=[{
//     id:1,name:'MAHIMA SHARMA',email:'mahimagzb2003@gmail.com'},{id:2,name:'Raj',email:'raj@example.com'},{id:3,name:'KUNIKA',email:'Kunika@gmail.com'

//     }];

const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    const data=await fs.readFile("./aa.json","utf8");
    const jsdata=JSON.parse(data);

    // const usersdata=users.map((user)=>{
    //     return user.name
    // })
    // let usersdata=""
    // users.map((user)=>{
    //     usersdata+=user.name
    // })
    
    res.end(JSON.stringify(jsdata));
});
port=3000;
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});