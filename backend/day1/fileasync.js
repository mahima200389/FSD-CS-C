const { error } = require("console");

const fspromises=require("fs").promises;

const read= async()=>{
//     const data= await fspromises.readFile("./data.txt","utf8");
//     console.log(data);
// }
try{
    const data=await fspromises.readFile()("./data.txt","utf8");
console.log(data);}
catch(error){
    console.log(error.message);

}}
read();
console.log("first");
const write= async()=>{
    try{
        const newdata="this is my new work"
        await fspromises.writeFile()("./data2.txt",newdata,"utf8");
    console.log(data);}
    catch(error){
        console.log(error.message);
    
    }}
    write();
    console.log("first");
