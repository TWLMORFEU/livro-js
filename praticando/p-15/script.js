
let primeiroSalario = window.document.getElementById('salario');
let segundoSalario = window.document.getElementById('salarioTwo');

let button = window.document.getElementById('calculo')


button.addEventListener('mouseenter', caucular)


function caucular () {
    button.innerText = 'Calcular'
    button.style.backgroundrgb = rgb(175, 213, 214)
}