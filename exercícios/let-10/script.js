//Criar função "Olá, Mundo!"

const f = createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

console.log(f());


// todo argumento que entrar, retornara Hello World independente do tipo e quantidade

/*
Escreva uma função  createHelloWorld. Ela deve retornar uma nova função que sempre retorne  "Hello World".
 

Exemplo 1:

Entrada: args = []
 Saída: "Olá Mundo"
 Explicação:
const f = criarOláMundo();
f(); // "Olá Mundo"

A função retornada por createHelloWorld deve sempre retornar "Hello World".
Exemplo 2:

Entrada: args = [{},null,42]
 Saída: "Olá Mundo"
 Explicação:
const f = criarOláMundo();
f({}, null, 42); // "Olá Mundo"

Qualquer argumento pode ser passado para a função, mas ela deve sempre retornar "Olá Mundo".
 

Restrições:

0 <= args.length <= 10
*/