document.addEventListener("DOMContentLoaded", function() {
    const cookieModal = document.getElementById('cookie-modal');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    // Função para mostrar o modal de cookies
    function showCookieModal() {
        cookieModal.style.display = 'block';
    }

    // Função para ocultar o modal de cookies
    function hideCookieModal() {
        cookieModal.style.display = 'none';
    }

    // Verifica se já passaram 7 dias desde a última aceitação dos cookies
    function checkCookieAccepted() {
        const lastAcceptance = localStorage.getItem('cookieAcceptedTime');
        if (lastAcceptance) {
            const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000; // 7 dias em milissegundos
            const currentTime = new Date().getTime();
            if (currentTime - parseInt(lastAcceptance) < sevenDaysInMillis) {
                hideCookieModal(); // Se menos de 7 dias, esconde o modal
            } else {
                showCookieModal(); // Se mais de 7 dias, mostra o modal novamente
            }
        } else {
            showCookieModal(); // Mostra o modal se não houver registro de aceitação anterior
        }
    }

    // Ao clicar em aceitar, salva no localStorage e esconde o modal
    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookieAcceptedTime', new Date().getTime());
        hideCookieModal();
    });

    // Mostra o modal ao carregar a página, se necessário
    checkCookieAccepted();
});
