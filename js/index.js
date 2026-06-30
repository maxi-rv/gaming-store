import { 
    consultar_sesion 
} from "../js/gestores/gestor_sesion.js";

window.addEventListener("load", function() {
    redireccionado();
});

function redireccionado() {
    const sesion = consultar_sesion();

    if (sesion === false) {
        window.location.href = "../html/index.html";
    }
}