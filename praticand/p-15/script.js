let button = document.getElementById('calculo')

let salario1 = document.getElementById('salarioOne');
let salario2= document.getElementById('salarioTwo');


let p = document.getElementById('resposta')



button.addEventListener('mouseleave', voltar);
button.addEventListener('mouseenter', calcular)
button.addEventListener('click', calculandoTwo)


function calcular () {
    button.innerText = 'Calcular'
    button.style.background = 'grey' 
}

function voltar() {
    button.innerText = 'Calcular';
    button.style.background = '';
}

function calculandoTwo () {
    button.innerText = 'Calculando...'
    button.style.background = "yellow"

    let saldo1 = Number(salario1.value);
    let saldo2 = Number(salario2.value);

    let total = saldo1 + saldo2

    p.innerText = `Seu Salário somando de duas vezes, tera que estabelecer mais de R$ 5.000 para estar maior que a média brasileira. Sendo ele  R$${total.toLocaleString('pt-BR', {
        style:'currency',
        currency: 'BRL'
    })}`

}






   
