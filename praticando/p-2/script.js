// Calculadora simples

const prompt = require("prompt-sync")();

const num11 = Number(prompt("Digite um número: "));

const num22 = Number(prompt("Digite outro número: "));

console.log(`Estamos quase lá!`)

const Opp = prompt(console.log("Indique o operdador que deseja introduzir; EX - (Adição, Divisão, Subtração, Multiplicação): "));

numeros = calculo(num11, num22, Opp)

function calculo (num1, num2, Op) {
    if (Op === "+") {
      return num1 + num2;
    } else if (Op === '-') {
      return num1 - num2;
    } else if (Op === "*") {
      return num1 * num2;
    } else 
      return num1 / num2
}

console.log("O resultado foi: ", calculo(num11, num22, Opp))