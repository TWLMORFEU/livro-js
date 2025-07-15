// Cria referêcia ao form e aos elementos h3 e h4 (resposta)

/* A -> Elaborar um programa para um Cinema, que leia o título e a duração de um filme em minutos. exiba o título do filme do filme e converta a duração para horas e minutos conforme destacado destacado */

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");


// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado 

frm.addEventListener("submit", (e) => {
    const titulo = frm.ititulo.value 
    const duracao = Number(frm.iduracao.value)

    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    resp1.innerText = titulo
    resp2.innertext = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault
})
