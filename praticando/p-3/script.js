// Indentifica qual número é maior 
const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite uma número: "));
const num2 = Number(prompt("Digite um segundo número: "));

if (num1 > num2) {
    return console.log("O número", num1, "é maior que o", num2)
} else if (num2 > num1) {
    return console.log(`O número ${num2}, é maior que o ${num1}`)
} else { console.log('Os números são iguais');

}
// não usar return na ultima linha apenas dentro da função. ao fm das condicionais o valor ja retorna sozinho