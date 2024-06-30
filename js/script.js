document.addEventListener('DOMContentLoaded', function () {
    var currentYear = new Date().getFullYear();
    var copyrightYearElement = document.getElementById('copyrightYear');

    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});