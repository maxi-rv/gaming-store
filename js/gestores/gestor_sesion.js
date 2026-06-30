const cuentas_template = [
  {
    id: crypto.randomUUID(),
    username: "admin",
    password: "admin",
    email: "",
    tel: "",
    sesion: false,
    rol: "Admin"
  },{
    id: crypto.randomUUID(),
    username: "ale",
    password: "ale",
    email: "",
    tel: "",
    sesion: false,
    rol: "Usuario"
  },
];


export function guardar_sesion(id) {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || cuentas_template;

    cuentas.forEach(cuenta => {

        if (cuenta.id === id) {
            cuenta.sesion = true;
        } else {
            cuenta.sesion = false;
        }
    });

    localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

export function iniciar_sesion(username) {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || cuentas_template;

    for (let i = 0; i < cuentas.length; i++) {

    if (cuentas[i].username === username) {
        cuentas[i].sesion = true;
    } else {
        cuentas[i].sesion = false;
    }

}

    localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

export function cerrar_sesion() {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || cuentas_template;

    cuentas.forEach(cuenta => {
        cuenta.sesion = false;
    });

    localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

export function consultar_sesion() {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || cuentas_template;

    for (const cuenta of cuentas) {
        if (cuenta.sesion === true) {
         return true;
            }
        }
    return false;
}


export function conseguir_usuario_iniciado() {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || cuentas_template;

    const usuario = cuentas.find(cuenta => cuenta.sesion);

    if (usuario) {
        return usuario.id;
    }

    return null;
}