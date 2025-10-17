const frm = document.querySelector("form") // Obtém lementos da página

const resp1 = document.querySelector('#outResp1');

const resp2 = document.querySelector('#outResp2');

let resposta = '';  // string com a resposta a ser exibida

let numContas = 0; // Inicasliza contador
let valTotal = 0; // e acumulador (variáveis globais) 

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const descricao = frm.iDescricao.value 

    const valor = Number(frm.iValor.value)

    numContas++ // adiciona valores ao contador e acumulador

    valTotal = valTotal + valor;
    resposta = resposta + descricao + " -R$: " + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta} -----------------------------`
    resp1.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.iDescricao.value = "" // Limpa campos do form
    frm.iValor.value = ""
    frm.iDescricao.focus(); // posiciona no campo de descrição do form
});