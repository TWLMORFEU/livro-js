// Se é par ou ímpar

const prompt = require("prompt-sync")();

const numU = Number(prompt('Digite um número: '));

console.log(`Vamos avaliar se ${numU} é par ou ímpar!`);

if (numU % 2 === 0) {
    console.log(`O número ${numU} é par`)
} else {
    console.log(`O número ${numU} é ímpar`)
}

