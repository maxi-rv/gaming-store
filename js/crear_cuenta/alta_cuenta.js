import{
    agregar_cuenta,
    conseguir_rol_usuario,
} from "../gestores/gestor_cuentas.js"

import{
    datos_validos,
    limpiar_estados,
} from "../crear_cuenta/validacion_alta_cuenta.js"

const username = document.getElementById("input_register_username")
const email = document.getElementById("input_register_email")
const telefono = document.getElementById("input_register_telefono")
const password = document.getElementById("input_register_Password")

window.addEventListener("load", function(){
    inicializar()
})

function inicializar(){
    const form = document.getElementById("formulario_registro")

    form.addEventListener("submit", function(event) {
        event.preventDefault()
        
        limpiar_estados()
 
        if (datos_validos()) {
            
            let usuario = username.value
            let correo = email.value
            let tel = telefono.value
            let contrasenia = password.value

            agregar_cuenta(usuario,contrasenia, correo,tel)
            alert("Usuario registrado correctamente")
            form.reset()
            limpiar_estados()
        }
    });
}
