const claveEtiquetas = "etiquetas";
const etiquetasTemplate = [
  { id: Date.now(), nombre: "AMD", descripcion: "..." },
  { id: Date.now(), nombre: "Intel", descripcion: "..." },
  { id: Date.now(), nombre: "Nvidia", descripcion: "..." },
  { id: Date.now(), nombre: "SSD", descripcion: "..." },
  { id: Date.now(), nombre: "HDD", descripcion: "..." },
  { id: Date.now(), nombre: "LED", descripcion: "..." },
  { id: Date.now(), nombre: "OLED", descripcion: "..." },
  { id: Date.now(), nombre: "DDR 4", descripcion: "..." },
  { id: Date.now(), nombre: "DDR 5", descripcion: "..." },
  { id: Date.now(), nombre: "Mouse", descripcion: "..." },
  { id: Date.now(), nombre: "Teclado", descripcion: "..." },
  { id: Date.now(), nombre: "Auriculares", descripcion: "..." },
  { id: Date.now(), nombre: "Joystick", descripcion: "..." },
];

export function agregarEtiqueta(nombre, descripcion) {
  let etiquetas =
    JSON.parse(localStorage.getItem(claveEtiquetas)) || etiquetasTemplate;
  let etiqueta = crearEtiqueta(nombre, descripcion);
  etiquetas.push(etiqueta);
  localStorage.setItem(claveEtiquetas, JSON.stringify(etiquetas));
}

export function listadoEtiquetas() {
  let etiquetas =
    JSON.parse(localStorage.getItem(claveEtiquetas)) || etiquetasTemplate;
  return etiquetas;
}

function crearEtiqueta(nombre, descripcion) {
  let etiqueta = {
    id: Date.now(),
    nombre: nombre,
    descripcion: descripcion,
  };
  return etiqueta;
}
