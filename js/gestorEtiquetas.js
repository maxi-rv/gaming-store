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

export function agregarEtiqueta(nombre, descripcion) {
  let etiquetas =
    JSON.parse(localStorage.getItem(claveEtiquetas)) || etiquetasTemplate;
  let etiqueta = crearEtiqueta(nombre, descripcion);
  etiquetas.push(etiqueta);
  localStorage.setItem(claveEtiquetas, JSON.stringify(etiquetas));
}

export function editarEtiqueta(id, nombre, descripcion) {
  let etiquetas =
    JSON.parse(localStorage.getItem(claveEtiquetas)) || etiquetasTemplate;
  let etiqueta = encontrarEtiquetaPorID(id);

  etiqueta.nombre = nombre;
  etiqueta.descripcion = descripcion;

  etiquetas.push(etiqueta);
  localStorage.setItem(claveEtiquetas, JSON.stringify(etiquetas));
}

export function eliminarEtiqueta(id) {
  let etiquetas =
    JSON.parse(localStorage.getItem(claveEtiquetas)) || etiquetasTemplate;
  let etiqueta = encontrarEtiquetaPorID(id);

  etiquetas = etiquetas.filter((e) => e.id !== id);

  localStorage.setItem(claveEtiquetas, JSON.stringify(etiquetas));
}

export function listadoEtiquetas() {
  let etiquetas =
    JSON.parse(localStorage.getItem(claveEtiquetas)) || etiquetasTemplate;
  return etiquetas;
}

function encontrarEtiquetaPorID(id) {
  const etiquetas =
    JSON.parse(localStorage.getItem(claveEtiquetas)) || etiquetasTemplate;
  return etiquetas.findIndex((etiqueta) => etiqueta.id === id);
}

function crearEtiqueta(nombre, descripcion) {
  let etiqueta = {
    id: Date.now(),
    nombre: nombre,
    descripcion: descripcion,
  };
  return etiqueta;
}
