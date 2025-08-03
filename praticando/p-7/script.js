// Analise de idade 
const prompt = require('prompt-sync')();


const idade = Number(prompt("Qual sua idade ? Vamos ver sua classificação de idade: "));

if (idade < 18) {
    console.log("Menor de idade")
} else if (idade === 18) {
    console.log("Maior de idade")
} else {
    console.log("Maior de idade")
}

