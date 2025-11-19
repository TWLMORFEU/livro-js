//Contador

var createCounter = function(n) {
    n--;
    return function() {
        n++;
        return n;
    };
};


/* Dado um número inteiro  n, retorne uma counterfunção. Essa counterfunção inicialmente retorna  n e, em seguida, retorna 1 a mais que o valor anterior a cada chamada subsequente ( n, n + 1, n + 2, etc).

 



Entrada: 
n = 10
["ligar","ligar","ligar"]
Saída: [10,11,12]
 Explicação: 
 contador() = 10 // Na primeira vez que contador() é chamado, ele retorna n.
contador() = 11 // Retorna 1 a mais que a vez anterior.
contador() = 12 // Retorna 1 a mais que a vez anterior.
Exemplo 2:

Entrada: 
n = -2
["ligar","ligar","ligar","ligar","ligar"]
Saída: [-2,-1,0,1,2]
 Explicação: A função counter() retorna inicialmente -2. Em seguida, incrementa após cada chamada subsequente.
 

Restrições:

-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call" */



// na primeira vez chamado retorna o valor normal e apos retorna somando 1.
//quando o valor entra diminui 1 depois so soma pois quando menciona é a função interna 