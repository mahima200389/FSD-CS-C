const http=require('http');
const axios=require('axios');
const port=3000;
const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{"content-type" : "text/html"});
    //    res.writeHead(200,{"content-type" : "application/json"})
    // const response= await fetch("https://dummyjson.com/products");
    // const data=await response.text();

    const response= await axios.get("https://dummyjson.com/products");
    const data=response.data.products; 
    let frontenddata=`<html><head></head><body>`;
    data.forEach((i)=>{
        frontenddata+=`<div><img src="${i.thumbnail}"></div>`
        });
        frontenddata+=`</body></html>`;                                                                //products is used for directly accessing array fopr iteration//
    res.end(frontenddata);
    });
server.listen(port,()=>{
    console.log(`Server is running on port no.${port}`)
});