const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


// aqui se toman los valores de los input a validar
const nombreInput = document.querySelector('input[name="nombre"]');
const usuarioInput = document.querySelector('input[name="usuario"]');
const telefonoInput = document.querySelector('input[name="telefono"]');
const correoInput = document.querySelector('input[name="correo"]');
const contraseniaInput = document.querySelector('input[name="contrasenia"]');



// Expresiones para validar los campos de letras, números yh correos
const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
const soloNumeros = /^\d{10}$/;
const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contraseniaValida = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Función para validar el nombre
function validarNombre(event) {
    if (!soloLetras.test(nombreInput.value)) {
        alert('El nombre solo puede contener letras.');
        event.preventDefault();
    }
}

// Función para validar el usuario
function validarUsuario(event) {
    if (!soloLetras.test(usuarioInput.value)) {
        alert('El usuario solo puede contener letras.');
        event.preventDefault();
    }
}

// Función para validar el teléfono
function validarTelefono(event) {
    if (!soloNumeros.test(telefonoInput.value)) {
        alert('El teléfono debe contener únicamente 10 números.');
        event.preventDefault();
    }
}

// Función para validar el correo
function validarCorreo(event) {
    if (!formatoCorreo.test(correoInput.value)) {
        alert('Ingrese un correo electrónico válido.');
        event.preventDefault();
    }
}

// Función para validar la contraseña
function validarContrasenia(event) {
    if (!contraseniaValida.test(contraseniaInput.value)) {
        alert('La contraseña debe tener al menos 8 caracteres, un número y un carácter especial.');
        event.preventDefault();
    }
}

// este evento hace que se ejecuten las funciones del formulario
formularioRegistro.addEventListener('submit', (event) => {
    validarNombre(event);
    validarUsuario(event);
    validarTelefono(event);
    validarCorreo(event);
    validarContrasenia(event);
});

