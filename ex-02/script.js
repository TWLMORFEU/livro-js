/* Cria uma referência ao form e ao elemento h3 (ONDE SERA EXIBIDA A RESPOSTA)*/
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

/*Cria um "ouvinte" de evento, acionado quando o botão submit for clicado*/
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // Obtém o nome digitado no form
    resp.innerText = `Olá ${nome}` // Exibe a resposta do programa
    e.preventDefault() // evita envio do form
})


// informações - programa js que exibe o nome informado pelo usuário no campo de edição

/* 

--- Cria referência ao form e ao elemento h3 ( onde será exibida a resposta ) ---

- const frm = document.querySelector("form")
- const resp = document.querySelector("h3")

*/

/*

--- Cria um "ouvinte" de evento, acionado quando o botão submit for clicado ---

- frm.addeventListener("submit", (e) => {

- const nome = frm.inNome.value -> obtém o nome digitado
- resp.innerText = `Olá ${nome}` -> exibe a resposta do programa
- e.preventdefault() -> evita envio do form
})

*/

