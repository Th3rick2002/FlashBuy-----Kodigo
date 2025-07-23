// aside menu en dispositivos moviles
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

// interacción botones de las cards
const cardButtons = document.querySelectorAll('.button');
cardButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        button.style.backgroundColor = '#ff9900';
        button.textContent = 'Comprado';
    })
});

// cambio de color logo "FlashBuy"
const flashBuyLogo = document.getElementById('page_name');
if (flashBuyLogo){
    flashBuyLogo.addEventListener('click',()=>{
        flashBuyLogo.style.color = '#232f3e'
    })
}