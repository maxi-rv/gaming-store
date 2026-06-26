function datos_validos(
  name_producto,
  precio_producto,
  stock_producto,
  imagen_producto,
  categoria_producto,
  descripcion_producto,
) {
  let formulario_valido = true;

  if (validator.isEmpty(name_producto.value.trim())) {
    mostrar_error(
      name_producto,
      "error_nombre_producto",
      "El nombre del producto es obligatorio",
    );
    formulario_valido = false;
  }

  if (
    validator.isEmpty(precio_producto.value.trim()) ||
    Number(precio_producto.value) <= 0
  ) {
    mostrar_error(
      precio_producto,
      "error_precio_producto",
      "Ingrese un precio válido",
    );
    formulario_valido = false;
  }

  if (
    validator.isEmpty(stock_producto.value.trim()) ||
    Number(stock_producto.value) < 0
  ) {
    mostrar_error(
      stock_producto,
      "error_stock_producto",
      "Ingrese un stock válido",
    );
    formulario_valido = false;
  }

  if (imagen_producto.value === "Seleccionar_img") {
    mostrar_error(
      imagen_producto,
      "error_img_producto",
      "Seleccione una imagen",
    );
    formulario_valido = false;
  }

  if (categoria_producto.value === "Seleccionar_categoria") {
    mostrar_error(
      categoria_producto,
      "error_categoria_producto",
      "Seleccione una categoría",
    );
    formulario_valido = false;
  }
  if (validator.isEmpty(descripcion_producto.value.trim())) {
    mostrar_error(
      descripcion_producto,
      "error_descripcion_producto",
      "La descripción es obligatoria",
    );
    formulario_valido = false;
  }

  return formulario_valido;
}

function mostrar_error(input, id_error, mensaje) {
  input.classList.add("is-invalid");
  document.getElementById(id_error).textContent = mensaje;
}
