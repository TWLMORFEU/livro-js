/*
C) Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve  informar o tempo da permanência do veículo no local e o troco (se existir)
*/


const frm = document.querySelector("form")
let respOne = document.querySelector("#respOne")
let respTwo = document.querySelector("#respTwo")

let tempo = [30, 60, 120]
let preco = [1.00, 1.75, 3.00]

frm.addEventListener("submit",  (e) => {
     e.preventDefault();
    let valor = Number(frm.ipar.value)
   
    if (valor >= preco[0] && valor < preco[1]) {
       respOne.textContent = `Tempo: ${tempo[0]} minutos`
       respTwo.textContent = `Troco: ${(valor - preco[0]).toFixed(2)}`

    } else if (valor >= preco[1] && valor < preco[2]) {
       respOne.textContent = `Tempo: ${tempo[1]} minutos` 
       respTwo.textContent = `Troco: ${(valor - preco[1]).toFixed(2)}`

    } else if (valor >= preco[2]) {
        respOne.textContent =` Tempo: ${tempo[2]}`
        respTwo.textContent = `Troco: ${(valor - preco[3].toFixed(2))}`

    } else {
        respOne.textContent = "Valor Insuficiente"
        respTwo.textContent = ''
    }
})