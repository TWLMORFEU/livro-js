/*
B) Elaborar um programa que leia um número e calculesua raiz quadrada. Caso a raiz seja exata (quadrados perfeitos), informá-la, caso contrário, informe: "Não há raiz exata para"
*/


const frm = document.querySelector("form") // Obtém eçementos da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value) // evita envio do form
    const raiz = Math.sqrt(numero) // calcula a raiz quadrada do número
    if ( Number.isInteger(raiz)) { // se o valor da raiz for um número inteiro
        resp.innerText = 'Raiz: ${raiz}' // ...mostra a raiz
    } else { // senao
        resp.innerText = `Não há raiz exatapara ${numero}` // ... mostra mensagem
    }
})