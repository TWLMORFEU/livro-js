/*
B) elaborar um programa que leeia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba "Sem Multa". Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve". E se, a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave"
*/


const frm = document.querySelector("form");
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const perm = Number(frm.ivel.value);
    const cond = Number(frm.ivec.value);

    const medi = (perm / 100) * 20 + perm;
    
    let re
    if (cond <= perm) {
       re = "Sem multa"
    } else if (cond === medi) {
        re = "Multa Leve"
    } else {
        re = "Multa Grave"
    }

    resp.innerText = `Situação: ${re}`;
})