// DOOM

const saudacao = document.querySelector('#saudacao')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const fundo = document.querySelector('body')

// EVENTOS

setInterval(relogio,1000)

// FUNÇÕES

function relogio(){

    hoje = new Date()

    d = hoje.getDate()
    m = hoje.getMonth() +1
    a = hoje.getFullYear()
    h = hoje.getHours()
    min = hoje.getMinutes()
    s = hoje.getSeconds()

    if (d<10){
        d="0"+d
    }
    if (m<10){
        m="0"+m
    }

    dia.textContent = d
    mes.textContent = m
    ano.textContent = a
    horas.textContent = h
    minutos.textContent = min
    segundos.textContent = s

    if(h>=5 && h<12){
        saudacao.textContent = 'Bom Dia !!';
        fundo.style.background = 'linear-gradient(cyan, white)';
    }else if (h>= 12 && h<18){
        saudacao.textContent = 'Boa Tarde !!';
        fundo.style.background = 'linear-gradient(cyan, red, yellow)';
    }else{
        saudacao.textContent = 'Boa noite !!';
        fundo.style.background = 'linear-gradient(darkblue, black)';
    }

}