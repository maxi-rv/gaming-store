let products;
const productsKey = "productos";

window.addEventListener("load", function () {
  const productsTemplate = [
    {
      id: crypto.randomUUID(),
      name: "Kit de Memorias 2x16GB DDR5",
      price: 256000,
      stock: 32,
      img: "../img/products/computerchip-technology-electronics-industry.jpg",
      category: null,
      tags: [],
      description:
        "Kit de 32GB (2x16GB) de memoria RAM DDR5 a 5200MHz. Ideal para mejorar el rendimiento en multitarea y aplicaciones exigentes.",
    },
    {
      id: crypto.randomUUID(),
      name: "Kit de Memorias 2x32GB DDR5",
      price: 512000,
      stock: 16,
      img: "../img/products/computerchip-technology-electronics-industry.jpg",
      category: null,
      tags: [],
      description:
        "Kit de 64GB (2x32GB) de memoria RAM DDR5 a 6000MHz. Diseñado para estaciones de trabajo, servidores y gaming de alta gama.",
    },
    {
      id: crypto.randomUUID(),
      name: "SSD NVMe 1TB PCIe 4.0",
      price: 102400,
      stock: 32,
      img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
      category: null,
      tags: [],
      description:
        "Unidad SSD NVMe de 1TB con velocidades de lectura de 7000MB/s. Perfecto para sistemas operativos, juegos y aplicaciones pesadas.",
    },
    {
      id: crypto.randomUUID(),
      name: "SSD NVMe 512GB PCIe 3.0",
      price: 205600,
      stock: 64,
      img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
      category: null,
      tags: [],
      description:
        "Unidad SSD NVMe de 512GB con excelente relación costo-beneficio. Ideal para actualizar laptops y equipos de oficina.",
    },
    {
      id: crypto.randomUUID(),
      name: "Disco Duro 2TB 7200RPM",
      price: 128000,
      stock: 8,
      img: "../img/products/close-up-hdd-device-studio-top-view.jpg",
      category: null,
      tags: [],
      description:
        "Disco duro mecánico de 2TB con velocidad 7200RPM. Capacidad masiva para almacenar archivos multimedia y backups.",
    },
    {
      id: crypto.randomUUID(),
      name: "Disco Duro 5TB 5400RPM",
      price: 205600,
      stock: 4,
      img: "../img/products/close-up-hdd-device-studio-top-view.jpg",
      category: null,
      tags: [],
      description:
        "Disco duro mecánico de 5TB con amplia capacidad. Perfecto para servidores domésticos, sistemas NAS y almacenamiento de respaldo.",
    },
    {
      id: crypto.randomUUID(),
      name: "Procesador AMD Ryzen 7 7800X3D",
      price: 750000,
      stock: 8,
      img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
      category: null,
      tags: [],
      description:
        "Procesador AMD Ryzen 7 con tecnología 3D V-Cache. Ofrece el mejor rendimiento para gaming y aplicaciones de productividad.",
    },
    {
      id: crypto.randomUUID(),
      name: "Procesador Intel Core i7-14700K",
      price: 950000,
      stock: 7,
      img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
      category: null,
      tags: [],
      description:
        "Procesador Intel Core i7 de 14ª generación con 20 núcleos. Ideal para gaming, creación de contenido y multitarea avanzada.",
    },
    {
      id: crypto.randomUUID(),
      name: "Tarjeta Gráfica AMD Radeon RX 7900 XTX",
      price: 1002400,
      stock: 3,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "GPU AMD Radeon RX 7900 XTX con 24GB de VRAM. Ofrece rendimiento 4K sin concesiones para los juegos más exigentes.",
    },
    {
      id: crypto.randomUUID(),
      name: "Tarjeta Gráfica Intel Arc A770",
      price: 1012800,
      stock: 3,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "GPU Intel Arc A770 con 16GB de VRAM y soporte para ray tracing. Excelente para creadores de contenido y gaming en 1440p.",
    },
    {
      id: crypto.randomUUID(),
      name: "Tarjeta Gráfica NVIDIA RTX 4080 SUPER",
      price: 1051200,
      stock: 3,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "GPU NVIDIA RTX 4080 SUPER con 16GB de GDDR6X. Cuenta con tecnología DLSS 3 y trazado de rayos para experiencias inmersivas.",
    },
    {
      id: crypto.randomUUID(),
      name: 'Monitor 4K 32" IPS',
      price: 850000,
      stock: 12,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      category: null,
      tags: [],
      description:
        "Monitor 4K UHD de 32 pulgadas con panel IPS y 99% sRGB. Perfecto para diseño gráfico, edición de video y productividad.",
    },
    {
      id: crypto.randomUUID(),
      name: "Monitor Gamer 165Hz",
      price: 620000,
      stock: 8,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      category: null,
      tags: [],
      description:
        "Monitor gaming de 27 pulgadas con tasa de refresco de 165Hz y 1ms de respuesta. Ideal para juegos competitivos y acción rápida.",
    },
    {
      id: crypto.randomUUID(),
      name: "Teclado Mecánico RGB",
      price: 180000,
      stock: 25,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      category: null,
      tags: [],
      description:
        "Teclado mecánico con switches táctiles y retroiluminación RGB personalizable. Ideal para gaming y escritura prolongada.",
    },
    {
      id: crypto.randomUUID(),
      name: "Mouse Gaming Inalámbrico",
      price: 95000,
      stock: 40,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      category: null,
      tags: [],
      description:
        "Mouse gaming inalámbrico con sensor de 16000 DPI y batería de 70 horas. Ligero y preciso para movimientos rápidos.",
    },
    {
      id: crypto.randomUUID(),
      name: "Auriculares Gaming 7.1",
      price: 320000,
      stock: 18,
      img: "../img/products/c-d-x-dBwadhWa-lI-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "Auriculares gaming con sonido envolvente 7.1, micrófono desmontable y cancelación de ruido. Ideal para inmersión total.",
    },
    {
      id: crypto.randomUUID(),
      name: "Placa Base ATX Z790",
      price: 450000,
      stock: 9,
      img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "Placa base ATX con socket LGA1700, soporte DDR5, PCIe 5.0 y conectividad WiFi 6E. Perfecta para builds de alto rendimiento.",
    },
    {
      id: crypto.randomUUID(),
      name: "Placa Base AM5 B650",
      price: 380000,
      stock: 12,
      img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "Placa base AM5 con socket para procesadores AMD Ryzen 7000. Soporte DDR5, PCIe 5.0 y conectividad avanzada.",
    },
    {
      id: crypto.randomUUID(),
      name: "Procesador AMD Ryzen 5 7600X",
      price: 450000,
      stock: 15,
      img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
      category: null,
      tags: [],
      description:
        "Procesador AMD Ryzen 5 de 6 núcleos y 12 hilos. Ideal para gaming en 1080p y productividad con excelente relación costo-rendimiento.",
    },
    {
      id: crypto.randomUUID(),
      name: "Procesador Intel Core i5-14600K",
      price: 520000,
      stock: 10,
      img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
      category: null,
      tags: [],
      description:
        "Procesador Intel Core i5 de 14 núcleos y 20 hilos. Perfecto para gaming y creación de contenido sin comprometer el presupuesto.",
    },
    {
      id: crypto.randomUUID(),
      name: "Memoria RAM DDR4 2x8GB 3200MHz",
      price: 128000,
      stock: 45,
      img: "../img/products/computerchip-technology-electronics-industry.jpg",
      category: null,
      tags: [],
      description:
        "Kit de 16GB (2x8GB) de memoria RAM DDR4 a 3200MHz. Ideal para builds económicos y actualizaciones de equipos existentes.",
    },
    {
      id: crypto.randomUUID(),
      name: "Tarjeta Gráfica NVIDIA RTX 4060",
      price: 620000,
      stock: 8,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "GPU NVIDIA RTX 4060 con 8GB de GDDR6. Ofrece rendimiento para gaming en 1080p y 1440p con tecnología DLSS 3.",
    },
    {
      id: crypto.randomUUID(),
      name: "Tarjeta Gráfica AMD Radeon RX 7600",
      price: 480000,
      stock: 12,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "GPU AMD Radeon RX 7600 con 8GB de VRAM. Excelente para gaming en 1080p con alto rendimiento en juegos modernos.",
    },
    {
      id: crypto.randomUUID(),
      name: 'SSD SATA 1TB 2.5"',
      price: 89000,
      stock: 30,
      img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
      category: null,
      tags: [],
      description:
        "Unidad SSD SATA de 1TB en formato 2.5 pulgadas. Perfecto para actualizar laptops y equipos de escritorio con buen rendimiento.",
    },
    {
      id: crypto.randomUUID(),
      name: "SSD NVMe 2TB PCIe 4.0",
      price: 205000,
      stock: 20,
      img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
      category: null,
      tags: [],
      description:
        "Unidad SSD NVMe de 2TB con velocidades extremas. Ideal para gamers y creadores de contenido que necesitan gran capacidad.",
    },
    {
      id: crypto.randomUUID(),
      name: "Disco Duro 1TB 7200RPM",
      price: 72000,
      stock: 25,
      img: "../img/products/close-up-hdd-device-studio-top-view.jpg",
      category: null,
      tags: [],
      description:
        "Disco duro mecánico de 1TB a 7200RPM. Solución económica para almacenamiento masivo de archivos y documentos.",
    },
    {
      id: crypto.randomUUID(),
      name: 'Monitor UltraWide 34"',
      price: 950000,
      stock: 6,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      category: null,
      tags: [],
      description:
        "Monitor ultrawide de 34 pulgadas con resolución 3440x1440. Perfecto para productividad, edición de video y gaming inmersivo.",
    },
    {
      id: crypto.randomUUID(),
      name: "Monitor 1080p 144Hz",
      price: 380000,
      stock: 20,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      category: null,
      tags: [],
      description:
        "Monitor gaming de 24 pulgadas con resolución 1080p y tasa de refresco de 144Hz. Ideal para juegos competitivos.",
    },
    {
      id: crypto.randomUUID(),
      name: 'Monitor 4K 28" LED',
      price: 720000,
      stock: 10,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      category: null,
      tags: [],
      description:
        "Monitor 4K UHD de 28 pulgadas con panel LED. Excelente para diseño, edición y entretenimiento con gran definición.",
    },
    {
      id: crypto.randomUUID(),
      name: 'Notebook Ultrabook 14"',
      price: 1800000,
      stock: 7,
      img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
      category: null,
      tags: [],
      description:
        "Ultrabook ligera de 14 pulgadas con procesador Intel Core i7. Perfecta para movilidad, oficina y productividad diaria.",
    },
    {
      id: crypto.randomUUID(),
      name: "Notebook 2 en 1 Táctil",
      price: 1650000,
      stock: 5,
      img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
      category: null,
      tags: [],
      description:
        "Notebook convertible 2 en 1 con pantalla táctil de 15.6 pulgadas. Ideal para creativos, estudiantes y profesionales versátiles.",
    },
    {
      id: crypto.randomUUID(),
      name: "Teclado Inalámbrico Slim",
      price: 85000,
      stock: 35,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      category: null,
      tags: [],
      description:
        "Teclado slim inalámbrico con diseño minimalista y batería de larga duración. Perfecto para oficina y home office.",
    },
    {
      id: crypto.randomUUID(),
      name: "Mouse Vertical Ergonómico",
      price: 75000,
      stock: 28,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      category: null,
      tags: [],
      description:
        "Mouse vertical ergonómico diseñado para prevenir lesiones por esfuerzo repetitivo. Ideal para largas jornadas de trabajo.",
    },
    {
      id: crypto.randomUUID(),
      name: "Auriculares Inalámbricos ANC",
      price: 280000,
      stock: 15,
      img: "../img/products/c-d-x-dBwadhWa-lI-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "Auriculares inalámbricos con cancelación activa de ruido. Perfectos para viajes, oficina y disfrutar de música sin interferencias.",
    },
    {
      id: crypto.randomUUID(),
      name: "Joystick Inalámbrico Pro",
      price: 160000,
      stock: 12,
      img: "../img/products/igor-karimov-M1nZU61xTK4-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "Joystick inalámbrico profesional con batería recargable. Compatible con PC, consolas y juegos en la nube.",
    },
    {
      id: crypto.randomUUID(),
      name: "Placa Base B760M",
      price: 320000,
      stock: 14,
      img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "Placa base Micro-ATX con socket LGA1700. Compatible con procesadores Intel de 12ª, 13ª y 14ª generación con DDR4.",
    },
    {
      id: crypto.randomUUID(),
      name: "Placa Base A620M",
      price: 280000,
      stock: 18,
      img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
      category: null,
      tags: [],
      description:
        "Placa base Micro-ATX AM5 para procesadores AMD Ryzen 7000. Ideal para builds económicos con soporte DDR5.",
    },
    {
      id: crypto.randomUUID(),
      name: "Monitor Gamer 240Hz",
      price: 890000,
      stock: 5,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      category: null,
      tags: [],
      description:
        "Monitor gaming de 25 pulgadas con tasa de refresco de 240Hz y tecnología G-Sync. Ideal para esports y juegos competitivos.",
    },
    {
      id: crypto.randomUUID(),
      name: "Teclado 60% Mecánico",
      price: 150000,
      stock: 20,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      category: null,
      tags: [],
      description:
        "Teclado mecánico formato 60% con switches lineales. Compacto y portátil, perfecto para gaming y espacios reducidos.",
    },
    {
      id: crypto.randomUUID(),
      name: "Mouse Pad RGB XL",
      price: 45000,
      stock: 50,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      category: null,
      tags: [],
      description:
        "Mouse pad de gran tamaño con iluminación RGB periférica. Superficie optimizada para precisión en juegos y trabajo.",
    },
    {
      id: crypto.randomUUID(),
      name: "Laptop Gamer (Outlet)",
      price: 1200000,
      stock: 0,
      img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
      category: null,
      tags: [],
      description:
        "Laptop gaming de exhibición o reacondicionada. Funciona perfectamente.",
    },
    {
      id: crypto.randomUUID(),
      name: "Kit de Memorias 2x16GB DDR5 (Outlet)",
      price: 200000,
      stock: 0,
      img: "../img/products/computerchip-technology-electronics-industry.jpg",
      category: null,
      tags: [],
      description: "Kit de 32GB DDR5 de segunda mano o reacondicionado.",
    },
    {
      id: crypto.randomUUID(),
      name: "SSD NVMe 1TB PCIe 4.0 (Outlet)",
      price: 80000,
      stock: 0,
      img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
      category: null,
      tags: [],
      description: "Unidad SSD NVMe 1TB reacondicionada.",
    },
    {
      id: crypto.randomUUID(),
      name: "Procesador AMD Ryzen 7 7800X3D (Outlet)",
      price: 600000,
      stock: 0,
      img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
      category: null,
      tags: [],
      description: "Procesador AMD Ryzen 7 de exhibición.",
    },
    {
      id: crypto.randomUUID(),
      name: "Tarjeta Gráfica NVIDIA RTX 4080 SUPER (Outlet)",
      price: 900000,
      stock: 0,
      img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
      category: null,
      tags: [],
      description: "GPU RTX 4080 SUPER reacondicionada.",
    },
    {
      id: crypto.randomUUID(),
      name: 'Monitor 4K 32" IPS (Outlet)',
      price: 700000,
      stock: 0,
      img: "../img/products/computer-curvy-monitor-digital-device.jpg",
      category: null,
      tags: [],
      description: "Monitor 4K de 32 pulgadas de exhibición",
    },
    {
      id: crypto.randomUUID(),
      name: "Teclado Mecánico RGB (Outlet)",
      price: 140000,
      stock: 0,
      img: "../img/products/wireless-mouse-keyboard.jpg",
      category: null,
      tags: [],
      description: "Teclado mecánico RGB reacondicionado.",
    },
  ];
  products = JSON.parse(localStorage.getItem(productsKey)) || productsTemplate;
  localStorage.setItem(productsKey, JSON.stringify(products));
});

export function addProduct(
  name,
  price,
  stock,
  img,
  category,
  tags,
  description,
) {
  let product = createProduct(
    name,
    price,
    stock,
    img,
    category,
    tags,
    description,
  );
  products.push(product);
  localStorage.setItem(productsKey, JSON.stringify(products));
}

export function editProduct(
  id,
  name,
  price,
  stock,
  img,
  category,
  tags,
  description,
) {
  const index = products.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    products[index].name = name;
    products[index].price = price;
    products[index].stock = stock;
    products[index].img = img;
    products[index].category = category;
    products[index].tags = tags;
    products[index].description = description;
    localStorage.setItem(productsKey, JSON.stringify(products));
  }
}

export function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  localStorage.setItem(productsKey, JSON.stringify(products));
}

export function allProducts() {
  return products;
}

export function filterProductsBy(category, tags, withStock) {
  let filteredProducts = products;

  if (category != "" && category != null) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category,
    );
  }

  if (tags != null && Array.isArray(tags) && tags.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      tags.every((tag) => product.tags && product.tags.includes(tag)),
    );
  }

  if (withStock === true) {
    filteredProducts = filteredProducts.filter(
      (product) => product.stock != null && product.stock > 0,
    );
  }

  return filteredProducts;
}

export function getProduct(id) {
  return products.find((product) => product.id === id) || null;
}

function createProduct(name, price, stock, img, category, tags, description) {
  let product = {
    id: crypto.randomUUID(),
    name: name,
    price: price,
    stock: stock,
    img: img,
    category: category,
    tags: tags,
    description: description,
  };
  return product;
}
