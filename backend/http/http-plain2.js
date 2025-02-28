const http=require("http");
const fs=require('fs/promises');
const server=http.createServer(async (req,res)=>{
    console.log(req.url);
    // res.statusCode=200;
    // res.setHeader('Content-Type','text/plain');
    // res.end("hello,world!");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>HELLO, WORLD!!</h1>");
    const data= await fs.readFile("./home.html","utf8");
    res.end(data);

});
port=3000;
server.listen(port,()=>{
    // const a=server.address();
    console.log(`server is listening on port ${port}`);
});