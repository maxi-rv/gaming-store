import {
    listadoCategorias,
    conseguirCategoria,
} from "../gestores/gestorCategorias.js";

import {
    listadoEtiquetas,
    conseguirEtiqueta,
} from "../gestores/gestorEtiquetas.js";

let categorias = [];
let etiquetas = [];

window.addEventListener("load", function () {
    categorias = listadoCategorias();
    etiquetas = listadoEtiquetas();
});

export function cargar_categorias() {

    const categoria_producto =
        document.getElementById("select_categorias");

    categorias.forEach(categoria => {

        const option = document.createElement("option");

        option.value = categoria.id;
        option.textContent = categoria.nombre;

        categoria_producto.appendChild(option);

    });

}

export function cargar_etiquetas() {

    const contenedor = document.getElementById("contenedor_de_etiquetas");

    contenedor.innerHTML = "";

    etiquetas.forEach(etiqueta => {

        const col = document.createElement("div");
        col.classList.add("col", "my-1");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("btn-check");
        checkbox.id = etiqueta.id;
        checkbox.autocomplete = "off";

        const label = document.createElement("label");
        label.classList.add("btn", "btn-outline-warning", "rounded-pill");
        label.setAttribute("for", checkbox.id);
        label.textContent = etiqueta.nombre;

        col.appendChild(checkbox);
        col.appendChild(label);

        contenedor.appendChild(col);

    });
}

