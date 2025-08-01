const prompt = require("prompt-sync")();

const numU = prompt(Number(console.log('Digite um número: ')));
console.log(`Vamos avaliar se ${numU} é par ou ímpar!`);

if (numU % 2 === 0) {
    console.log(`O número ${numU} é par`)
} else {
    console.log(`O número ${numU} é ímpar`)
}

