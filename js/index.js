import { 
    consultar_sesion 
} from "../js/gestores/gestor_sesion.js";

import {
    conseguir_rol_usuario,
} from "../js/gestores/gestor_cuentas.js"

window.addEventListener("load", function() {
    redireccionado_index();

});

function redireccionado_index() {
    const sesion = consultar_sesion();

    if (sesion === false) {
        window.location.href = "../html/index.html";
    }
}

