const{clearScreenDemo}=require('readline') 
const{myReadFile,myWriteFile,myAppendFile}=require('./fsdemo1')
require('./fsdemo1.js')
const data='my json file data';
myReadFile();
myWriteFile(data);
myReadFile();
const data1='\tmyusername and password is admin';
myAppendFile(data1);
myReadFile();
console.log(username);
