/* B -> Elaborar um programa para uma revenda de veículas. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x. A Figura 2.7 ilustra uma execução desse programa.*/

// cria refeência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.iveiculo.value
    const preco = Number(frm.ipreco.value)

    const entrada = preco * 0.50
    const parcela = (preco * 0.50) / 12

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entraada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`
    e.preventDefault
})