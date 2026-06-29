import {
    validacion,
    limpiar_estados,
}from "../inicio_sesion/validacion_sesion.js"

let username = document.getElementById("inputUsername")
let password = document.getElementById("inputPassword")

window.addEventListener("load", function(){
    inicializar()
})

function inicializar(){
    const form = document.getElementById("formulario_inicio_sesion")

    form.addEventListener("submit", function(event) {
        event.preventDefault()
        
        limpiar_estados()

        if (validacion()) {
            window.location.href = "../html/catalogoProductos.html";
            form.reset()
            limpiar_estados()
        }
    });
}

