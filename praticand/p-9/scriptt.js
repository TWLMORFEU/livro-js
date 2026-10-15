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
      img.setAttribute('src', 'menino.jpg')
    } else if (idade < 21) {
       img.setAttribute('src', 'Garotojovem.jpg')
    } else if (idade < 50) {
       img.setAttribute('src', 'Garotojovem.jpg')
    } else {
        img.setAttribute('src', 'Idoso.jpg')
    }

   }  else  {
      genero = 'Feminino' 
       if (idade >= 0 && idade <= 10) {
      img.setAttribute('src', 'menina.jpg')
    } else if (idade < 21) {
       img.setAttribute('src', 'Garotajovem.jpg')
    } else if (idade < 50) {
        img.setAttribute('src', 'Garitajovem.jpg')
    } else {
        img.setAttribute('src', 'idosa.jpg')
    }
   } 
   res.style.textAlign = `center`
   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   res.appendChild(img)
   }

   
   
}