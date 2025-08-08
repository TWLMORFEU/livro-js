/*
A) Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas (no horário de verão na França), elaborar um programa que leia a hora no Brasil e nforme a hora na França.
*/


// Cria referência ao form e elemento onde erá exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//"ouvinte" de veneto, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
   e.preventDefault      // Evita o envio do form

   // obtém e converte o conteúdo do campo inHorarioBrasil
   const horaBrasil = Number(frm.inHoraBrasil.value);
   let horaFranca = horaBrasil + 5 // calcula o horário na França

   if (horaFranca > 24) { // se passar das 24 horas na frança
    horaFranca = horaFranca - 24 // ...subtrai 24
   }


   resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`;
})