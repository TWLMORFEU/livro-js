let peso = 70

let altura = 1.78

function Imc(peso, altura) {
   let imc = peso / (altura * altura)

   console.log(imc.toFixed(2))
}

Imc(peso, altura)