const button = document.getElementById('bus');
const goTo = document.getElementById('main');

button.addEventListener('click', () => {
    goTo.scrollIntoView({ behavior: 'smooth' }); 
});