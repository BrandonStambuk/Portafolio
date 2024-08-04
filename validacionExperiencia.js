const dialog = document.getElementById('login-dialog');
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const modalMessage = document.getElementById("modal-message");

function showLoginDialog() {
    dialog.showModal();
}

function validateForm(event) {
    event.preventDefault();
    const titulo = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const inicioMes = document.getElementById("inicioMes").value;
    const inicioAnio = document.getElementById("inicioAnio").value;
    const finMes = document.getElementById("finMes").value;
    const finAnio = document.getElementById("finAnio").value;
    const categoria = document.getElementById("categoria").value;

    if (titulo === "" || descripcion === "" || inicioMes === "" || inicioAnio === "" || finMes === "" || finAnio === "" || categoria === "") {
        modalMessage.textContent = "Por favor, completa todos los campos.";
        modal.style.display = "block";
    } else {
        modalMessage.textContent = "Experiencia añadida satisfactoriamente!";
        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
            window.location.href = "index.html";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                window.location.href = "index.html";
            }
        };
        return;
    }

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}