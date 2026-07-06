export function validateData(
  name_producto,
  error_nombre_producto,
  precio_producto,
  error_precio_producto,
  stock_producto,
  error_stock_producto,
  imagen_producto,
  error_img_producto,
  categoria_producto,
  error_categoria_producto,
  descripcion_producto,
  error_descripcion_producto,
) {
  let validation = true;

  if (validator.isEmpty(name_producto.value.trim())) {
    showMessage(
      name_producto,
      error_nombre_producto,
      "El nombre del producto es obligatorio",
    );
    validation = false;
  }

  if (
    validator.isEmpty(precio_producto.value.trim()) ||
    Number(precio_producto.value) <= 0
  ) {
    showMessage(
      precio_producto,
      error_precio_producto,
      "Ingrese un precio válido",
    );
    validation = false;
  }

  if (
    validator.isEmpty(stock_producto.value.trim()) ||
    Number(stock_producto.value) < 0
  ) {
    showMessage(
      stock_producto,
      error_stock_producto,
      "Ingrese un stock válido",
    );
    validation = false;
  }

  if (imagen_producto.value === "Seleccionar_img") {
    showMessage(imagen_producto, error_img_producto, "Seleccione una imagen");
    validation = false;
  }

  if (categoria_producto.value === "Seleccionar_categoria") {
    showMessage(
      categoria_producto,
      error_categoria_producto,
      "Seleccione una categoría",
    );
    validation = false;
  }
  if (validator.isEmpty(descripcion_producto.value.trim())) {
    showMessage(
      descripcion_producto,
      error_descripcion_producto,
      "La descripción es obligatoria",
    );
    validation = false;
  }

  return validation;
}

function showMessage(input, errorValidation, mensaje) {
  input.classList.add("is-invalid");
  errorValidation.textContent = mensaje;
}

export function clearValidation() {
  const inputs = document.querySelectorAll(".form-control, .form-check-input");
  for (const input of inputs) {
    input.classList.remove("is-invalid");
  }
}
