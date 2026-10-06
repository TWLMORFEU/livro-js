
let primeiroSalario = window.document.getElementById('salario');
let segundoSalario = window.document.getElementById('salarioTwo');

let button = window.document.getElementById('calculo')
let salario1 = window.document.getElementById('salarioOne')
let salario2 = window.document.getElementById('salarioTwo')

const result = salario1 + salario2

button.addEventListener('mouseenter', calcular)
button.addEventListener('click', calculandoTwo)

function calcular () {
    button.innerText = 'Calcular'
    button.style.background = 'grey' 
}

function calculandoTwo () {
    button.innerText = 'Calculando...'
    button.style.background = "yellow"
}




 let p = window.document.getElementById('resposta')
 
function result() {
    p.innerText = `Seu Salário somando de duas vezes, tera que estabelecer mais de R$ 5.000 para estar maior que a média brasileira. sendo ele ${result}`
}