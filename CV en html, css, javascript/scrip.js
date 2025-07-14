// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    
    // Modal de bienvenida
    window.onload = function () {
    const modal = document.getElementById("welcomeModal");
    const closeBtn = modal.querySelector(".close");

    modal.style.display = "block";

    // Cerrar al hacer clic en la X
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Cerrar al hacer clic fuera del modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
};

    // MENÚ DE NAVEGACIÓN RESPONSIVO

    // Se selecciona el botón de menú (ícono de hamburguesa)
    const menuToggle = document.querySelector('.menu-toggle');

    // Se selecciona el contenedor del menú de navegación
    const mainNav = document.querySelector('.main-nav');

    // Si existen ambos elementos (por seguridad)
    if (menuToggle && mainNav) {
        // Al hacer clic en el botón, se alterna la clase "active"
        // Esto muestra u oculta el menú en pantallas pequeñas
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });

        // Cuando se hace clic en cualquier enlace dentro del menú
        // Se cierra automáticamente el menú (muy útil en móviles)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }

    // MODAL DE CONTACTO Y FORMULARIO

    // Se seleccionan los elementos del DOM necesarios
    const contactModal = document.getElementById('contactModal'); // Modal completa
    const openContactModalBtn = document.getElementById('openContactModal'); // Botón "Contáctame"
    const closeButton = document.querySelector('.close-button'); // Botón para cerrar (X)
    const contactForm = document.getElementById('contactForm'); // Formulario de contacto

    // Verificamos que todos existan antes de usar
    if (openContactModalBtn && contactModal && closeButton && contactForm) {

        // Al hacer clic en "Contáctame", se muestra el modal
        openContactModalBtn.addEventListener('click', function() {
            contactModal.classList.add('show'); // Asume que "show" hace visible el modal con CSS
        });

        // Al hacer clic en la "X", se oculta el modal
        closeButton.addEventListener('click', function() {
            contactModal.classList.remove('show');
        });

        // Si se hace clic fuera del contenido (sobre el fondo gris oscuro), se cierra el modal
        window.addEventListener('click', function(event) {
            if (event.target == contactModal) {
                contactModal.classList.remove('show');
            }
        });

        // VALIDACIÓN DEL FORMULARIO
   
        // Cuando se envía el formulario
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío tradicional del formulario

            let isValid = true; // Bandera para validar todos los campos

            // --- Validación del campo Nombre ---
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Por favor, introduce tu nombre.';
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }

            // --- Validación del campo Email ---
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');

            // Expresión regular para validar email básico
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Por favor, introduce tu correo electrónico.';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            // --- Validación del campo Mensaje ---
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Por favor, introduce tu mensaje.';
                messageError.style.display = 'block';
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                messageError.textContent = 'El mensaje debe tener al menos 10 caracteres.';
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageError.style.display = 'none';
            }

            // --- Si todo es válido ---
            if (isValid) {
                // Aquí podrías enviar los datos con fetch, axios, etc.
                // En este caso, solo mostramos un mensaje de éxito
                alert('¡Mensaje enviado con éxito! Gracias por contactarme.');

                // Limpia los campos del formulario
                contactForm.reset();

                // Cierra el modal
                contactModal.classList.remove('show');
            }
        });
    }
});
