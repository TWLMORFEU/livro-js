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


/*

- const resp = document.querySelector("h3") -> primeiro elemento h3 da página

- const cor = document.queryselector("#inCor") -> elemento com id = inCor

- const lista = document.querySelector(".lista") -> elemento da class = lista

----------
- - querySelector() -> Referencia ampla ao elemento destinado, entratanto em versões de navegadores antigos não ira ser suportado, para resolver a acessibilidade para as versões antigas teria que utilizar os transpiladors de código, que converterá o código para instruções necessárias para esses navegadores. 

- - querySelectorById() -> Referencia mais objetiva, destinada ao elemento id específico dentro do código

*/

/*
podemos armazenar a referência a um elemento em uma variável

- Const frm = document.quaeyselector("form")
- Const nome = frm.inNome.value

ou 

- const nome = document.querySelector("form").inNome.value
obs: se o programa trabalhar com o mesmo elemento mais de uma vez, é recomendado armazenar a localizção dele em uma variável exemplo (de duas linhas)
*/

