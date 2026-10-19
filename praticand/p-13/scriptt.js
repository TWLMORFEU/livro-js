let st = document.getElementById('inicio');
let en = document.getElementById('fim');
let ps = document.getElementById('passo')

let start = st.value;
let end = en.value;
let passo = ps.value;

let botao = document.getElementById('botao');
let resposta = document.getElementById('resposta');

function contar() {
    resposta.innerHTML = 'Calculo'
};

botao.addEventListener('click', contar);


function calc() {
  if (start === '' ) {
    resposta.innerHTML = 'Preencha o campo inicial (Início)';
  } else if (end === '') {
    resposta.innerHTML = 'Preencha o campo secundário (Fim)';
  } else if (passo === '') {
    resposta.innerHTML = 'Preencha o campo terciário (Passo)';
  }



  
}