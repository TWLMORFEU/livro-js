function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.querySelector('#imagem img');
    let data = new Date()
    //let hora = data.getHours()
    let hora = 6
    msg.innerHTML = `Agora  são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = `fotomanha.jpg`
        document.body.style.background = 'rgb(20, 39, 34)'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = `entardecer.jpg`
        document.body.style.background = 'rgb(39, 36, 48)'
        
    } else {
        // Bom Noite!
        img.src = `anoitecer.jpg`
        document.body.style.background = 'rgb(43, 30, 21)'
    }
}