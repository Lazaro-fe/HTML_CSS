//DOM
const horas = document.querySelector('#hora');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const data = document.querySelector('#data'); // Adicionado

//EVENTOS
setInterval(relogio, 1000);

//FUNÇÃO
function relogio() {
    let hoje = new Date();
    let hr = hoje.getHours();
    let min = hoje.getMinutes();
    let seg = hoje.getSeconds();
    
    // Lógica da data adicionada aqui
    let dia = hoje.getDate();
    let mes = hoje.getMonth() + 1; // Mês começa em 0, então somamos 1
    let ano = hoje.getFullYear();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;
    
    // Formatação da data
    if (dia < 10) dia = '0' + dia;
    if (mes < 10) mes = '0' + mes;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    data.textContent = `${dia}/${mes}/${ano}`; // Atualiza o elemento da data
}