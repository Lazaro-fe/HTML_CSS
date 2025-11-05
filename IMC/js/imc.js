const kg = document.querySelector('#kg')
const metros= document.querySelector('#metros')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

botao.addEventListener('click', peso)

function peso(event) {
    const peso = Number(kg.value);
    const altura = Number(metros.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos.';
        return; 
    }
    const k=peso/(altura*altura);

    let situacao = '';

    if (k < 18.5) {
        situacao = 'Magreza';
    } else if (k >= 18.5 && k < 25) {
        situacao = 'Peso Normal';
    } else if (k >= 25 && k < 30) {
        situacao = 'Acima do Peso';
    } else { 
        situacao = 'Obesidade';
    }

    resultado.textContent = `Seu IMC é ${k.toFixed(2)} (${situacao})`;
}