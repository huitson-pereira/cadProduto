const http = require("http");
const fs = require("fs");

const servidor = http.createServer((req, res) => {
    if (req.url == "/produtos") {
        switch (req.method) {
            case "GET":
                
                break;
        
            case "POST":
                break;
        }
    }else {
        res.writeHead(200, {"Content-Type": "text/plain; charset: utf-8;"});
        res.end("O endpoint padrão é '/produtos'")
    }
})

servidor.listen(3000);
