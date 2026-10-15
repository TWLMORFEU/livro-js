function verificar() {
   let data = new Date()
   let ano = data.getFullYear()
   let fano = document.getElementById('txtano')
   let res = document.querySelector('div#res')

   if ( fano.value.length == 0 || fano.value > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
      let idade = ano - Number(fano.value)

      let fsex = document.getElementsByName('radsex')
      let genero = ''
    if (fsex[0].checked) {
      genero = 'Masculino'
   }  else  {
      genero = 'Feminino' 
   } 
   res.style.textAlign = `center`
   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   }

   
   
}