const frm = document.querySelector("form"); // obtém elementos da página
const resp = document.queryselector("pre");

frm.addEventListener("submit", (e) => {   // "escuta o evento do form"
    e.preventDefault(); // Evita envio do formulário

    const numero = Number(frm.inumer.value); // obtém o resultado informado
    let resposta = ""  // variável do tipo string, para concatenar a resposta
    // Cria um laço de repetição (i começa em 1 e é incrementado até 10)

    for (let i = 1; i <= 10; i++);
    // a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
    resposta = resposta + numero + "x" + i + "=" + (numero * i) + "\n"
    // resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`

    // o conteúdo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta
})

