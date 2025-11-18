/* Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto. Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linha.*/


const prompt = require("prompt-sync")()
const produto = prompt("Produto: ") // Lê o nome do produto e ... 
const num = Number(prompt("N de etiquetas: ")) // quantidade de etiquetas
// Cria um laço de repetição até num/2 9pois imprime2 etiquetas por linha
for (let i = 1; i <= num / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (num % 2 == 1) {
    console.log(produto)
}