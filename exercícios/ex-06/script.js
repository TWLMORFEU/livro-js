const prompt = require("prompt-sync")()

const RacaoM = Number(prompt('Quantos KG de ração é comprada mensalmente ?'));

const consD = Number(prompt("Consumo diário ?"))

const gramas = RacaoM * 1000
  

const duracao = Math.floor( gramas / consD );
const sobra = (gramas % consD)

console.log(`A quantidade dura ${duracao}  dias`)

console.log(`A quantidade que sobre são de ${sobra
}`)