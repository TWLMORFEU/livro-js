const prompt = require("prompt-sync")()

const salario = Number(prompt(`Salário Atual: `));
const tempo = Number(prompt(`Tempo de Atividade na Empresa: `));


const quadr = Math.floor(tempo / 4);
const acrs = salario * quadr / 100;

console.log(`Quadriênios -> ${quadr}`);
console.log(`Salário mais acréscimos -> ${(acrs + salario).toFixed(2)}`);