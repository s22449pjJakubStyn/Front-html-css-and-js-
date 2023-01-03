const hamburger=document.getElementById('hamburger');
const linki=document.getElementById('linki');

hamburger.addEventListener('click', ()=> {
    linki.classList.toggle('show');
});