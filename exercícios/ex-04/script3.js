/*
C) UM SUPERMERCADO ESTÁ COM UMA PROMOÇÃO - Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens indicando a promoção.
*/


const inf = document.querySelector("form");
const resp = document.querySelector("h2");
const resp2 = document.querySelector("h3");

inf.addEventListener("submit", (e) => {

    let produto = inf.iproduto.value;
    let preco = inf.ivalor.value

    const metade = preco / 2 

    const triple = (preco * 3) - metade;

    resp.innerText = ` ${produto} - Promoção: Leve 3 por R$: ${triple.toFixed(2)} `;

    resp2.innerText = `O terceiro produto custa apenas R$: ${metade.toFixed(2)}`;

    e.preventDefault()
})