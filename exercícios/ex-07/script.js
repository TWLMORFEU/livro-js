const prompt = require("prompt-sync")()

const alert = alert('Bem vindo ao jogo da sorte!')
const nome = String(prompt("Digite seu nome: "));

const sorte = Number(prompt(`Digite um número ${nome}: `))

if (sorte % 2 === 0) {
console.log('Você passou de fase!')
} else if (sorte % 2 === 1) {
    console.log('Não foi desta vez!')
} else {
    console.log("Valor não indentificado")
}  