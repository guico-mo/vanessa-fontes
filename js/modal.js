document.addEventListener("DOMContentLoaded", function () {
    const cookieModal = document.getElementById('cookie-modal');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    function showCookieModal() {
        cookieModal.style.display = 'block';
    }

    function hideCookieModal() {
        cookieModal.style.display = 'none';
    }

    function checkCookieAccepted() {
        const lastAcceptance = localStorage.getItem('cookieAcceptedTime');
        if (lastAcceptance) {
            const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000;
            const currentTime = new Date().getTime();
            if (currentTime - parseInt(lastAcceptance) < sevenDaysInMillis) {
                hideCookieModal();
            } else {
                showCookieModal();
            }
        } else {
            showCookieModal();
        }
    }

    acceptCookiesBtn.addEventListener('click', function () {
        localStorage.setItem('cookieAcceptedTime', new Date().getTime());
        hideCookieModal();
    });

    checkCookieAccepted();
});
