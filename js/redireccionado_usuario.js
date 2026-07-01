import { 
    consultar_sesion 
} from "../js/gestores/gestor_sesion.js";

import {
    conseguir_rol_usuario,
} from "../js/gestores/gestor_cuentas.js"

window.addEventListener("load", function() {
    redireccionar_según_rol();
});

function redireccionar_según_rol() {
    let rol = conseguir_rol_usuario();
    let sesion = consultar_sesion();

    if (rol !== "Admin" && sesion === true) {
        window.location.href = "../html/catalogoProductos.html";
    }
}