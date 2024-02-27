$('#contact form').on('submit', function(event) {
    event.preventDefault(); // previene il ricaricamento della pagina
    // Recupera i dati del modulo
    const email = $('#email').val();
    const message = $('#textarea').val();
    var formData = new FormData(this);
    // Aggiungi i dati aggiuntivi necessari per l'invio dell'email
    formData.append('service_id', 'service_0tk5xf5');
    formData.append('template_id', 'template_4i41l34');
    formData.append('user_id', 'HxsgnYzPpogQw-tB9');
    formData.append('email', email);
    formData.append('message', message);

    // Effettua una richiesta AJAX per inviare l'email
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('La tua email è stata inviata!');
    }).fail(function(error) {
        alert('Ops... ' + JSON.stringify(error));
    });
});