/*
A) UMA FARMÁCIA ESTÁ COM UMA PROMOÇÃO - Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia a descrição e preço de um medicamento.Informe o valor do produto na prommoção.
*/

const frm = document.querySelector("form");
const val1 = document.querySelector("h2");
const val2 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const Remedio = frm.iremedio.value;
    const valor = frm.ipreco.value;

    let total = Math.floor(valor);
    total = total * 2;

    val1.innerText = `Promoção de ${Remedio}`
    val2.innerText = `Leve 2 por apenas R$: ${total.toFixed(2)}`

    e.preventDefault()
})