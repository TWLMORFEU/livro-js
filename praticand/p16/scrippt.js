// Funcoes costumam ter, chamada, parâmetro, acao e retorno.

// funcoes sao, acoes executadas assim que chamadas ou em decorrencia de algum evento.
// Uma funcao pode receber parametros e retornar um resultado


function parimp(n) {
    if (n%2==0) {
      console.log('numero e par')
    } else {
      console.log('numero e impar')
    };
}


parimp(55)
 

// ou tambem 

function parimpp(nn) {
    if (nn%2==0) {
        return 'Par'
    } else {
        return 'impar'
    };
}

console.log(parimpp(44))


let v = function(x) {
    return x*2
}

console.log(v(5))



function fatorial(n) {
    let fat = 1 
    for (let c = n; c >  1; c--) {
        fat  *=c
    }
    return fat
}

console.log(fatorial(5))