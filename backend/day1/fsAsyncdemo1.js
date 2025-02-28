const fspromises=require("fs/promises");
// const cb=(err,data)=>{
//     if(err)
//         throw err;
//     else
//     console.log(data);

// }
const myReadFile=()=>{
    fspromises.readFile('dummy.txt','utf-8',cb);

}
module.exports=myReadFile();
// console.log("start");
// myReadFile();
// console.log("End");