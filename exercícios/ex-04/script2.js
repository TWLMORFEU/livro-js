/*
B) ELABORAR UM PROGRAMA PARA UMA LAN HOUSE DE UM AEROPORTO - O programa deve ler o valor de cada 15 minutos de uso de computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.
*/

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    let preco = frm.ivalor.value;
    let tempo = frm.itempo.value;

    let bloco = Math.ceil(tempo / 15);
    const total = bloco * preco;

    resp.innerText = `Valor a pagar R$: ${total.toFixed(2)}`;

    e.preventDefault()
});