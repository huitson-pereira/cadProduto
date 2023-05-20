const http = require("http");
const fs = require("fs");

function listarProdutos(){
    try{
        const dadosProd = JSON.parse(fs.readFileSync("dados.json", "utf-8"))
        return JSON.stringify(dadosProd.produtos)
    }catch(e){
        return "Erro ao executar"
    }
}

function cadastrarProduto(newProd){
    try{
        const dadosAtualizados = JSON.parse(fs.readFileSync("dados.json", utf-8))
        dadosAtualizados.produtos.push(JSON.parse(newProd))
        fs.writeFileSync("dados.json",JSON.stringify(dadosAtualizados))
        return "Produto cadastrado com sucesso"
    }catch{
        return "Erro ao cadastrar Produto"
    }
}

const servidor = http.createServer((req, res) => {
    if (req.url == "/produtos") {
        switch (req.method) {
            case "GET":
                const produtos = listarProdutos();
                res.writeHead(200, {"Context-Type": "application/json; charset: utf-8;"});
                res.end(produtos);
                break;
        
            case "POST":
                let newProd = "";
                req.on("data", (chunk)=>{
                    newProd += chunk
                })

                req.on("end", ()=>{
                    res.writeHead(200, {"Content-Type": "text/plain; charset:utf-8;"});
                    res.write("Produto cadastrado com sucesso");
                    res.end(cadastrarProduto(newProd));
                })

                break;
        }
    }else {
        res.writeHead(200, {"Content-Type": "text/plain; charset: utf-8;"});
        res.end("O endpoint padrão é '/produtos'")
    }
})

servidor.listen(3000);
