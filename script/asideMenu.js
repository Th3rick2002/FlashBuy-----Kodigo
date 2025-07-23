// aside menu
const btn = document.getElementById('hamburger-btn')
const closeBtn = document.getElementById('close-btn')
const aside = document.getElementById('side-menu')

function toggleMenu() {
    aside.classList.toggle('open');
}

function closeMenu() {
    aside.classList.remove('open');
}

btn.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', closeMenu)