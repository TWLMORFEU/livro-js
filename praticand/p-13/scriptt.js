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
}

botao.addEventListener('click', contar)
