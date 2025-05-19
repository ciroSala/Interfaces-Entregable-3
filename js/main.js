const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const body = document.querySelector('body');
const form = document.getElementById('form');
const mensajeInput = document.getElementById('mensaje');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('tel');
const paisInput = document.getElementById('pais');
const empresaInput = document.getElementById('empresa');
const sizeInput = document.getElementById('size');
const cargoInput = document.getElementById('cargo');
const industriaInput = document.getElementById('industria');

const nombreApellidoPattern = /^[a-zA-Z\s]+$/;  // Para verificar que solo haya letras y espacios
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Para verificar un email válido
const telefonoPattern = /^\+?(\d[\s-]?){7,15}$/; // Para verificar un teléfono válido

menu.addEventListener('click', function() {
    nav.classList.add('visible');
    overlay.classList.add('visible');
    body.classList.add('bloquear-scroll');
});

overlay.addEventListener('click', function() { 
    nav.classList.remove('visible');
    overlay.classList.remove('visible');
    body.classList.remove('bloquear-scroll');
});

// Función para mostrar mensajes de error
function mostrarError(inputElement, mensaje) {
    const divError = document.createElement('div');
    divError.className = 'divError';
    divError.textContent = mensaje;
    // Remueve cualquier mensaje de error anterior
    const existeError = inputElement.parentElement.querySelector('.divError');
    if (existeError) {
        existeError.remove();
    }
    inputElement.classList.add('error');
    inputElement.parentElement.appendChild(divError);
}

// Función para eliminar mensajes de error y quitar la clase de error
function limpiarError(inputElement) {
    const divError = inputElement.parentElement.querySelector('.divError');
    if (divError) {
        divError.remove();
    }
    inputElement.classList.remove('error');
}

function validarMensaje() {
    limpiarError(mensajeInput);
    if (mensajeInput.value.trim() === '') {
        mostrarError(mensajeInput, 'El mensaje es obligatorio.');
        return false;
    }
    return true;
}

function validarNombre() {
    limpiarError(nombreInput);
    if (nombreInput.value.trim() !== '' && !nombreApellidoPattern.test(nombreInput.value.trim())) {
        mostrarError(nombreInput, 'El nombre solo puede contener letras y espacios.');
        return false;
    }
    return true;
}

function validarApellido() {
    limpiarError(apellidoInput);
    if (apellidoInput.value.trim() !== '' && !nombreApellidoPattern.test(apellidoInput.value.trim())) {
        mostrarError(apellidoInput, 'El apellido solo puede contener letras y espacios.');
        return false;
    }
    return true;
}

function validarEmail() {
    limpiarError(emailInput);
    if (!emailPattern.test(emailInput.value.trim())) {
        mostrarError(emailInput, 'Ingrese un email válido.');
        return false;
    }
    return true;
}

function validarTelefono() {
    limpiarError(telefonoInput);
    if (telefonoInput.value.trim() !== '' && !telefonoPattern.test(telefonoInput.value.trim())) {
        mostrarError(telefonoInput, 'Ingrese un teléfono válido.');
        return false;
    }
    return true;
}

function validarPais() {
    limpiarError(paisInput);
    if (paisInput.value.trim() !== '' && !nombreApellidoPattern.test(paisInput.value.trim())) {
        mostrarError(paisInput, 'El país solo puede contener letras y espacios.');
        return false;
    }
    return true;
}

function validarEmpresa() {
    limpiarError(empresaInput);
    if (empresaInput.value.trim() !== '' && !nombreApellidoPattern.test(empresaInput.value.trim())) {
        mostrarError(empresaInput, 'El nombre de la empresa solo puede contener letras y espacios.');
        return false;
    }
    return true;
}

function validarSize() {
    limpiarError(sizeInput);
    if (sizeInput.value.trim() !== '' && !/^\d+$/.test(sizeInput.value.trim())) {
        mostrarError(sizeInput, 'El tamaño de la compañía debe ser un número.');
        return false;
    }
    return true;
}

function validarCargo() {
    limpiarError(cargoInput);
    if (cargoInput.value.trim() !== '' && !nombreApellidoPattern.test(cargoInput.value.trim())) {
        mostrarError(cargoInput, 'El cargo solo puede contener letras y espacios.');
        return false;
    }
    return true;
}

function validarIndustria() {
    limpiarError(industriaInput);
    if (industriaInput.value.trim() !== '' && !nombreApellidoPattern.test(industriaInput.value.trim())) {
        mostrarError(industriaInput, 'La industria solo puede contener letras y espacios.');
        return false;
    }
    return true;
}

mensajeInput.addEventListener('input', validarMensaje);
nombreInput.addEventListener('input', validarNombre);
apellidoInput.addEventListener('input', validarApellido);
emailInput.addEventListener('input', validarEmail);
telefonoInput.addEventListener('input', validarTelefono);
paisInput.addEventListener('input', validarPais);
empresaInput.addEventListener('input', validarEmpresa);
sizeInput.addEventListener('input', validarSize);
cargoInput.addEventListener('input', validarCargo);
industriaInput.addEventListener('input', validarIndustria);


form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Formulario enviado');
    // Validar todos los campos antes de enviar el formulario
    const esMensajeValido = validarMensaje();
    const esNombreValido = validarNombre();
    const esApellidoValido = validarApellido();
    const esEmailValido = validarEmail();
    const esTelefonoValido = validarTelefono();
    const esPaisValido = validarPais();
    const esEmpresaValido = validarEmpresa();
    const esSizeValido = validarSize();
    const esCargoValido = validarCargo();
    const esIndustriaValido = validarIndustria();

    if (esMensajeValido && esNombreValido && esApellidoValido && esEmailValido && esTelefonoValido && esPaisValido && esEmpresaValido && esSizeValido && esCargoValido && esIndustriaValido) {
        //form.submit();
        console.log('Formulario válido, enviando datos...');
    } else {
        console.log('Formulario inválido, por favor corrija los errores.');
    }
});


