import { listadoCategorias } from "../gestores/gestorCategorias.js";

import { listadoEtiquetas } from "../gestores/gestorEtiquetas.js";

let productos;
const claveProductos = "productos";
let productosTemplate = [];

window.addEventListener("load", function () {
  productosTemplate = [
    {
      id: crypto.randomUUID(),
      nombre: "Laptop Gamer",
      precio: 1500000,
      stock: 10,
      img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
      categoria: listadoCategorias()[6].id,
      etiquetas: [listadoEtiquetas()[2].id, listadoEtiquetas()[6].id],
      descripcion:
        "Potente laptop gaming con GPU dedicada y refrigeración avanzada para sesiones intensas de juego. Ideal para títulos AAA y edición multimedia.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "MacBook Pro",
      precio: 2500000,
      stock: 5,
      img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
      categoria: listadoCategorias()[6].id,
      etiquetas: [listadoEtiquetas()[3].id, listadoEtiquetas()[7].id],
      descripcion:
        "Potente MacBook Pro con chip M3, pantalla Retina XDR y batería de larga duración. Diseñado para profesionales creativos y desarrolladores.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Kit de Memorias 2x16GB DDR5",
      precio: 256000,
      stock: 32,
      img: "../img/products/computerchip-technology-electronics-industry.jpg",
      categoria: listadoCategorias()[2].id,
      etiquetas: [listadoEtiquetas()[9].id],
      descripcion:
        "Kit de 32GB (2x16GB) de memoria RAM DDR5 a 5200MHz. Ideal para mejorar el rendimiento en multitarea y aplicaciones exigentes.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Kit de Memorias 2x32GB DDR5",
      precio: 512000,
      stock: 16,
      img: "../img/products/computerchip-technology-electronics-industry.jpg",
      categoria: listadoCategorias()[2].id,
      etiquetas: [listadoEtiquetas()[9].id],
      descripcion:
        "Kit de 64GB (2x32GB) de memoria RAM DDR5 a 6000MHz. Diseñado para estaciones de trabajo, servidores y gaming de alta gama.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "SSD NVMe 1TB PCIe 4.0",
      precio: 102400,
      stock: 32,
      img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
      categoria: listadoCategorias()[4].id,
      etiquetas: [listadoEtiquetas()[4].id],
      descripcion:
        "Unidad SSD NVMe de 1TB con velocidades de lectura de 7000MB/s. Perfecto para sistemas operativos, juegos y aplicaciones pesadas.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "SSD NVMe 512GB PCIe 3.0",
      precio: 205600,
      stock: 64,
      img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
      categoria: listadoCategorias()[4].id,
      etiquetas: [listadoEtiquetas()[4].id],
      descripcion:
        "Unidad SSD NVMe de 512GB con excelente relación costo-beneficio. Ideal para actualizar laptops y equipos de oficina.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Disco Duro 2TB 7200RPM",
      precio: 128000,
      stock: 8,
      img: "../img/products/close-up-hdd-device-studio-top-view.jpg",
      categoria: listadoCategorias()[4].id,
      etiquetas: [listadoEtiquetas()[5].id],
      descripcion:
        "Disco duro mecánico de 2TB con velocidad 7200RPM. Capacidad masiva para almacenar archivos multimedia y backups.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Disco Duro 5TB 5400RPM",
      precio: 205600,
      stock: 4,
      img: "../img/products/close-up-hdd-device-studio-top-view.jpg",
      categoria: listadoCategorias()[4].id,
      etiquetas: [listadoEtiquetas()[5].id],
      descripcion:
        "Disco duro mecánico de 5TB con amplia capacidad. Perfecto para servidores domésticos, sistemas NAS y almacenamiento de respaldo.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Procesador AMD Ryzen 7 7800X3D",
      precio: 750000,
      stock: 8,
      img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
      categoria: listadoCategorias()[0].id,
      etiquetas: [listadoEtiquetas()[0].id],
      descripcion:
        "Procesador AMD Ryzen 7 con tecnología 3D V-Cache. Ofrece el mejor rendimiento para gaming y aplicaciones de productividad.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Procesador Intel Core i7-14700K",
      precio: 950000,
      stock: 7,
      img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
      categoria: listadoCategorias()[0].id,
      etiquetas: [listadoEtiquetas()[1].id],
      descripcion:
        "Procesador Intel Core i7 de 14ª generación con 20 núcleos. Ideal para gaming, creación de contenido y multitarea avanzada.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Tarjeta Gráfica AMD Radeon RX 7900 XTX",
      precio: 1002400,
      stock: 3,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      categoria: listadoCategorias()[3].id,
      etiquetas: [listadoEtiquetas()[0].id],
      descripcion:
        "GPU AMD Radeon RX 7900 XTX con 24GB de VRAM. Ofrece rendimiento 4K sin concesiones para los juegos más exigentes.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Tarjeta Gráfica Intel Arc A770",
      precio: 1012800,
      stock: 3,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      categoria: listadoCategorias()[3].id,
      etiquetas: [listadoEtiquetas()[1].id],
      descripcion:
        "GPU Intel Arc A770 con 16GB de VRAM y soporte para ray tracing. Excelente para creadores de contenido y gaming en 1440p.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Tarjeta Gráfica NVIDIA RTX 4080 SUPER",
      precio: 1051200,
      stock: 3,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      categoria: listadoCategorias()[3].id,
      etiquetas: [listadoEtiquetas()[2].id],
      descripcion:
        "GPU NVIDIA RTX 4080 SUPER con 16GB de GDDR6X. Cuenta con tecnología DLSS 3 y trazado de rayos para experiencias inmersivas.",
    },
    {
      id: crypto.randomUUID(),
      nombre: 'Monitor 4K 32" IPS',
      precio: 850000,
      stock: 12,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      categoria: listadoCategorias()[5].id,
      etiquetas: [listadoEtiquetas()[7].id],
      descripcion:
        "Monitor 4K UHD de 32 pulgadas con panel IPS y 99% sRGB. Perfecto para diseño gráfico, edición de video y productividad.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Monitor Gamer 165Hz",
      precio: 620000,
      stock: 8,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      categoria: listadoCategorias()[5].id,
      etiquetas: [listadoEtiquetas()[6].id],
      descripcion:
        "Monitor gaming de 27 pulgadas con tasa de refresco de 165Hz y 1ms de respuesta. Ideal para juegos competitivos y acción rápida.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Teclado Mecánico RGB",
      precio: 180000,
      stock: 25,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      categoria: listadoCategorias()[7].id,
      etiquetas: [listadoEtiquetas()[11].id, listadoEtiquetas()[6].id],
      descripcion:
        "Teclado mecánico con switches táctiles y retroiluminación RGB personalizable. Ideal para gaming y escritura prolongada.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Mouse Gaming Inalámbrico",
      precio: 95000,
      stock: 40,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      categoria: listadoCategorias()[7].id,
      etiquetas: [listadoEtiquetas()[10].id],
      descripcion:
        "Mouse gaming inalámbrico con sensor de 16000 DPI y batería de 70 horas. Ligero y preciso para movimientos rápidos.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Auriculares Gaming 7.1",
      precio: 320000,
      stock: 18,
      img: "../img/products/c-d-x-dBwadhWa-lI-unsplash.jpg",
      categoria: listadoCategorias()[7].id,
      etiquetas: [listadoEtiquetas()[12].id],
      descripcion:
        "Auriculares gaming con sonido envolvente 7.1, micrófono desmontable y cancelación de ruido. Ideal para inmersión total.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Placa Base ATX Z790",
      precio: 450000,
      stock: 9,
      img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
      categoria: listadoCategorias()[1].id,
      etiquetas: [listadoEtiquetas()[1].id],
      descripcion:
        "Placa base ATX con socket LGA1700, soporte DDR5, PCIe 5.0 y conectividad WiFi 6E. Perfecta para builds de alto rendimiento.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Placa Base AM5 B650",
      precio: 380000,
      stock: 12,
      img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
      categoria: listadoCategorias()[1].id,
      etiquetas: [listadoEtiquetas()[0].id],
      descripcion:
        "Placa base AM5 con socket para procesadores AMD Ryzen 7000. Soporte DDR5, PCIe 5.0 y conectividad avanzada.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Procesador AMD Ryzen 5 7600X",
      precio: 450000,
      stock: 15,
      img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
      categoria: listadoCategorias()[0].id,
      etiquetas: [listadoEtiquetas()[0].id],
      descripcion:
        "Procesador AMD Ryzen 5 de 6 núcleos y 12 hilos. Ideal para gaming en 1080p y productividad con excelente relación costo-rendimiento.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Procesador Intel Core i5-14600K",
      precio: 520000,
      stock: 10,
      img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
      categoria: listadoCategorias()[0].id,
      etiquetas: [listadoEtiquetas()[1].id],
      descripcion:
        "Procesador Intel Core i5 de 14 núcleos y 20 hilos. Perfecto para gaming y creación de contenido sin comprometer el presupuesto.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Memoria RAM DDR4 2x8GB 3200MHz",
      precio: 128000,
      stock: 45,
      img: "../img/products/computerchip-technology-electronics-industry.jpg",
      categoria: listadoCategorias()[2].id,
      etiquetas: [listadoEtiquetas()[8].id],
      descripcion:
        "Kit de 16GB (2x8GB) de memoria RAM DDR4 a 3200MHz. Ideal para builds económicos y actualizaciones de equipos existentes.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Tarjeta Gráfica NVIDIA RTX 4060",
      precio: 620000,
      stock: 8,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      categoria: listadoCategorias()[3].id,
      etiquetas: [listadoEtiquetas()[2].id],
      descripcion:
        "GPU NVIDIA RTX 4060 con 8GB de GDDR6. Ofrece rendimiento para gaming en 1080p y 1440p con tecnología DLSS 3.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Tarjeta Gráfica AMD Radeon RX 7600",
      precio: 480000,
      stock: 12,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      categoria: listadoCategorias()[3].id,
      etiquetas: [listadoEtiquetas()[0].id],
      descripcion:
        "GPU AMD Radeon RX 7600 con 8GB de VRAM. Excelente para gaming en 1080p con alto rendimiento en juegos modernos.",
    },
    {
      id: crypto.randomUUID(),
      nombre: 'SSD SATA 1TB 2.5"',
      precio: 89000,
      stock: 30,
      img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
      categoria: listadoCategorias()[4].id,
      etiquetas: [listadoEtiquetas()[4].id],
      descripcion:
        "Unidad SSD SATA de 1TB en formato 2.5 pulgadas. Perfecto para actualizar laptops y equipos de escritorio con buen rendimiento.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "SSD NVMe 2TB PCIe 4.0",
      precio: 205000,
      stock: 20,
      img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
      categoria: listadoCategorias()[4].id,
      etiquetas: [listadoEtiquetas()[4].id],
      descripcion:
        "Unidad SSD NVMe de 2TB con velocidades extremas. Ideal para gamers y creadores de contenido que necesitan gran capacidad.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Disco Duro 1TB 7200RPM",
      precio: 72000,
      stock: 25,
      img: "../img/products/close-up-hdd-device-studio-top-view.jpg",
      categoria: listadoCategorias()[4].id,
      etiquetas: [listadoEtiquetas()[5].id],
      descripcion:
        "Disco duro mecánico de 1TB a 7200RPM. Solución económica para almacenamiento masivo de archivos y documentos.",
    },
    {
      id: crypto.randomUUID(),
      nombre: 'Monitor UltraWide 34"',
      precio: 950000,
      stock: 6,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      categoria: listadoCategorias()[5].id,
      etiquetas: [listadoEtiquetas()[7].id],
      descripcion:
        "Monitor ultrawide de 34 pulgadas con resolución 3440x1440. Perfecto para productividad, edición de video y gaming inmersivo.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Monitor 1080p 144Hz",
      precio: 380000,
      stock: 20,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      categoria: listadoCategorias()[5].id,
      etiquetas: [listadoEtiquetas()[6].id],
      descripcion:
        "Monitor gaming de 24 pulgadas con resolución 1080p y tasa de refresco de 144Hz. Ideal para juegos competitivos.",
    },
    {
      id: crypto.randomUUID(),
      nombre: 'Monitor 4K 28" LED',
      precio: 720000,
      stock: 10,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      categoria: listadoCategorias()[5].id,
      etiquetas: [listadoEtiquetas()[6].id],
      descripcion:
        "Monitor 4K UHD de 28 pulgadas con panel LED. Excelente para diseño, edición y entretenimiento con gran definición.",
    },
    {
      id: crypto.randomUUID(),
      nombre: 'Notebook Ultrabook 14"',
      precio: 1800000,
      stock: 7,
      img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
      categoria: listadoCategorias()[6].id,
      etiquetas: [listadoEtiquetas()[6].id],
      descripcion:
        "Ultrabook ligera de 14 pulgadas con procesador Intel Core i7. Perfecta para movilidad, oficina y productividad diaria.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Notebook 2 en 1 Táctil",
      precio: 1650000,
      stock: 5,
      img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
      categoria: listadoCategorias()[6].id,
      etiquetas: [listadoEtiquetas()[6].id],
      descripcion:
        "Notebook convertible 2 en 1 con pantalla táctil de 15.6 pulgadas. Ideal para creativos, estudiantes y profesionales versátiles.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Teclado Inalámbrico Slim",
      precio: 85000,
      stock: 35,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      categoria: listadoCategorias()[7].id,
      etiquetas: [listadoEtiquetas()[11].id],
      descripcion:
        "Teclado slim inalámbrico con diseño minimalista y batería de larga duración. Perfecto para oficina y home office.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Mouse Vertical Ergonómico",
      precio: 75000,
      stock: 28,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      categoria: listadoCategorias()[7].id,
      etiquetas: [listadoEtiquetas()[10].id],
      descripcion:
        "Mouse vertical ergonómico diseñado para prevenir lesiones por esfuerzo repetitivo. Ideal para largas jornadas de trabajo.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Auriculares Inalámbricos ANC",
      precio: 280000,
      stock: 15,
      img: "../img/products/c-d-x-dBwadhWa-lI-unsplash.jpg",
      categoria: listadoCategorias()[7].id,
      etiquetas: [listadoEtiquetas()[12].id],
      descripcion:
        "Auriculares inalámbricos con cancelación activa de ruido. Perfectos para viajes, oficina y disfrutar de música sin interferencias.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Joystick Inalámbrico Pro",
      precio: 160000,
      stock: 12,
      img: "../img/products/igor-karimov-M1nZU61xTK4-unsplash.jpg",
      categoria: listadoCategorias()[7].id,
      etiquetas: [listadoEtiquetas()[13].id],
      descripcion:
        "Joystick inalámbrico profesional con batería recargable. Compatible con PC, consolas y juegos en la nube.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Placa Base B760M",
      precio: 320000,
      stock: 14,
      img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
      categoria: listadoCategorias()[1].id,
      etiquetas: [listadoEtiquetas()[1].id],
      descripcion:
        "Placa base Micro-ATX con socket LGA1700. Compatible con procesadores Intel de 12ª, 13ª y 14ª generación con DDR4.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Placa Base A620M",
      precio: 280000,
      stock: 18,
      img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
      categoria: listadoCategorias()[1].id,
      etiquetas: [listadoEtiquetas()[0].id],
      descripcion:
        "Placa base Micro-ATX AM5 para procesadores AMD Ryzen 7000. Ideal para builds económicos con soporte DDR5.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Monitor Gamer 240Hz",
      precio: 890000,
      stock: 5,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      categoria: listadoCategorias()[5].id,
      etiquetas: [listadoEtiquetas()[6].id, listadoEtiquetas()[2].id],
      descripcion:
        "Monitor gaming de 25 pulgadas con tasa de refresco de 240Hz y tecnología G-Sync. Ideal para esports y juegos competitivos.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Teclado 60% Mecánico",
      precio: 150000,
      stock: 20,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      categoria: listadoCategorias()[7].id,
      etiquetas: [listadoEtiquetas()[11].id, listadoEtiquetas()[6].id],
      descripcion:
        "Teclado mecánico formato 60% con switches lineales. Compacto y portátil, perfecto para gaming y espacios reducidos.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Mouse Pad RGB XL",
      precio: 45000,
      stock: 50,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      categoria: listadoCategorias()[7].id,
      etiquetas: [listadoEtiquetas()[10].id, listadoEtiquetas()[6].id],
      descripcion:
        "Mouse pad de gran tamaño con iluminación RGB periférica. Superficie optimizada para precisión en juegos y trabajo.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Laptop Gamer (Outlet)",
      precio: 1200000,
      stock: 0,
      img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
      categoria: listadoCategorias()[6].id,
      etiquetas: [listadoEtiquetas()[2].id, listadoEtiquetas()[6].id],
      descripcion:
        "Laptop gaming de exhibición o reacondicionada. Funciona perfectamente.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Kit de Memorias 2x16GB DDR5 (Outlet)",
      precio: 200000,
      stock: 0,
      img: "../img/products/computerchip-technology-electronics-industry.jpg",
      categoria: listadoCategorias()[2].id,
      etiquetas: [listadoEtiquetas()[9].id],
      descripcion: "Kit de 32GB DDR5 de segunda mano o reacondicionado.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "SSD NVMe 1TB PCIe 4.0 (Outlet)",
      precio: 80000,
      stock: 0,
      img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
      categoria: listadoCategorias()[4].id,
      etiquetas: [listadoEtiquetas()[4].id],
      descripcion: "Unidad SSD NVMe 1TB reacondicionada.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Procesador AMD Ryzen 7 7800X3D (Outlet)",
      precio: 600000,
      stock: 0,
      img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
      categoria: listadoCategorias()[0].id,
      etiquetas: [listadoEtiquetas()[0].id],
      descripcion: "Procesador AMD Ryzen 7 de exhibición.",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Tarjeta Gráfica NVIDIA RTX 4080 SUPER (Outlet)",
      precio: 900000,
      stock: 0,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      categoria: listadoCategorias()[3].id,
      etiquetas: [listadoEtiquetas()[2].id],
      descripcion: "GPU RTX 4080 SUPER reacondicionada.",
    },
    {
      id: crypto.randomUUID(),
      nombre: 'Monitor 4K 32" IPS (Outlet)',
      precio: 700000,
      stock: 0,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      categoria: listadoCategorias()[5].id,
      etiquetas: [listadoEtiquetas()[7].id],
      descripcion: "Monitor 4K de 32 pulgadas de exhibición",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Teclado Mecánico RGB (Outlet)",
      precio: 140000,
      stock: 0,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      categoria: listadoCategorias()[7].id,
      etiquetas: [listadoEtiquetas()[11].id, listadoEtiquetas()[6].id],
      descripcion: "Teclado mecánico RGB reacondicionado.",
    },
  ];
  productos =
    JSON.parse(localStorage.getItem(claveProductos)) || productosTemplate;
  localStorage.setItem(claveProductos, JSON.stringify(productos));
});

export function agregarProducto(
  nombre,
  precio,
  stock,
  img,
  categoria,
  etiquetas,
  descripcion,
) {
  let producto = crearProducto(
    nombre,
    precio,
    stock,
    img,
    categoria,
    etiquetas,
    descripcion,
  );
  productos.push(producto);
  localStorage.setItem(claveProductos, JSON.stringify(productos));
}

export function editarProducto(
  id,
  nombre,
  precio,
  stock,
  img,
  categoria,
  etiquetas,
  descripcion,
) {
  const index = productos.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    productos[index].nombre = nombre;
    productos[index].precio = precio;
    productos[index].stock = stock;
    productos[index].img = img;
    productos[index].categoria = categoria;
    productos[index].etiquetas = etiquetas;
    productos[index].descripcion = descripcion;
    localStorage.setItem(claveProductos, JSON.stringify(productos));
  }
}

export function eliminarProducto(id) {
  productos = productos.filter((prodEncontrado) => prodEncontrado.id !== id);

  localStorage.setItem(claveProductos, JSON.stringify(productos));
}

export function listadoProductos() {
  return productos;
}

export function filtrarProductos(idCategoria, idEtiquetas, conStock) {
  let productosFiltrados = productos;

  if (idCategoria != "" && idCategoria != null) {
    productosFiltrados = productosFiltrados.filter(
      (prod) => prod.categoria === idCategoria,
    );
  }

  if (
    idEtiquetas != null &&
    Array.isArray(idEtiquetas) &&
    idEtiquetas.length > 0
  ) {
    productosFiltrados = productosFiltrados.filter((prod) =>
      idEtiquetas.every(
        (eti) => prod.etiquetas && prod.etiquetas.includes(eti),
      ),
    );
  }

  if (conStock === true) {
    productosFiltrados = productosFiltrados.filter(
      (prod) => prod.stock != null && prod.stock > 0,
    );
  }

  return productosFiltrados;
}

export function conseguirProducto(id) {
  return productos.find((prod) => prod.id === id) || null;
}

function crearProducto(
  nombre,
  precio,
  stock,
  img,
  categoria,
  etiquetas,
  descripcion,
) {
  let producto = {
    id: crypto.randomUUID(),
    nombre: nombre,
    precio: precio,
    stock: stock,
    img: img,
    categoria: categoria,
    etiquetas: etiquetas,
    descripcion: descripcion,
  };
  return producto;
}
