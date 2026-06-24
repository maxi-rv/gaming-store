let categorias;
const claveCategorias = "categorias";
const categoriasTemplate = [
  { id: crypto.randomUUID(), nombre: "Procesadores", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Motherboards", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Memorias RAM", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Placas de Video", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Discos SSD/HDD", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Monitores", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Notebooks", descripcion: "..." },
  { id: crypto.randomUUID(), nombre: "Perifericos", descripcion: "..." },
];

window.addEventListener("load", function () {
  categorias =
    JSON.parse(localStorage.getItem(claveCategorias)) || categoriasTemplate;
});

export function agregarCategoria(nombre, descripcion) {
  let categoria = crearCategoria(nombre, descripcion);
  categorias.push(categoria);
  localStorage.setItem(claveCategorias, JSON.stringify(categorias));
}

export function editarCategoria(id, nombre, descripcion) {
  const index = categorias.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    categorias[index].nombre = nombre;
    categorias[index].descripcion = descripcion;
    localStorage.setItem(claveCategorias, JSON.stringify(categorias));
  }
}

export function eliminarCategoria(id) {
  categorias = categorias.filter((catEncontrada) => catEncontrada.id !== id);

  localStorage.setItem(claveCategorias, JSON.stringify(categorias));
}

export function listadoCategorias() {
  return categorias;
}

export function conseguirCategoria(id) {
  return categorias.find((cat) => cat.id === id) || null;
}

function crearCategoria(nombre, descripcion) {
  let categoria = {
    id: crypto.randomUUID(),
    nombre: nombre,
    descripcion: descripcion,
  };
  return categoria;
}
