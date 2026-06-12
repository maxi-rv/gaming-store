window.addEventListener("load", function(){
    inicializar()
})

function inicializar(){
    const form = document.getElementById("formulario_registro")

    form.addEventListener("submit", function(event) {
        event.preventDefault()
        
        limpiar_estados()

        if (datos_validos()) {
            alert("Usuario registrado correctamente")
            form.reset()
            limpiar_estados()
        }
    });
}

function limpiar_estados() {
    const inputs = document.querySelectorAll(".form-control, .form-check-input")
    for (const input of inputs) {
        input.classList.remove("is-invalid")
        input.classList.remove("is-valid")
    }
}

function datos_validos(){
    let formulario_valido = true

    const username = document.getElementById("input_register_username")
    const email = document.getElementById("input_register_email")
    const telefono = document.getElementById("input_register_telefono")
    const password = document.getElementById("input_register_Password")
    const terminos = document.getElementById("terminos_y_condiciones")

    if (validator.isEmpty(username.value.trim())){
        mostrar_error(username,"error_username","El nombre de usuario es obligatorio")
        formulario_valido = false
    }else{
        mostrar_exito(username)
    }

    if (!validator.isEmail(email.value.trim())){
        mostrar_error(email,"error_email","El email es invalido")
        formulario_valido = false
    }else{
        mostrar_exito(email)
    }

    if (!validator.isMobilePhone(telefono.value, "es-AR")) {
        mostrar_error(telefono, "error_telefono", "numero de telefono invalido")
        formulario_valido = false
    } else {
        mostrar_exito(telefono)
    }

    if (!validator.isStrongPassword(password.value, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0})) {
        mostrar_error(password, "error_password", "Contraseña invalida")
        formulario_valido = false
    } else {
        mostrar_exito(password)
    }

    if (!terminos.checked){
        mostrar_error (terminos,"error_terminos","Debe aceptar los terminos y condiciones")
        formulario_valido = false
    }else{
        mostrar_exito(terminos)
    }

    return formulario_valido
}

function mostrar_error(input,id_error,mensaje){
    input.classList.add("is-invalid")
    document.getElementById(id_error).textContent = mensaje
}

function mostrar_exito(input) {
    input.classList.add("is-valid")
}