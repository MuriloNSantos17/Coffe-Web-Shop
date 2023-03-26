let search = document.querySelector('.search-box');
let searchIcon = document.querySelector('#search-icon');

searchIcon.addEventListener('click',(evt)=>{
    evt.preventDefault();
    search.classList.toggle('active');
    navBar.classList.remove('active');
});

let navBar = document.querySelector('.navbar');
let menuIcon = document.getElementById('menu-icon')
menuIcon.addEventListener('click',(evt)=>{
    evt.preventDefault();
    navBar.classList.toggle('active');
    search.classList.remove('active');
})


window.onscroll = ()=>{
    navBar.classList.remove('active');
    search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow',window.scrollY >0);
})