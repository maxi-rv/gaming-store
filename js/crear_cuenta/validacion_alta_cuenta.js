const username = document.getElementById("input_register_username")
const email = document.getElementById("input_register_email")
const telefono = document.getElementById("input_register_telefono")
const password = document.getElementById("input_register_Password")
const terminos = document.getElementById("terminos_y_condiciones")

export function limpiar_estados() {
    const inputs = document.querySelectorAll(".form-control, .form-check-input")
    for (const input of inputs) {
        input.classList.remove("is-invalid")
    }
}

export function datos_validos(){
    let formulario_valido = true

    if (validator.isEmpty(username.value.trim())){
        mostrar_error(username,"error_username","El nombre de usuario es obligatorio")
        formulario_valido = false
    }

    if (!validator.isEmail(email.value.trim())){
        mostrar_error(email,"error_email","El email es invalido")
        formulario_valido = false
    }

    if (!validator.isMobilePhone(telefono.value, "es-AR")) {
        mostrar_error(telefono, "error_telefono", "Numero de telefono invalido")
        formulario_valido = false
    }

    if (!validator.isStrongPassword(password.value, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0})) {
        mostrar_error(password, "error_password", "La contraseña debe tener al menos 8 letras, 1 minuscula,1 mayuscula, 1 numero y 1 simbolo ")
        formulario_valido = false
    }

    if (!terminos.checked){
        mostrar_error (terminos,"error_terminos","Debe aceptar los terminos y condiciones")
        formulario_valido = false
    }

    return formulario_valido
}

function mostrar_error(input,id_error,mensaje){
    input.classList.add("is-invalid")
    document.getElementById(id_error).textContent = mensaje
}
