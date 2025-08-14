
function gerartabuada() {
    const numeroInput = document.getElementById("numeroInput")
    let numero = perseInt(numeroInput.value)

    const resuktadoDiv = document.getElementById("ResultadoTabuada")
    resultadoDiv.innerHTML

    resultadoDiv.innerHTML+= '<h2>Tabiada dos anteriores de ${numero}</h2>'

    for (let i = 1; i <=10; i++) {
        let resultado = numero - i
        resuktadoDiv.innerHTML+= '<p>${numero} - ${i} = ${resultado}</p>'

    }
}

const gerarbutao = document.getElementById("gerarbotao")
gerarbutao.addEventListener("click", gerarbutao)