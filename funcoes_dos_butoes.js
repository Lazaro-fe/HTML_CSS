const  x = document.querySelector('#x')
const btligado = document.querySelector('#btligado')
const btdesligado = document.querySelector('#btdesligado')

btligado.addEventListener('click',Ligado)
btdesligado.addEventListener('click',Desligado)

function Ligado(){
    x.src='imagens/Lâmpada Acessa.gif'
}

function Desligado(){
    x.src='imagens/Lâmpada Apagada.gif'
}
