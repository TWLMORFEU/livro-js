/*
B) uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o número máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições: a) cada parcela deve ser de no mínimo, R$ 20,00; b) o número máximo de parcelas permitido é 6.
*/

const prompt = require('prompt-sync')();
const valor = Number(prompt("Valor de compra R$: "))
const aux = Math.floor(valor / 20) // aux = numero de parcelas
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux // operador ternário
const valorParcela = valor / parcelas // Cálculo do valor da parcela
console.log(`Pode negar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`);

/*
Oque o código ternário apresentou ?

let parcelas 
if (aux === 0) {
parcelas = 1
} else if (aux > 6) {
parelas = 6
} else {
parcelas = aux
}

*/