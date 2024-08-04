document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const numberOfSpheres = 10;
    const spheres = ['sphere1', 'sphere2'];

    for (let i = 0; i < numberOfSpheres; i++) {
        const sphere = document.createElement('div');
        sphere.classList.add('sphere');
        
        const randomColor = spheres[Math.floor(Math.random() * spheres.length)];
        sphere.classList.add(randomColor);

        // Generar posiciones aleatorias dentro del contenedor
        const randomX = Math.floor(Math.random() * (container.clientWidth - 50));
        const randomY = Math.floor(Math.random() * (container.clientHeight - 50));

        sphere.style.left = `${randomX}px`;
        sphere.style.top = `${randomY}px`;
        
        container.appendChild(sphere);

        // Hacer visibles las esferas después de añadirlas
        setTimeout(() => {
            sphere.classList.add('visible');
        }, 100);
    }


    // Manejar el click en el icono de la cámara
    /*const camaraIcon = document.getElementById('camaraIcon');
    camaraIcon.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarPopup();
    });*/
});

