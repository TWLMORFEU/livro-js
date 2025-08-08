/*
C) Em um determinado momento do dia, apenas notas de 10,50 e 100 estão disponiveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode se pago com as notas disponíveis) e informe o número minímo de notas de 100, 50 e 10 necessárias para pagar esse saque.
*/

const frm = document.querySelector("form") // obtém elementos da pagina
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector('#outResp3');

frm.addEventListener("submit", (e) => {              // obtém elementos da página
    e.preventDefault()                               // envia o envio do formulário
    const saque = Number(frm.inSaque.value)          // obtém o valor do saque 
    if (saque % 10 != 0) {                           // se saque não é múltiplo de 10
       alert("valor inválido para notas disponíveis (R$ 10, 50, 100)")
       frm.insaqu.focus()
       return
    }

    const notasCem = Math.floor(saque / 100) // calcula notas de 100
    let resto = saque % 100;                  // quanto sobra pra pagar
    const notasCinquenta = Math.floor(resto / 50) // calcula notas de 50
    resto = resto % 50                   // quanto ainda sobra
    const notaDez = Math.floor(resto / 10)        // calcula notas de 10
    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}`
    } 
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notaDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notaDez}`
    }
})