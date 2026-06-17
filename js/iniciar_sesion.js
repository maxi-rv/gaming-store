let username = document.getElementById("inputUsername")
let password = document.getElementById("inputPassword")

let data = localStorage.getItem("cuentas")
let cuentas = JSON.parse(data)


function validacion() {
let usuario = username.value;
let contrasenia = password.value;

let usuarioEncontrado = false;

for (let i = 0; i < cuentas.length; i++) {

    if (cuentas[i].usename === usuario) {
        usuarioEncontrado = true;

        if (cuentas[i].contraseña === contrasenia) {
            cuentas[i].sesion = true;

            localStorage.setItem("cuentas",JSON.stringify(cuentas));

            return;

        } else {
            mostrar_error(password,"error_inicio_password","La contraseña es incorrecta");

            return;
        }
    }
}

if (!usuarioEncontrado) {
    mostrar_error(username,"error_inicio_username","El nombre de usuario es incorrecto");
}

}

function mostrar_error(input,id_error,mensaje){
    input.classList.add("is-invalid")
    document.getElementById(id_error).textContent = mensaje
}

