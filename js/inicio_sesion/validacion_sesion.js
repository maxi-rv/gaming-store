import{
    conseguir_cuenta_login,
    conseguir_estado_cuenta,
} from "../gestores/gestor_cuentas.js"

import{
    iniciar_sesion
}from "../gestores/gestor_sesion.js"

let username = document.getElementById("inputUsername");
let password = document.getElementById("inputPassword");

export function limpiar_estados() {
    const inputs = document.querySelectorAll(".form-control");
    for (const input of inputs) {
        input.classList.remove("is-invalid");
    }
}

export function validacion() {
    let usuario = username.value
    let contrasenia = password.value
    
    let estado = conseguir_estado_cuenta(usuario);
    const resultado = conseguir_cuenta_login(usuario, contrasenia);

    if (typeof resultado === "object") {

        if (estado === false) {
            mostrar_error(username, "error_inicio_username", "La cuenta se encuentra inhabilitada");
            return false;
        }

        iniciar_sesion(resultado.username);
        return true;
    }

    if (resultado === -1) {
        mostrar_error(username,"error_inicio_username","El nombre de usuario es incorrecto");
    } else if (resultado === -2) {
        mostrar_error(password,"error_inicio_password","La contraseña es incorrecta");
    }

    return false
}

function mostrar_error(input,id_error,mensaje){
    input.classList.add("is-invalid");
    document.getElementById(id_error).textContent = mensaje;
}