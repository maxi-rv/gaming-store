export function guardar_sesion(id) {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

    cuentas.forEach(cuenta => {

        if (cuenta.id === id) {
            cuenta.sesion = true;
        } else {
            cuenta.sesion = false;
        }
    });

    localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

export function cerrar_sesion() {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

    cuentas.forEach(cuenta => {
        cuenta.sesion = false;
    });

    localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

export function consultar_sesion() {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

    for (const cuenta of cuentas) {
        if (cuenta.sesion === true) {
         return true;
            }
        }
    return false;
}

export function conseguir_usuario_iniciado() {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

    const usuario = cuentas.find(cuenta => cuenta.sesion);

    if (usuario === true){
       return usuario.id
    }else{
        return null
    }

}