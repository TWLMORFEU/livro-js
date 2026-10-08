let agora = new Date()
let hora = agora.getHours() // hora do sistema


console.log(`agora são exatamente, ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 17) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} 

// Condicoes multiplas

// Se o break não encontrar outro break, ficara executando infinatamente. 
/*

switch (idade) {
   case criança:

   break

   case adolescente:

   break

   case adulto: 

   break

   case idoso:

   break
}

*/


let horario = new Date()
var diaSemana = horario.getDay() /* 0 -> dom, 1 -> seg, 2 -> ter, 3 -> quar, 4 -> quin, 5 -> sext, 6-> sab */

console.log(diaSemana)

switch(diaSemana) {
    case 0:
    console.log('Domingo')
    break

    case 1:
    console.log('Segunda')
    break

    case 2: 
    console.log('Terça')
    break

    case 3:
    console.log('Quarta')
    break
    
    case 4:
    console.log('Quinta')
    break

    case 5: 
    console.log('Sexta')
    break

    case 6:
    console.log('Sabado')
    break

    default: 
    console.log('[ERRO] Dia inválido')
    break
}