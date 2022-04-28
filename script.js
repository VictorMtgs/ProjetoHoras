window.alert('Bem vindo ao site de periodos conforme o horario o tema muda!!')
function carregar() {

    var msg = window.document.getElementById('msg') // captura do dado no html para formacao da menssagem
    var img = window.document.getElementById('imagem') // mesma coisa acima ^
    var data = new Date() // parametro para receber informacoes de data
    var hora = data.getHours()
    
    msg.innerHTML = `Agora sao ${hora} horas.`

    if (hora >= 0 && hora < 12){

        // Bom Dia!
        img.src = 'manha.png'
        document.body.style.background= '#f4b87f'

    }
        else if (hora >= 12 && hora <18){

            //Boa Tarde!
            img.src = 'tarde.png'
            document.body.style.background= '#9e9557'
        }

    else {

        //Boa Noite!
        img.src = 'noite.png'
        document.body.style.background= '#2b4748'
    }
}


