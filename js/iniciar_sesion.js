let username = document.getElementById("inputUsername")
let password = document.getElementById("inputPassword")

window.addEventListener("load", function(){
    inicializar()
})

let data = localStorage.getItem("cuentas")
let cuentas = JSON.parse(data)

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

function limpiar_estados() {
    const inputs = document.querySelectorAll(".form-control")
    for (const input of inputs) {
        input.classList.remove("is-invalid")
    }
}

function validacion() {
let usuario = username.value;
let contrasenia = password.value;

let usuarioEncontrado = false;

for (let i = 0; i < cuentas.length; i++) {

    if (cuentas[i].username === usuario) {
        usuarioEncontrado = true;

        if (cuentas[i].contraseña === contrasenia) {
            cuentas[i].sesion = true;

            localStorage.setItem("cuentas",JSON.stringify(cuentas));

            return true;

        } else {
            mostrar_error(password,"error_inicio_password","La contraseña es incorrecta");

            return false;
        }
    }
}

if (!usuarioEncontrado) {
    mostrar_error(username,"error_inicio_username","El nombre de usuario es incorrecto");
    mostrar_error(password,"error_inicio_password","La contraseña es incorrecta");
    return false
}

}

function mostrar_error(input,id_error,mensaje){
    input.classList.add("is-invalid")
    document.getElementById(id_error).textContent = mensaje
}

