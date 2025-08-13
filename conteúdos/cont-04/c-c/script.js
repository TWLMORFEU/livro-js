/*
C) Elaborar um programa que leia um número-que deve ser uma centena. Calcule e exiba a centena invertida. Caso o número não seja uma centena, exiba mensagem. 
*/

const prompt = require("prompt-sync")();
const numero = Number(prompt('Número (centena)')) // lê o número
if (numero < 100 || numero >= 1000) {
    console.log("Erro...deve ser uma centena")
    return
}
const num1 = Math.floor(numero / 100) // obtém o primeiro número
const sobra = numero % 100
const num2 = Math.floor(sobra / 10)
const num3 = sobra % 10 
console.log(`Invertido: ${num3}${num2}${num1}`)

/*
Em ordem ele divide os nunmeros em centenas, dezenas e o restante que sao as unidades ocupam uma variável. Dentre isso de acordo com a ordem de divisão sera aplicada ao console.log, os numeros reservados em ordem contrária a que foi dividida
*/