import {
    consultar_sesion,
    cerrar_sesion,
} from "../js/gestores/gestor_sesion.js";

let txt_sesion = document.getElementById("txt_sesion")

window.addEventListener("load", function(){
    modificar_btn_sesion()
    
    document.getElementById("linkIniciarSesion").addEventListener("click", function(i){
        if (consultar_sesion() === true){
            window.location.href = "../html/inicioSesion.html";
             i.preventDefault();
            cerrar_sesion()
            modificar_btn_sesion()
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