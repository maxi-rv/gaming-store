import {
    consultar_sesion,
    cerrar_sesion,
    
} from "../js/gestores/gestor_sesion.js";

import {
    conseguir_rol_usuario,
} from "../js/gestores/gestor_cuentas.js"

let txt_sesion = document.getElementById("txt_sesion")
let btn_accion_admin = document.getElementById("buttonAdminActions")

window.addEventListener("load", function(){
    modificar_btn_sesion()
    modificar_btn_rol()

    document.getElementById("linkIniciarSesion").addEventListener("click", function(i){
        if (consultar_sesion() === true){
            window.location.href = "../html/index.html";
             i.preventDefault();
            cerrar_sesion()
            modificar_btn_sesion()
            modificar_btn_rol()
        }
    } )

});

function modificar_btn_sesion(){
    let txt_sesion = document.getElementById("txt_sesion");

    if (txt_sesion) {
        if (consultar_sesion()){
            txt_sesion.textContent = "Cerrar sesion";
        } else {
            txt_sesion.textContent = "Iniciar sesion";
        }
    }
}

function modificar_btn_rol() {
    const rol = conseguir_rol_usuario();

    if (rol === "Admin") {
        btn_accion_admin.style.visibility = "visible";
    } else if (rol === "Usuario") {
        btn_accion_admin.style.visibility = "hidden";
    } else if (rol === null) {
        btn_accion_admin.style.visibility = "hidden";
    }
}