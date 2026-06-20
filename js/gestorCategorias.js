const claveCategorias = "categorias";
const categoriasTemplate = [
  { id: Date.now(), nombre: "Procesadores", descripcion: "..." },
  { id: Date.now(), nombre: "Motherboards", descripcion: "..." },
  { id: Date.now(), nombre: "Memorias RAM", descripcion: "..." },
  { id: Date.now(), nombre: "Placas de Video", descripcion: "..." },
  { id: Date.now(), nombre: "Discos SSD/HDD", descripcion: "..." },
  { id: Date.now(), nombre: "Monitores", descripcion: "..." },
  { id: Date.now(), nombre: "Notebooks", descripcion: "..." },
  { id: Date.now(), nombre: "Perifericos", descripcion: "..." },
];

export function agregarCategoria(nombre, descripcion) {
  let categorias =
    JSON.parse(localStorage.getItem(claveCategorias)) || categoriasTemplate;
  let categoria = crearCategoria(nombre, descripcion);
  categorias.push(categoria);
  localStorage.setItem(claveCategorias, JSON.stringify(categorias));
}

export function listadoCategorias() {
  let categorias =
    JSON.parse(localStorage.getItem(claveCategorias)) || categoriasTemplate;
  return categorias;
}

function crearCategoria(nombre, descripcion) {
  let categoria = {
    id: Date.now(),
    nombre: nombre,
    descripcion: descripcion,
  };
  return categoria;
}
