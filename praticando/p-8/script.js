const prompt = require("prompt-sync")();

const peso = Number(prompt('Digite seu peso atual: '));
const altura = Number(prompt("Determine sua altura atual: "));


function cal(peso, altura) {
    const imc = peso / (altura * altura);   
    return imc
}

const imc = cal(peso, altura)


function text(clas) {
   
    if (clas < 18.5) {
      return ("Abaixo do peso");
    } else if (clas >= 18.5 && clas < 24.9) {
      return ("Peso Normal");
    } else if (clas >= 25 && clas < 29.9) {
      return ("Sobrepeso")
    } else {
       return ("Obesidade")
    }
}

console.log(`Seu IMC é de: ${imc.toFixed(2)}\nClassificado como: ${text(imc)}`)



// usar return em função pois ao mostrar no console log acima mostra undefined pois um console.log esta dentro do outro