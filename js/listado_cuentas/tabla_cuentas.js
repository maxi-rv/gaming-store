import { 
    listado_cuentas,
    eliminar_cuenta,
    cambiar_estado_cuenta
} from "../gestores/gestor_cuentas.js";

let tabla_body = document.getElementById("table_body");

const btnGuardarEdicion = document.querySelector(".formEdicionUsuario button[type='submit']");

window.addEventListener("load", function() {
    tabla_body.innerHTML = "";
    cargar_tabla()
})

function cargar_tabla() {
    tabla_body.innerHTML = "";
    let cuentas = listado_cuentas();

    for (let i = 0; i < cuentas.length; i++) {

        const tr = document.createElement("tr");
        tr.classList.add("align-middle");

        const tdId = document.createElement("td");
        const tdUsuario = document.createElement("td");
        const tdEmail = document.createElement("td");
        const tdTelefono = document.createElement("td");
        const tdEstado = document.createElement("td");
        const tdAcciones = document.createElement("td");

        tdId.textContent = cuentas[i].id;
        tdUsuario.textContent = cuentas[i].username;
        tdEmail.textContent = cuentas[i].email;
        tdTelefono.textContent = cuentas[i].tel;
        tdEstado.textContent = cuentas[i].estado ? "Activa" : "Inactiva";

        const btnInhabilitar = document.createElement("button");
        if (cuentas[i].estado) {
            btnInhabilitar.innerHTML = '<i class="bi bi-person-dash"></i>';
            btnInhabilitar.className = "btn btn-outline-warning me-2";
            btnInhabilitar.title = "Inhabilitar";
        } else {
            btnInhabilitar.innerHTML = '<i class="bi bi-person-check"></i>';
            btnInhabilitar.className = "btn btn-outline-success me-2";
            btnInhabilitar.title = "Habilitar";
        }

   
        const btnEliminar = document.createElement("button");
        btnEliminar.type = "button";
        btnEliminar.className = "btn btn-outline-danger";
        btnEliminar.innerHTML = '<i class="bi bi-trash"></i>';

        btnEliminar.addEventListener("click", function () {
            if (confirm("¿Estás seguro de que deseas eliminar esta cuenta?")) {
                eliminar_cuenta(cuentas[i].id);
                cargar_tabla();
            }
        });

        tdAcciones.appendChild(btnInhabilitar);
        tdAcciones.appendChild(btnEliminar);

        tr.appendChild(tdId);
        tr.appendChild(tdUsuario);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefono);
        tr.appendChild(tdEstado);
        tr.appendChild(tdAcciones);

        tabla_body.appendChild(tr);

        btnInhabilitar.addEventListener("click", function () {
        cambiar_estado_cuenta(cuentas[i].id);
        cargar_tabla();
        });
    }
}
