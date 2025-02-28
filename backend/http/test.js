const http = require('http');
const fspromises = require('fs/promises');
const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url == '/about') {
    res.end("./aa.json");
  }
  else if (req.url == '/home') {
    const a = await fspromises.readFile("./home.html","utf8");
    res.end(a)
  }
  else {
    res.end("<h1 style='color:red'>Error..No, Data Associated with /msg</h1>");
  }
})
port=3000;
server.listen(port, () => {
  console.log(`Server running on,${port}`);
})