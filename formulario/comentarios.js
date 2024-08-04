document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-comentario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        const botonPresionado = event.submitter.value;

        if (botonPresionado === 'Cancelar') {
            formulario.reset(); // Limpiar el formulario
            window.location.href = '../index.html#comentarios';
            return;
        }
        
        const nombre = formulario.nombre.value.trim();
        const email = formulario.email.value.trim();
        const comentario = formulario.comentario.value.trim();

        if (!nombre || !email || !comentario) {
            mostrarModalError('Por favor, rellene todos los campos.');
            return;
        }

        // Validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarModalError('Ingrese un correo válido, ejemplo: @gmail, @hotmail');
            return;
        }

        // Crear la nueva tarjeta de comentario
        const nuevoComentario = `
            <div class="comentarios-comentario">
                    <div class="comentario-cabecera">
                        <div class="comentario-img">
                            <img src="./img/perfil.jfif" alt="perfil">
                        </div>
                        <div class="comentario-info">
                            <div class="comentario-info-union">
                                <p>${nombre}</p>
                                <p style="color: #fea609;">${email}</p>
                            </div>
                        </div>
                        <div class="comentario-responser">
                            <p><a href="#">Responder</a></p>
                        </div>
                    </div>
                    <div class="comentario-cuerpo">
                        <p>${comentario}</p>
                    </div>
                    <div class="comentario-pie">
                        <p>¿Te resultó útil?</p>
                        <p><i class="fas fa-thumbs-up"></i></p>
                        <p><i class="fas fa-thumbs-down"></i></p>
                    </div>
                </div>
        `;
        // Guardar la nueva tarjeta en localStorage
        localStorage.setItem('nuevoComentario', nuevoComentario);

        mostrarModalCorrecto('Comentario subido correctamente');
        return;
    }); 

    function mostrarModalError(mensaje) {
        const inc = document.getElementById('icon-modal');
        const incColor = document.getElementById('icon-color');
        const modalMensaje = document.querySelector('.modal-message');
        modalMensaje.textContent = mensaje;
        inc.classList.remove('fa-check-circle');
        inc.classList.add('fa-times');
        incColor.classList.remove('modal-icon-correct');
        incColor.classList.add('modal-icon-incorrect');
        document.getElementById('modal').style.display = 'block';
    }

    function mostrarModalCorrecto(mensaje) {
        const inc = document.getElementById('icon-modal');
        const incColor = document.getElementById('icon-color');
        const modalMensaje = document.querySelector('.modal-message');
        modalMensaje.textContent = mensaje;
        inc.classList.remove('fa-times');
        inc.classList.add('fa-check-circle');
        incColor.classList.remove('modal-icon-incorrect');
        incColor.classList.add('modal-icon-correct');
        document.getElementById('modal').style.display = 'block';
    }
    
    // Obtener el modal
    var modal = document.getElementById('errorModal');

    // Obtener el botón que cierra el modal
    var span = document.getElementsByClassName('close')[0];

    span.onclick = function() {
        const inc = document.getElementById('icon-modal');
        modal.style.display = 'none';
        if (inc.classList.contains('fa-check-circle')) {
            // Redirigir a la página de comentarios
            window.location.href = '../index.html#comentarios';
        }
    }

    // Obtener el modal
    var modal = document.getElementById('modal');

    // Cuando el usuario hace clic en cualquier lugar fuera del modal, cerrarlo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
        if (inc.classList.contains('fa-check-circle')) {
            // Redirigir a la página de comentarios
            window.location.href = '../index.html#comentarios';
        }
    }
});
