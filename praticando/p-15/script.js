
let primeiroSalario = window.document.getElementById('salario');
let segundoSalario = window.document.getElementById('salarioTwo');

let button = window.document.getElementById('calculo')
let salario1 = Number(document.getElementById('salarioOne').value)
let salario2 = Number(document.getElementById('salarioOTwo').value)
const result = salario1 + salario2
let p = window.document.getElementById('resposta')


button.addEventListener('mouseenter', calcular)
button.addEventListener('click', calculandoTwo)

function calcular () {
    button.innerText = 'Calcular'
    button.style.background = 'grey' 
}

function calculandoTwo () {
    button.innerText = 'Calculando...'
    button.style.background = "yellow"



 p.innerText = `Seu Salário somando de duas vezes, tera que estabelecer mais de R$ 5.000 para estar maior que a média brasileira. sendo ele ${result}`



}






   
