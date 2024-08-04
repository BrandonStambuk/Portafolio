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
