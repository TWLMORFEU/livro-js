function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.querySelector('#imagem img');
    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora  são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = `fotomanha.jpg`
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = `entardecer.jpg`
    } else {
        // Bom Noite!
        img.src = `anoitecer.jpg`
    }
}