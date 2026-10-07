// Calculadora simples

const prompt = require("prompt-sync")();

const num11 = Number(prompt("Digite um número: "));

const num22 = Number(prompt("Digite outro número: "));

console.log(`Estamos quase lá!`)

const Opp = prompt("Indique o operdador que deseja introduzir; EX - (Adição, Divisão, Subtração, Multiplicação): ");

numeros = calculo(num11, num22, Opp)

function calculo (num1, num2, Op) {
    if (Op === "+") {
      return num1 + num2;
    } else if (Op === '-') {
      return num1 - num2;
    } else if (Op === "*") {
      return num1 * num2;
    } else 
      return num2 !==0 ? num1/num2: 'Erro divisão por zero';
}

console.log("O resultado foi: ", calculo(num11, num22, Opp))