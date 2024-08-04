valores = ['Proyecto Academico', 'Proyecto Personal', 'Proyecto Profesional', 'TypeScript', 'JavaScript', 'Java', 'Python', 'NextJS', 'ReactJS', 'Spring'];
const isValidURL = urlString => {
    regex = /^(https?:\/\/)(www\.)?((github\.com)|(gitlab\.com))\/?.*/;
    return regex.test(urlString);
}
function validatePorftfolioData(event) {
    event.preventDefault();
    title = document.querySelector('.contenedordatos input[type="text"]').value;
    repository = document.querySelector('.contenedordatos input[type="url"]').value; 
    description = document.getElementById('description').value;
    checkboxes = document.querySelectorAll('.checkbox-input input[type="checkbox"]:checked');
    categorias = Array.from(checkboxes).map(checkbox => valores[checkbox.value-1]);

    if (title == '' || repository == '' || categorias.length==0) {
        mostrarModal('Existen campos vacio en tu formulario, por favor llenalos');
        return;
    }
    if (!isValidURL(repository)) {
        mostrarModal('La url introducida, no es una url valida'); 
        return;
    }
    if (checkboxes[0]>3) {
        mostrarModal('Debe seleccionar una de las primeras 3 categorias'); 
        return;
    }

    json = {
        title, 
        repository, 
        description,
        categorias
    };
    save(json);
    mostrarModal('Se agrego correctamente el proyecto!');
    setInterval(()=> {
        location.reload()
    }, 3500);
}
function save(data) {
    if (localStorage.getItem('portfolio_id') == null) localStorage.setItem('portfolio_id', '0');
    index = localStorage.getItem('portfolio_id'); 
    localStorage.setItem(`portfolio_item_${index}`, JSON.stringify(data));
    index++; 
    localStorage.setItem('portfolio_id', index);    
}
function mostrarModal(mensaje) {
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modal-message');
    const span = document.getElementsByClassName('close')[0];

    modalMessage.textContent = mensaje;
    modal.style.display = 'block';

    // Cuando el usuario haga clic en (x) o fuera del modal
    span.onclick = function() {
        modal.style.display = 'none';
        // Redirigir solo si el mensaje es "Red social añadida correctamente"
        if (mensaje === 'Red social añadida correctamente.') {
            window.location.href = '/index.html#contacto'; // Redirigir a index.html en el directorio raíz
        }
    }

    // Cuando el usuario haga clic en cualquier parte fuera del modal, también cerrarlo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            // Redirigir solo si el mensaje es "Red social añadida correctamente"
            if (mensaje === 'Red social añadida correctamente.') {
                window.location.href = '/index.html#contacto'; // Redirigir a index.html en el directorio raíz
            }
        }
    }
}
