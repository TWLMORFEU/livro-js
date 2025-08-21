/*
D) Elaborar um programa que leia três lados e verifique se eles podem ou nâo pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados iguais), Isóscele (2 lados iguais), escaleno (3 lados diferentes)
*/


const frm = document.querySelector("form");
const resp = document.querySelector('#h3ti');
let msg;


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let ladoa = (frm.iladoA.value);
    let ladob = (frm.iladoB.value);
    let ladoc = (frm.iladoC.value);

    const [A, B, C] = [ladoa, ladob, ladoc]
   
    if (A >= B + C || B >= A + C || C >= A + B) {
        msg = "Os lados não determinam um triângulo"
    } else if (A === B && B === C) {
       msg = 'Equilátero'
    } else if (A === B || B === C || C === A) {
        msg = 'Isósceles' 
    } else {
        msg = 'Escaleno'
    }

    resp.innerText = `Triângulo:  ${msg}`;
})

