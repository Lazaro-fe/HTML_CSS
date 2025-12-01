// DOM
const cidade = document.querySelector('#cidade')
const bprocurar = document.querySelector('#bprocurar')
const city = document.querySelector('#city')
const temperatura = document.querySelector('#bprocurar')
const previsao = document.querySelector('#previsao')
const chave = 'e12a59aeb26f36a9ee4d7eba3588239c'

// EVENTO

bprocurar.addEventListener('click', buscarcidade)

// FUNÇÃO

/* Função assíncrona é uma função que não bloqueia a execução de outras tarefas */
async function buscarcidade(){

    cidade_valor = cidade.value
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade_valor}&appid=${chave}`)

    console.log(dados)

    city.textContent = `Previsão de ${dados.name}`
    temperatura.textContent = `${(dados.main.temp).toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`
}