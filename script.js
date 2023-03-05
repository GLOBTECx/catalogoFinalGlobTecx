// * Abrir y Cerrar Los Formularios Login y Register
const evolutara = document.querySelector('.evolutara');
const linkLogin = document.querySelector('.entrar-login');
const linkRegister = document.querySelector('.entrar-registrar');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

linkRegister.addEventListener('click', () => {
    evolutara.classList.add('active');
});

linkLogin.addEventListener('click', () => {
    evolutara.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    evolutara.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    evolutara.classList.remove('active-popup');
});