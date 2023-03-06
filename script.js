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

// * Validar User y Contraseña
// function validate() {
//     var correo = document.getElementById("input-correo").value;
//     var contra = document.getElementById("input-pass").value;
//     if (correo == "ybermarlon@gmail.com" && contra == "62756606") {
//         alert("Contraseña Validada Corréctamente. Se ingresó como ADMINISTRADOR");
//         console.log(correo + " " + contra);
//         window.location("./admin/index.html");
//         return false;
//     } else if (correo == "cliente@gmail.com" && contra == "cliente") {
//         alert("Contraseña Validada Corréctamente. Se ingresó como CLIENTE");
//         window.location("./catalogo.html");
//         console.log(correo + " " + contra);
//         return false;
//     } else {
//         alert("Error de Credenciales. Intente Nuevamente")
//     }

// }

function validate() {
    let user = document.getElementById('input-correo').value;
    let clave = document.getElementById('input-pass').value;

    if (user == "ybermarlon@gmail.com" && clave == "123") {
        alert("Se Ingresó Como Administrador");
        window.location = "./admin/index.html";

        return false;
    }
    if (user == "user@gmail.com" && clave == "12") {
        window.location = "./cliente/catalogo.html";
        return false;
    } else {
        alert("Error de credenciales, inténtelo nuevamente.")
    }
}