/*
C) Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago.
*/

// cria referência ao form e ao elemento h3 ( onde será exibida a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.iquilo.value); // obtêm o conteúdo dos campos
    const Consumo = Number(frm.icons.value)

    const valor = (quilo / 1000) * Consumo // calcula valor a ser pago
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` // Exibe resposta

    e.preventDefault() // evita o envio do formulario
})