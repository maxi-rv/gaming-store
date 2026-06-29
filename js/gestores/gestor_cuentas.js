let cuentas;
const clave_cuentas = "cuentas";

const cuentas_template = [
  {
    id: crypto.randomUUID(),
    username: "admin",
    password: "admin",
    email: "",
    tel: "",
    sesion: false,
    rol: "admin"
  },{
    id: crypto.randomUUID(),
    username: "ale",
    password: "ale",
    email: "",
    tel: "",
    sesion: false,
    rol: "usuario final"
  },
];

window.addEventListener("load", function () {
  cuentas = JSON.parse(localStorage.getItem(clave_cuentas)) || cuentas_template;
  localStorage.setItem(clave_cuentas, JSON.stringify(cuentas));
});

export function agregar_cuenta(username,password, email,tel) {
  let cuenta = crear_cuenta( username, password, email,tel);

  cuentas.push(cuenta);

  localStorage.setItem(clave_cuentas, JSON.stringify(cuentas));
}

export function editar_cuenta(id, username,password, email,tel) {
    let index = -1;

    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].id === id) {
            index = i;
            break;
        }
    }

  if (index !== -1) {
        cuentas[index].username = username;
        cuentas[index].password = password;
        cuentas[index].email = email;
        cuentas[index].tel = tel;

        localStorage.setItem(clave_cuentas, JSON.stringify(cuentas))
  }
}

export function eliminar_cuenta(id) {
  let nuevas_cuentas = [];

    for (let cuenta of cuentas) {
        if (cuenta.id !== id) {
            nuevas_cuentas.push(cuenta);
        }
    }
    cuentas = nuevas_cuentas;
    localStorage.setItem(clave_cuentas, JSON.stringify(cuentas));
}

export function listado_cuentas() {
  return cuentas;
}

export function conseguir_cuenta(id) {
    let encontrada = null;

    for (let cuenta of cuentas) {
        if (cuenta.id === id) {
            encontrada = cuenta;
            break;
        }
    }

    return encontrada
}

export function conseguir_cuenta_login(username, password) {

    const cuentas = JSON.parse(localStorage.getItem(clave_cuentas)) || [];

    let cuenta = null;

for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].username === username) {
        cuenta = cuentas[i];
        break;
    }
}

    if (!cuenta) return -1;

    if (cuenta.password !== password) return -2;

    return cuenta;
}

export function conseguir_rol_usuario() {

    const cuentas = JSON.parse(localStorage.getItem(clave_cuentas)) || [];

    for (let cuenta of cuentas) {
        if (cuenta.sesion === true) {
            return cuenta.rol;
        }
    }

    return null;
}

function crear_cuenta(username,password, email,tel) {
  function crear_objeto(){
        let cuenta = {
            id: crypto.randomUUID(),
            username: username,
            password: password,
            email: email,
            tel: tel,
            sesion: false,
            rol: "usuario final"
        }
        return cuenta
  };
  return crear_objeto();

 
}
