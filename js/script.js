var valorTotal = [0,0];
var valorProduto = [50.00,30.00];
var qtd = [0,0];

function adicionarItem(item) {

    var quantidade = document.getElementById('quantidade'+ item);
    var total = document.getElementById('total'+ item);
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    ValorCompra();

}

function removerItem(item) {

    if (qtd[item] > 0) {
        qtd[item] -= 1;
        var quantidade = document.getElementById('quantidade'+ item);
        var total = document.getElementById('total'+ item);
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
        quantidade.innerHTML = qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        ValorCompra();

    }
}

function ValorCompra(){
    var ValorTotalCompra = document.getElementById('ValorTotalCompra');
    var valor = 0;

    for (var i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];
    }

    ValorTotalCompra.innerHTML = valor.toFixed(2);


}
