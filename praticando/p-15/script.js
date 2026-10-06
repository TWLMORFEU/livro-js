
let primeiroSalario = window.document.getElementById('salario');
let segundoSalario = window.document.getElementById('salarioTwo');

let button = window.document.getElementsById('calculo')


button.addEventListener('mouseenter', caucular)


function clicar () {
    button.innerText = 'Calcular'
    button.style.backgroundrgb = (175, 213, 214)
}