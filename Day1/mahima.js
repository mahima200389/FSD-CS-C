// ava scripjt is by default synchronous
function aa(){
    console.log("first");
};
aa();
(function(){
console.log("second");})();
()=>{
    console.log("third");//this is afunction expression
}
// let a =new function(`console.log("dcdsdc");`);
//  function rollnumber(num){
//     console.log("Rollno.",num);};
//  setTimeout(rollnumber,3000,1011)
//  setTimeout(rollnumber,1000,1012)
//  setTimeout(rollnumber,2000,1013)})}


 function rollnumber(num,delay,nextroll){
    setTimeout(()=>{
        console.log("Rollno.",num);
        if(nextroll)nextroll();
    },delay)
};
rollnumber(11,1000,()=>{
    rollnumber(22,3000,() =>{
        rollnumber(33,4000);
    });
});

    