// criar uma função que analisa se o número é porsitivo, negativo ou zero


const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um número: "));

function analise (num) {
   if (num < 0) {
    return "O número é negativo"
   } else if (num > 0) {
    return "Número é positivo"
   } else 
    "O número é neutro"
}

console.log(analise(num));

// se houver return não utilizar console.log!