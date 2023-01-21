function carregar() {
    var msn = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var bom = document.getElementById('bom')
    //var hora  = 22

    msn.innerHTML = `Agora são ${hora} horas / it's now ${hora} o'clock`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = '../imagens/manha111.png'
        document.body.style.background = '#75614f'
        bom.innerHTML = `Bom Dia / Good Morning`
        
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = '../imagens/tarde111.png'
        document.body.style.background = 'rgb(68,129,139)'
        bom.innerHTML = `Boa Tarde / Good Afternoon`
    } else {
        //BOA NOITE
        img.src = '../imagens/noite111.png'
        document.body.style.background = 'rgb(60,37,136)'
        bom.innerHTML = `Boa Noite / Good Night`
        
    }

}