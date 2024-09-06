var numeroParImpar = prompt("Digite um número: ")
if (numeroParImpar % 2 == 0) {
    console.log('Esse número é par');
} else {
    console.log('Esse número é impar');
}

let salario = parseFloat(prompt("Digite seu salário: "))
let resultado = (salario * 10) / 100;

console.log("Aqui está 10% do seu salário: R$" + resultado)

function dormir() {
    let garretto = "A mimir";

    if (garretto) {
        alert("Dormiu")
    } else {
        alert("Tá acordado")
    }
}

let opcao = (prompt("Digite o número da figura geometrica: \n 1. Triângulo\n  2. Quadrado \n 3. Retângulo \n 4. Circulo \n"))
if (opcao == 1) {
    let base = parseFloat(prompt("Digite o valor da base: "));
    let altura = parseFloat(prompt("Digite o valor da altura: "));
    let area = base * altura / 2;
    alert("A área do triângulo correspondente é: " + area)
} else
    if (opcao == 2) {
        let base = parseFloat(prompt("Digite o valor da base: "));
        let altura = parseFloat(prompt("Digite o valor da altura: "));
        let area = base * altura;
        alert("A área do quadrado correspondente é: " + area)
    }
    else
        if (opcao == 3) {
            let base = parseFloat(prompt("Digite o valor da base: "));
            let altura = parseFloat(prompt("Digite o valor da altura: "));
            let area = base * altura;
            alert("A área do retangulo correspondente é: " + area)
        }
    else
        if (opcao == 4) {
            let raio = parseFloat(prompt("Digite o valor do raio: "));
            let area = 3.14 * raio * raio;
            alert("A área do circulo correspondente é: " + area)
        } else {
            alert("Não possui número correspondente")
        }