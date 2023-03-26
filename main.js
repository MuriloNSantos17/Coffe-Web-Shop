let search = document.querySelector('.search-box');

let searchIcon = document.querySelector('#search-icon');


searchIcon.addEventListener('click',(evt)=>{
    search.classList.toggle('active');
});