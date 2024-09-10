//atividade segunda-feira

let produto = parseFloat (prompt("Digite o valor do produto: "))
let desconto = parseFloat(prompt("Digite o porcentual de desconto: "))

let novoValor = produto - (desconto/100*produto)

alert("O novo preço corresponde a: R$ " + novoValor)

if(novoValor>90){
    alert("Compra pode ser dividida em 3x")
}