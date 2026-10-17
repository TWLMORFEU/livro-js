let peso = 70

let altura = 1.78

function Imc(peso, altura) {
   let imc = peso / (altura * altura)

   console.log(imc.toFixed(2))
}

Imc(peso, altura)




let pizzas = 10


while (pizzas > 0 ) {
    pizzas--
   console.log('acabou uma pizza')
}




let numero = 7
let contador = 1

while (contador <= 10) {
    console.log(`${numero} x ${contador} = ${numero * contador}`)
    contador++
}




let num = 3
let cont = 1
let soma = 0
while (cont <= 10) {

    let result = num * cont
    console.log(`${num} x ${cont} = ${result}`)
    if (result % 2 == 0) {
        console.log('O resultado é par')
    } else {
        console.log('O resultado é ímpar')
    }

    soma = soma + result
    cont ++
    
}

console.log(`A soma de todos os números multiplicados, equivalem a ${soma}`)