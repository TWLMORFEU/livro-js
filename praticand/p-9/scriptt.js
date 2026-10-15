function verificar() {
   let data = new Date()
   let ano = data.getFullYear()
   let fano = document.getElementById('txtano')
   let res = document.querySelector('div#res')

   if ( fano.value.length == 0 || fano.value > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
      let idade = ano - Number(fano.value)
      let genero = ''
      let fsex = document.getElementsByName('radsex')
      let img = document.createElement('img')

      img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Masculino'

    if (idade >= 0 && idade <= 10) {
     // Crianca
    } else if (idade < 21) {
        // jovem  masculino
    } else if (idade < 50) {
         // adulto 
    } else {
        // idoso
    }

   }  else  {
      genero = 'Feminino' 
       if (idade >= 0 && idade <= 10) {
     // Crianca
    } else if (idade < 21) {
        // jovem  feminino
    } else if (idade < 50) {
         // adulto 
    } else {
        // idoso
    }
   } 
   res.style.textAlign = `center`
   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   }

   
   
}