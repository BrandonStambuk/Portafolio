// ESTILOS SIMPLES PARA BUSQUEDA: 

window.onload = () => {
    if (localStorage.getItem('portfolio_id') == null) localStorage.setItem('portfolio_id', 0);
    len = localStorage.getItem('portfolio_id'); 
    for (i = 0; i<len; i++) 
    if (localStorage.getItem(`portfolio_item_${i}`) != null) {
        data = JSON.parse(localStorage.getItem(`portfolio_item_${i}`)); 
        card = document.createElement('div'); 
        tags = '';
        data['categorias'].forEach(category => {
            tags = tags+`<span class="badge">${category}</span>`;
        });
        card.innerHTML =  `
            <a class="portfolio-links" href="${data['repository']}">
                <div class="card-body">
                    <div class="card-title">
                        <p class="display-4">${data['title']}</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-column align-self-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v11.488M7.515 11.25L12 15.75m4.485-4.5L12 11.25" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v11.488M7.515 11.25L12 15.75m4.485-4.5L12 11.25" />
                            </svg>
                        </div>
                        <div class="card-text">        
                            <p class="lead">${data['description']}</p>
                        </div>
                        <img src="assets/github.svg" alt="Logo de GitHub">
                    </div>
                    <div class="tags">
                        ${tags}
                    </div>
                </div>
            </a>
        `
        document.querySelector('.portfolio-body').appendChild(card);
        card.classList.add('card');
    }
};

searchInput = document.querySelector('.portfolio-search-form input[type="search"]');
searchInput.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        event.preventDefault(); 
        searchPortfolio();
    }
});

filters = ['simple', 'simple', 'simple', 'simple'];
function addFilter(str, index) {
    filters[index] = str;
    if (index == 1) {
        filters[index] = 'proyecto '+filters[index];
    }
    applyFilters(getFilters(filters));  
    document.querySelector('.portfolio .clear-filter-button').classList.remove('hide');
    applyToToggles(filters);
}

function getFilters(filters) {
    aux = []; 
    for (i = 0; i<filters.length; i++) 
        if (filters[i]!='simple') {
            aux.push(filters[i]);
        }
    return aux;
}

function applyFilters(filters) {
    cards = document.querySelectorAll('.portfolio .card');
    cards.forEach(card => {
        matches = 0;
        badges = card.querySelector('.tags'); 
        badges.querySelectorAll('.badge').forEach(badge => {
            value = badge.textContent.toLowerCase(); 
            if (filters.includes(value)) {
                matches+=1;
            }
        });
        if (matches < filters.length) {
            card.classList.add('hide');
        } else {
            card.classList.remove('hide');
        }
    });
}

function cleanFilter() {
    filters = ['simple', 'simple', 'simple', 'simple']; 
    document.querySelector('.portfolio .clear-filter-button').classList.add('hide');
    applyFilters([]);
    applyToToggles(filters); 
}
function applyToToggles(filters) {
    toggles = Array.from(document.querySelectorAll('.portfolio-header .btn-group'));
    for (i = 1; i<filters.length; i++) {
        button = toggles[i-1].querySelector('.dropdown-toggle'); 
        valueF = 'CATEGORIAS'; 
        if (i==2) valueF = 'LENGUAJE'; 
        if (i==3) valueF = 'FRAMEWORK';

        if (filters[i] == 'simple') {
            button.textContent = valueF;
            button.classList.remove('selected-option');
        } else {
            button.textContent = filters[i].toUpperCase();
            button.classList.add('selected-option');
        }
    }
}

function switchOrderDateForm() {
    button = document.querySelector('.portfolio-header .ms-auto .btn'); 
    if (button.textContent.split(' ').includes('RECIENTE')) {
        button.innerHTML = 'MAS ANTIGUO <i class="fa-solid fa-up-long hide up-icon"></i><i class="fa-solid fa-down-long down-icon"></i>';
    } else {
        button.innerHTML = 'MAS RECIENTE <i class="fa-solid fa-up-long up-icon"></i><i class="fa-solid fa-down-long hide down-icon"></i>';
    }
    invertCards(); 
}
function invertCards() {
    cards = Array.from(document.querySelectorAll('.portfolio .card'));
    cards.reverse();
    portfolioBody = document.querySelector('.portfolio-body');
    portfolioBody.innerHTML = '';
    cards.forEach(card => {
        portfolioBody.appendChild(card);
    });    
}

function searchPortfolio() {
    value = document.querySelector('.portfolio-search-form input[type="search"]').value.trim(); 
    cards = Array.from(document.querySelectorAll('.portfolio-body .card'));
    cards.forEach(card => {
        flag = false;
        title = card.querySelector('.card-title').innerHTML; 
        body = card.querySelector('.card-text').innerHTML;
        
        flag |= title.includes(value);
        flag |= body.includes(value);

        if (!flag) {
            card.classList.add('hide');
        } else {
            card.classList.remove('hide');
        }
    });
}