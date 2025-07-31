//Atividade Calculo de peso ideal



// Cria referência ao form e elemento onde será exibida a resposta 
const frm = document.querySelector("form");
const resp = document.querySelector("h3")


//"Ouvinte" de evento, acionado quando o botão submit for clicado 
frm.addEventListener("submit", (e)=> {
    e.preventDefault() // evita o envio do formulário

    const nome = frm.inome.value // obtém valores do form
    const masculino = frm.imasculino.checked 
    const altura = Number(frm.ialtura.value)

    let peso; // declara varável peso
    if (masculino) { // se masculino (ou, if masculino === true)
       peso = 22 * Math.pow(altura,2) // math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    // apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg`
})