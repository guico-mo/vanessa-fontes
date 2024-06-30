document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var formData = new FormData(this);
            var object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            var json = JSON.stringify(object);

            fetch('https://script.google.com/macros/s/AKfycbyd0Yrr_nOm7eaLY1rG1lxafsq84Qf8QWx1RaObebA-EFi6f2OhdIinKz_ep43edkgu/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: json
            })
                .then(() => {
                    alert('Formulário enviado com sucesso!');
                    form.reset(); // Limpa o formulário após o envio bem-sucedido
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Ocorreu um erro ao enviar o formulário.');
                });
        });
    } else {
        console.error('Elemento do formulário não encontrado.');
    }
});
