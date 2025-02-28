const http=require('http');
const axios=require('axios');
const port=3000;
const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{"content-type" : "text/html"});
    const response= await axios.get("https://api.github.com/users",{
        params:{
            q:"location:delhi"
        }
    });
    const data=response.data;

    let frontenddata=`<html><head></head><body>`;
    data.forEach((i)=>{
        frontenddata+=`<div><img src="${i.avatar_url}"></div>`
        });
        frontenddata+=`</body></html>`;                                                                //products is used for directly accessing array fopr iteration//
    res.end(frontenddata);
    });
server.listen(port,()=>{
    console.log(`Server is running on port no.${port}`)
});