let etiquetas;
const claveEtiquetas = "etiquetas";
const etiquetasTemplate = [
  { id: crypto.randomUUID(), nombre: "AMD", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Intel", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Nvidia", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "SSD", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "HDD", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "LED", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "OLED", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "DDR 4", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "DDR 5", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Mouse", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Teclado", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Auriculares", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Joystick", descripcion: "..." },
];

window.addEventListener("load", function () {
  etiquetas =
    JSON.parse(localStorage.getItem(claveEtiquetas)) || etiquetasTemplate;
});

export function agregarEtiqueta(nombre, descripcion) {
  let etiqueta = crearEtiqueta(nombre, descripcion);
  etiquetas.push(etiqueta);
  localStorage.setItem(claveEtiquetas, JSON.stringify(etiquetas));
}

export function editarEtiqueta(id, nombre, descripcion) {
  const index = etiquetas.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    etiquetas[index].nombre = nombre;
    etiquetas[index].descripcion = descripcion;
    localStorage.setItem(claveEtiquetas, JSON.stringify(etiquetas));
  }
}

export function eliminarEtiqueta(id) {
  etiquetas = etiquetas.filter((etiEncontrada) => etiEncontrada.id !== id);

  localStorage.setItem(claveEtiquetas, JSON.stringify(etiquetas));
}

export function listadoEtiquetas() {
  return etiquetas;
}

export function conseguirEtiqueta(id) {
  return etiquetas.find((eti) => eti.id === id) || null;
}

function crearEtiqueta(nombre, descripcion) {
  let etiqueta = {
    id: crypto.randomUUID(),
    nombre: nombre,
    descripcion: descripcion,
  };
  return etiqueta;
}
