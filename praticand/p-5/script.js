// Calcular a média de 4 notas. E se a média for menor que 6 avise que ta reprovado

const prompt = require('prompt-sync')();

let num1 = Number(prompt('Digite a primeira nota: '));
let num2 = Number(prompt('Digite a segunda nota: '));
let num3 = Number(prompt('Diite a terceira nota: '));
let num4 = Number(prompt('Digite a quarta nota: '));

const notas = []

notas.push(num1);
notas.push(num2);
notas.push(num3);
notas.push(num4);


let soma = notas[1] + notas[2] + notas[3] + notas[0];
let media = soma / 4
 
if (media >= 7 ) {
    console.log('Você ficou acima da média. Parabéns!')
} else if (media < 7 && media > 6) {
    console.log('Você ficou na média! Atenção!') 
} else {
    console.log("Foi reprovado, está abaixo da média!")
}

// usar return em funcao
