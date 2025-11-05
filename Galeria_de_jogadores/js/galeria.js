//DOM

const x_1 = document.querySelector('#x_1')
const btjohan = document.querySelector('#btjohan')
const btyashin = document.querySelector('#btyashin')
const btmaldini = document.querySelector('#btmaldini')
const btronaldinho = document.querySelector('#btronaldinho')

// EVENTO

btjohan.addEventListener('click' ,Johan)
btyashin.addEventListener('click' ,Yashin)
btmaldini.addEventListener('click' ,Maldini)
btronaldinho.addEventListener('click' ,Roanldinho)

// FUNÇÕES

function Johan(){
    x_1.src='imagens/cruyff.jpg'
}

function Yashin(){
    x_1.src='imagens/Lev.jpeg'
}

function Maldini(){
    x_1.src='imagens/maldini.jpg'
}

function Roanldinho(){
    x_1.src='imagens/ronaldinho.webp'
}