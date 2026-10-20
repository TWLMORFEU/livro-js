let botao = document.getElementById('botao');
let resposta = document.getElementById('res');


let st = document.getElementById('inicio');
let en = document.getElementById('fim');
let ps = document.getElementById('passo');

function calc() {

  let start = Number(st.value);
  let end = Number(en.value);
  let passo = Number(ps.value);

  if (st.value=== '' ) {
    resposta.innerHTML = 'Preencha o campo inicial (Início)';
  } else if (en.value === '') {
    resposta.innerHTML = 'Preencha o campo secundário (Fim)';
  } else if (ps.value === '') {
    resposta.innerHTML = 'Preencha o campo terciário (Passo)';
  } else if ( passo <= 0) {
    resposta.innerHTML = 'O passo deve ser maior que zero'
  } else {
    resposta.innerHTML = 'Contando: <br>'

    for (let Start = start; Start <= end; Start += passo) {
    resposta.innerHTML += `${Start} 👉 `;
    }
    resposta.innerHTML+= `🏁`
  }
  
}

botao.addEventListener('click', calc);



// erros cometidos durante a realizacao do exercicio


/*

botao chamando funcao errada

ids do js nao correspondiam ao html

comparacao com numeros e string vazias

o incremento no for estava incorreto

*/