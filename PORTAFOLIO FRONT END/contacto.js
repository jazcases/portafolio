/*Validación del formulario de contacto*/
const form = document.querySelector(".contact-form"),
    user_name = document.querySelector("#user_name"),
    email = document.querySelector("#email"),
    subject = document.querySelector("#asunto"),
    message = document.querySelector("#mensaje"),
    sendBtn = document.querySelector("#btn");

sendBtn.addEventListener("click", (e) => {
    let empty = "";
    if (![user_name.value, email.value, subject.value, message.value].includes(empty)) {
        swal("Oops!", "Esta sección está en desarrollo. Por ahora puedes enviarme un mensaje al correo electrónico: vasilescu288@gmail.com :)", "error");
        e.preventDefault();
        form.reset();
    }
});