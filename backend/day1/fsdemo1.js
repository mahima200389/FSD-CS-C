const fs=require("node:fs");
function myReadFile(){
const res=fs.readFileSync('dummy.txt','utf-8');
console.log(res);
}
function myWriteFile(){
    const data="Hello how are you?"
    fs.writeFileSync("dummy.txt",data);
}
function myAppendFile(data){
    fs.appendFileSync('dummy.txt',data);
}
module.exports={
    myReadFile,
    myWriteFile,
    myAppendFile,
}