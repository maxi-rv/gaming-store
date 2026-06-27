import {
    consultar_sesion,
    cerrar_sesion,
    conseguir_rol_usuario,
} from "../js/gestores/gestor_sesion.js";

let txt_sesion = document.getElementById("txt_sesion")
let btn_accion_admin = document.getElementById("buttonAdminActions")

window.addEventListener("load", function(){
    modificar_btn_sesion()
    modificar_btn_rol()

    document.getElementById("linkIniciarSesion").addEventListener("click", function(i){
        if (consultar_sesion() === true){
            window.location.href = "../html/inicioSesion.html";
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

function modificar_btn_rol(){
    if (conseguir_rol_usuario() === "admin"){
        btn_accion_admin.style.visibility = "visible"
    }
}