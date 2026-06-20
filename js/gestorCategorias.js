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

export function agregarCategoria(nombre, descripcion) {
  let categorias =
    JSON.parse(localStorage.getItem(claveCategorias)) || categoriasTemplate;
  let categoria = crearCategoria(nombre, descripcion);
  categorias.push(categoria);
  localStorage.setItem(claveCategorias, JSON.stringify(categorias));
}

export function editarCategoria(id, nombre, descripcion) {
  let categorias =
    JSON.parse(localStorage.getItem(claveCategorias)) || categoriasTemplate;
  let categoria = encontrarEtiquetaPorID(id);

  categoria.nombre = nombre;
  categoria.descripcion = descripcion;

  categorias.push(categoria);
  localStorage.setItem(claveCategorias, JSON.stringify(categorias));
}

export function eliminarCategoria(id) {
  let categorias =
    JSON.parse(localStorage.getItem(claveCategorias)) || categoriasTemplate;
  let categoria = encontrarCategoriaPorID(id);

  categorias = categorias.filter((e) => e.id !== id);

  localStorage.setItem(claveCategorias, JSON.stringify(categorias));
}

export function listadoCategorias() {
  let categorias =
    JSON.parse(localStorage.getItem(claveCategorias)) || categoriasTemplate;
  return categorias;
}

function encontrarCategoriaPorID(id) {
  const categorias =
    JSON.parse(localStorage.getItem(claveCategorias)) || categoriasTemplate;
  return categorias.findIndex((categoria) => categoria.id === id);
}

function crearCategoria(nombre, descripcion) {
  let categoria = {
    id: Date.now(),
    nombre: nombre,
    descripcion: descripcion,
  };
  return categoria;
}
