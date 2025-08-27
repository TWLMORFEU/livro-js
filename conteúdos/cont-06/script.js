const frm = document.querySelector("form");
const resp = document.querySelector("h3");
// Obtém os elementos da página


frm.addEventListener("submit", (e) => {
   e.preventDefault(); // evita o envio do formulário

   const numero = Number(frm.inumero.value) // Obtém número informado
   let resposta = `Entre ${numero} e 1:` // String para estruturar a resposta
   for (let i = numero; i > 0; i = i - 1) {
    resposta = resposta + i + ', '
   }

   resp.innerText = resposta
})