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

/* 

--- Introdução de veneto e funções ---

- para determinar um evento após um click no botão submit por exemplo, e logoo em seguida um função de seta com os comandos a serem executados logo em seguida

exemplo: 

frm.addeventListener("submit", (e) => { comando })

- este "e" representa o evento que oorreu ( nesse caso o envio de formulário), entretanto é de suma importância ser tratado um nome descitivo no lugar do "e" para que a interpretação seja mais fluida.
- qualquer nome dará a mesma funcionalidade, o que vale é a posição neste caso, por isso é bom nomes semânticos

- e este "e"  e.preventdefault() -> eita que o formulário recarregue 

*/


/*
--- propriedades innerText, innerHTML e value ---

-- innerText -> obtem ou altera o texto exibido por elementos por elementos HTMl, como parágrafos(p), cabeçalhos(h1,h2...) ou containers(span,div) MODIFICA APENAS O TEXTO VISÍVEL

-- innerHTML -> obtem ou altera o conteúdo de elementos HTMl como parágrafos (p), cabeçalhos (h1,h2...) ou containers (span,div). Códigos HTML presentes no conteúdo são renderizados pelo navegador
MODIFICA TODO O CONTEÚDO JUNTO COM AS TAGS HTML

-OBS - innerHTML pode apresentar algum risco relacionado à segurança de dados em paginas web, denominado como XSS, para evitar é necessário filtrar os dados de entrada de um site,
-- CASO O CONTEÚDO A SER EXIBIDO A PÁGINA PELO PROGRAMA NÃOCONTENHA DADOS INFORMADOS PELO USUÁRIO, NÃO HÁ RISCOS EM UTILIZAR -- 

-- value -> obtem ou altera o conteúdo de campos de formulário


innerText pode ser substituido tambem por -> textContent ou outerText
*/