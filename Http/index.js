const http = require("http");

const HOST = "localhost";
const PORT = 3200;

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.write("<h1>This is / (Home) page</h1>")
        res.end();
    }
    else if(req.url == "/contact"){
        res.write("<h1>This is contact page</h1>")
        res.end();
    }
    else if(req.url == "/about-us"){
        res.write("<h1>This is about-us page</h1>")
        res.end();
    }else{
        res.write("<h1>404 Not found!</h1>")
        res.end();
    }
});

server.listen(PORT, ()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
