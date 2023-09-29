// Substitua com suas próprias chaves de API do Back4App
Parse.initialize("IFGYuqOF6XxkHvAB1kb8dSvG6u1WhKDRtF2oHBls", "NMv3pD5lMSQppXRfVepDHrj1oqxWjhEvEJgMJtk6"); 
  Parse.serverURL = "https://parseapi.back4app.com/";

const CarrinhoDeCompras = Parse.Object.extend("CarrinhoDeCompras");

function carregarProdutos() {
    const query = new Parse.Query(CarrinhoDeCompras);
    query.find().then((results) => {
        const produtoList = document.getElementById("produto-list");
        produtoList.innerHTML = "";
        results.forEach((produto) => {
            const idProduto = produto.get("idProduto");
            const quantidade = produto.get("quantidade");

            const listItem = document.createElement("li");
            listItem.textContent = `${idProduto} (Quantidade: ${quantidade})`;
            produtoList.appendChild(listItem);
        });
    }).catch((error) => {
        console.error("Erro ao carregar produtos: " + error.message);
    });
}

document.getElementById("carrinho-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const idProduto = document.getElementById("idProduto").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);

    const produto = new CarrinhoDeCompras();
    produto.set("idProduto", idProduto);
    produto.set("quantidade", quantidade);

    produto.save().then(() => {
        console.log("Produto adicionado com sucesso.");
        document.getElementById("carrinho-form").reset();
        carregarProdutos();
    }).catch((error) => {
        console.error("Erro ao adicionar produto: " + error.message);
    });
});

carregarProdutos();

