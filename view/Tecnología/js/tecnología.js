// aside menu
const btn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const aside = document.getElementById('side-menu');

function openAsideMenu(){
    aside.classList.add('open');
}

function closeAsideMenu(){
    aside.classList.remove('open');
}

btn.addEventListener('click',openAsideMenu);
closeBtn.addEventListener('click',closeAsideMenu);