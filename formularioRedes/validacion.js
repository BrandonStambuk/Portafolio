const redesAnadidas = [];

// Función para validar el formulario
function validarFormulario() {
    const nombre = document.getElementById('nombreUsuario').value;
    const contrasena = document.getElementById('contra').value;
    const redSocial = document.getElementById('redes-sociales').value;

    // Validar que los campos no estén vacíos
    if (!nombre || !contrasena || !redSocial) {
        mostrarModal('Por favor, completa todos los campos.');
        return;
    }

    // Validar que el nombre de usuario y la contraseña sean correctos
    if (nombre !== 'Brandon Stambuk' || contrasena !== '12345') {
        mostrarModal('Nombre de usuario o contraseña incorrectos.');
        return;
    }

    // Validar que la red social seleccionada sea LinkedIn
    if (redSocial !== 'linkedin') {
        mostrarModal('Solo se permite añadir LinkedIn como red social.');
        return;
    }

    // Verificar si la red social ya ha sido añadida
    if (redesAnadidas.includes(redSocial)) {
        mostrarModal('Ya has añadido esta red social.');
        return;
    }

    // Si todo está bien, añadir la red social al array
    redesAnadidas.push(redSocial);
    mostrarModal('Red social añadida correctamente.');
}

// Función para mostrar el modal
function mostrarModal(mensaje) {
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modal-message');
    const span = document.getElementsByClassName('close')[0];

    modalMessage.textContent = mensaje;
    modal.style.display = 'block';

    // Cuando el usuario haga clic en (x) o fuera del modal
    span.onclick = function() {
        modal.style.display = 'none';
        // Redirigir y añadir contenido solo si el mensaje es "Red social añadida correctamente"
        if (mensaje === 'Red social añadida correctamente.') {
            agregarRedSocial();
            window.location.href = '/index.html#redes'; // Redirigir a index.html en el directorio raíz
        }
    }

    // Cuando el usuario haga clic en cualquier parte fuera del modal, también cerrarlo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            // Redirigir y añadir contenido solo si el mensaje es "Red social añadida correctamente"
            if (mensaje === 'Red social añadida correctamente.') {
                agregarRedSocial();
                window.location.href = '/index.html#redes'; // Redirigir a index.html en el directorio raíz
            }
        }
    }
}

// Función para agregar el contenido HTML de la nueva red social
function agregarRedSocial() {
    // Guardar el contenido en localStorage para poder acceder a él desde index.html
    let storedRedes = JSON.parse(localStorage.getItem('redes')) || [];
    const newRed = `
        <div class="col">
            <div class="card">
                <img src="img/logoLinkedin.png" id="linkedin" alt="">
                <img src="img/headerLinkedin.jpg" id="image-post" alt="">
                <img src="img/post1.jpg" id="image-post" alt="">
            </div>
        </div>
    `;
    storedRedes.push(newRed);
    localStorage.setItem('redes', JSON.stringify(storedRedes));
}
let slideIndex = 0;

