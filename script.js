let bb = false;
document.addEventListener('DOMContentLoaded', function() {
    const comentariosGrilla = document.querySelector('.comentarios-grilla');

    // Verificar si hay un nuevo comentario en localStorage
    const nuevoComentario = localStorage.getItem('nuevoComentario');
    if (nuevoComentario) {
        var cOculto3 = document.getElementById('c-oculto-3');
        // Insertar la nueva tarjeta en la grilla de comentarios
        comentariosGrilla.insertAdjacentHTML('afterbegin', nuevoComentario);
        // Limpiar el localStorage
        localStorage.removeItem('nuevoComentario');
        if(cOculto3) {
            cOculto3.style.display = 'none';
            bb = true;
        }   
    }
});


let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('experienciasCarousel');
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        const { titulo, descripcion, inicioMes, inicioAnio, finMes, finAnio, categoria, images } = formData;

        const item = document.createElement('a');
        item.className = 'item';
        item.href = 'experienciaCard.html';
        item.dataset.categoria = categoria;

        item.innerHTML = `
            <h3>${categoria === 'laboral' ? 'Experiencia Laboral' : categoria === 'academico' ? 'Experiencia Académica' : 'Actividad Extracurricular'}</h3>
            <h4>${titulo}</h4>
            <span class="casa">${descripcion}</span>
            <span class="fecha">${inicioMes}/${inicioAnio} - ${finMes}/${finAnio}</span>
            <p>${descripcion}</p>
        `;

        /*if (images && images.length > 0) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            images.forEach(image => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = titulo;
                imageContainer.appendChild(img);
            });
            item.appendChild(imageContainer);
        }*/

        container.appendChild(item);
    }

    const items = container.querySelectorAll('.item');
    if (items.length > 3) {
        document.querySelector('.carousel-control.prev').style.display = 'block';
        document.querySelector('.carousel-control.next').style.display = 'block';
    } else {
        document.querySelector('.carousel-control.prev').style.display = 'none';
        document.querySelector('.carousel-control.next').style.display = 'none';
    }
    
});

let currentIndex = 0;

function moveCarousel(direction) {
    const container = document.getElementById('experienciasCarousel');
    const items = container.querySelectorAll('.item');
    const totalItems = items.length;
    const itemsPerSlide = 3;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalItems - itemsPerSlide;
    } else if (currentIndex > totalItems - itemsPerSlide) {
        currentIndex = 0;
    }

    const offset = -currentIndex * (100 / itemsPerSlide);
    container.style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.btn-filtro');
    const items = document.querySelectorAll('.item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-categoria');
            
            items.forEach(item => {
                if (category === 'todos' || item.getAttribute('data-categoria') === category) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function mostrarMasOMenosComentarios() {
    var botonMasOMenosComentarios = document.getElementById('boton-mostrar-comentarios');
    var cOculto1 = document.getElementById('c-oculto-1');
    var cOculto2 = document.getElementById('c-oculto-2');
    var cOculto3 = document.getElementById('c-oculto-3');
    if (cOculto1.style.display === 'none') {
        cOculto1.style.display = '';
        cOculto2.style.display = '';
        if(bb) cOculto3.style.display = '';
        botonMasOMenosComentarios.innerHTML = '<i class="fas fa-chevron-up"></i> Ocultar comentarios';
    } else {
        cOculto1.style.display = 'none';
        cOculto2.style.display = 'none';
        if(bb) cOculto3.style.display = 'none';
        botonMasOMenosComentarios.innerHTML = '<i class="fas fa-chevron-down"></i> Más comentarios';
    }
}
