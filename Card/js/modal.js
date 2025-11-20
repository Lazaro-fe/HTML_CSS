var button = document.getElementById('read_button')

button.addEventListener('click', function() {
    var card = document.querySelector('.card'); /* Alterna a presença da classe 'active' no elemento .card */
    card.classList.toggle('active');

    /* Verifica se a classe 'active' está presente */
    if (card.classList.contains('active')) {
        return button.textContent = 'Read more' /* Se estiver presente (modo 'Read Less'), muda o texto do botão */
    }

    button.textContent = 'Read less' /* Se não estiver presente (modo 'Read More'), garante que o texto do botão seja 'Read more' */
})