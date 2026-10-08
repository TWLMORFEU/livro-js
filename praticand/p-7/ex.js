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