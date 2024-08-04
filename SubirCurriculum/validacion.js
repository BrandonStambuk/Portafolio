/*validaciones si todos los campos estan completos*/
function validar(){
    const descripcion = document.getElementById("descripcion").value;
    const fecha = document.getElementById("fecha").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;   
    
    if(!descripcion || !fecha || !telefono || !email || !website || !linkedin || !github){
        mostrarModal("Por favor complete todos los campos");
        return;
    }else{
        mostrarModal("Formulario enviado con exito");
        return;
    }    
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
        if (mensaje === 'Formulario enviado con exito') {
            agregarRedSocial();
            window.location.href = '/index.html#sobaremi'; // Redirigir a index.html en el directorio raíz
        }
    }

    // Cuando el usuario haga clic en cualquier parte fuera del modal, también cerrarlo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            if (mensaje === 'Formulario enviado con exito') {
                cambiarDatos();
                window.location.href = '/index.html#sobremi'; // Redirigir a index.html en el directorio raíz
            }
        }
    }
    /*actualizar los datos del formulario*/
    function cambiarDatos(){
        const descripcion = document.getElementById("descripcion").value;
        const fecha = document.getElementById("fecha").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;
        const website = document.getElementById("website").value;
        const linkedin = document.getElementById("linkedin").value;
        const github = document.getElementById("github").value;
        
        document.getElementById("descripcion").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("email").value = "";
        document.getElementById("website").value = "";
        document.getElementById("linkedin").value = "";
        document.getElementById("github").value = "";
    }
}