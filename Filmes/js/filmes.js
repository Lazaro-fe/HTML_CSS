// Componente : Lázaro Ramos Rodrigues Ferreira

const cin_1 = document.querySelector('#cin_1')
const btbacurau = document.querySelector('#btbacurau')
const btcentral = document.querySelector('#btcentral')
const btquehoras = document.querySelector('#btquehoras')
const bttropa = document.querySelector('#bttropa')
const sinopse = document.querySelector('#sinopseid')

btbacurau.addEventListener('click', Bacurau)
btcentral.addEventListener('click', CentraldoBrasil)
btquehoras.addEventListener('click', QueHorasElaVolta)
bttropa.addEventListener('click', TropadeElite)
sinopse.addEventListener('click', sinopse)

function Bacurau(){
    cin_1.src='imagens/bacurau.jpg'
    sinopse.textContent= 'Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade.'
}

function CentraldoBrasil(){
    cin_1.src='imagens/central_do_brasil.jpg'
    sinopse.textContent= 'Dora, uma amargurada ex-professora, ganha a vida escrevendo cartas para pessoas analfabetas, que ditam o que querem contar às suas famílias.'
}

function QueHorasElaVolta(){
    cin_1.src= 'imagens/que_horas_ela_volta.jpg'
    sinopse.textContent= 'Val deixa a filha, Jéssica, no interior de Pernambuco e passa os 13 anos seguintes trabalhando como babá do menino Fabinho em São Paulo. Ela consegue estabilidade financeira, mas convive com a culpa por não ter criado sua filha.'
}

function TropadeElite(){
    cin_1.src= 'imagens/tropa_de_elite.jpg'
    sinopse.textContent= 'Nascimento, capitão da tropa de elite do Rio de Janeiro, é escolhido para chefiar uma das equipes cuja missão é apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM.'
}