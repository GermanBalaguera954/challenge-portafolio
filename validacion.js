document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            alert("Formulario enviado exitosamente!");
            // Aquí puedes agregar la lógica para enviar el formulario usando AJAX, Fetch API, etc.
            form.reset(); // Resetea el formulario después de la validación exitosa
        }
    });

    function validateForm() {
        let isValid = true;

        // Validar Nombre
        if (name.value.trim() === "") {
            isValid = false;
            showError(name, "El nombre es obligatorio");
        } else {
            clearError(name);
        }

        // Validar Correo Electrónico
        if (email.value.trim() === "") {
            isValid = false;
            showError(email, "El correo electrónico es obligatorio");
        } else if (!isValidEmail(email.value)) {
            isValid = false;
            showError(email, "Ingrese un correo electrónico válido");
        } else {
            clearError(email);
        }

        // Validar Mensaje
        if (message.value.trim() === "") {
            isValid = false;
            showError(message, "El mensaje es obligatorio");
        } else {
            clearError(message);
        }

        return isValid;
    }

    function showError(element, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.innerText = message;
        if (!element.nextElementSibling || !element.nextElementSibling.classList.contains("error-message")) {
            element.insertAdjacentElement("afterend", error);
        }
    }

    function clearError(element) {
        if (element.nextElementSibling && element.nextElementSibling.classList.contains("error-message")) {
            element.nextElementSibling.remove();
        }
    }

    function isValidEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
