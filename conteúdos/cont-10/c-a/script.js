/*
A) A Copa do Mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos de 1942 e 1946 (Segunda Guerra Mundial). Construir um programa que repita a leitura de números (anos) até ser digitado 0. Informe para cada ano se ele é ou não ano de Copa do Mundo
*/
 

const  prompt = require("prompt-sync")()
console.log("Programa Anos de copa do mundo. Digite 0 para sair ")
console.log('--------------------------------------------------')

do { 
    const ano = Number(prompt("Ano: ")) 
    if (ano == 0) {
        break // sai da repetição
    } else if (ano === 1942 || ano === 1946) {
        console.log(`Não houve Copa em ${ano} (Segunda Guerra Mundial)`)
    } else if (ano >= 1930 && ano % 4 === 2) {
        console.log(`Sim! ${ano} é ano de Copa do Mundo!`)
    } else {
        console.log(`Não...${ano} não é um ano de Copa do Mundo.`)
    }
}while(true)





/* Foi usada uma estrategia legal, pega o ano de inicio, e ja que e em 4 em 4 ele divide por 4 e todos os divisores a partir dali serao os mesmos, no caso o dois */