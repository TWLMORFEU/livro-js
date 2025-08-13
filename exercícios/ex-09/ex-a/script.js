/*
A) Elaborar um programa que leia um número. Informe se ele é par ou ímpar. Faça com if...else...tradicional e, após, tente criar a condição com o operador ternário
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

let numt
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num1 = (frm.inum.value);

    if (num1 % 2 == 0) {
        numt = 'Par'; 
    } else {
        numt = 'ímpar';
    }

    resp.innerText = `O número é ${numt}`
})

// const numt = num1 % 2 == 0 ? "Par" : "Ímpar"
