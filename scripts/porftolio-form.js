valores = ['Proyecto Academico', 'Proyecto Personal', 'Proyecto Profesional', 'TypeScript', 'JavaScript', 'Java', 'Python', 'NextJS', 'ReactJS', 'Spring'];
function validatePorftfolioData(event) {
    event.preventDefault();
    title = document.querySelector('.contenedordatos input[type="text"]').value;
    repository = document.querySelector('.contenedordatos input[type="url"]').value; 
    description = document.getElementById('description').value;
    checkboxes = document.querySelectorAll('.checkbox-input input[type="checkbox"]:checked');
    categorias = Array.from(checkboxes).map(checkbox => valores[checkbox.value-1]);


    json = {
        title, 
        repository, 
        description,
        categorias
    };
    save(json);
}
function save(data) {
    if (localStorage.getItem('portfolio_id') == null) localStorage.setItem('portfolio_id', '0');
    index = localStorage.getItem('portfolio_id'); 
    localStorage.setItem(`portfolio_item_${index}`, JSON.stringify(data));
    index++; 
    localStorage.setItem('portfolio_id', index);    
}