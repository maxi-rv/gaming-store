const accounts = [
  {
    id: crypto.randomUUID(),
    username: "admin",
    password: "admin",
    email: "-",
    tel: "-",
    state: true,
    role: "Admin",
  },
  {
    id: crypto.randomUUID(),
    username: "user",
    password: "user",
    email: "-",
    tel: "-",
    state: true,
    role: "Usuario",
  },
];

const categories = [
  {
    id: crypto.randomUUID(),
    name: "Audio & Speakers",
    description: "Sound systems and audio output devices",
  },
  {
    id: crypto.randomUUID(),
    name: "Cables & Adapters",
    description: "HDMI, DisplayPort, USB extensions, dongles, and card readers",
  },
  {
    id: crypto.randomUUID(),
    name: "Cases & Towers",
    description: "Computer chassis for housing components",
  },
  {
    id: crypto.randomUUID(),
    name: "Cooling & Thermal Solutions",
    description: "Air coolers, liquid AIOs, case fans, and thermal paste",
  },
  {
    id: crypto.randomUUID(),
    name: "CPU Processors",
    description: "Central processing units for computing power",
  },
  {
    id: crypto.randomUUID(),
    name: "Gaming Furniture & Sim Racing",
    description: "Chairs, desks, racing wheel stands, and cockpit rigs",
  },
  {
    id: crypto.randomUUID(),
    name: "Gaming Gear",
    description:
      "Controllers, VR headsets, fight sticks, and gaming accessories",
  },
  {
    id: crypto.randomUUID(),
    name: "Graphics Cards",
    description: "Video processing and gaming performance",
  },
  {
    id: crypto.randomUUID(),
    name: "Hard Drives & SSDs",
    description:
      "Internal and portable storage solutions for files and applications",
  },
  {
    id: crypto.randomUUID(),
    name: "Keyboards & Mice",
    description: "Peripheral input devices for user interaction",
  },
  {
    id: crypto.randomUUID(),
    name: "Laptops",
    description: "Portable computers for mobile computing",
  },
  {
    id: crypto.randomUUID(),
    name: "Memory RAM",
    description: "System memory modules for multitasking speed",
  },
  {
    id: crypto.randomUUID(),
    name: "Monitors",
    description: "Visual display screens for output",
  },
  {
    id: crypto.randomUUID(),
    name: "Motherboards",
    description: "Main circuit boards connecting system components",
  },
  {
    id: crypto.randomUUID(),
    name: "Networking Gear",
    description: "Routers, switches, and WiFi adapters for connectivity",
  },
  {
    id: crypto.randomUUID(),
    name: "Power Supplies",
    description: "PSUs delivering power to all system components",
  },
  {
    id: crypto.randomUUID(),
    name: "Printers & Scanners",
    description: "Document printing and scanning devices",
  },
  {
    id: crypto.randomUUID(),
    name: "Software & OS",
    description: "Operating systems and productivity software",
  },
  {
    id: crypto.randomUUID(),
    name: "Streaming & Capture Devices",
    description: "Webcams, microphones, capture cards, and green screens",
  },
];

const tags = [
  {
    id: crypto.randomUUID(),
    name: "144Hz",
    description: "High refresh rate for competitive gaming",
  },
  {
    id: crypto.randomUUID(),
    name: "240Hz",
    description: "Ultra-high refresh rate for pro-level competitive gaming",
  },
  {
    id: crypto.randomUUID(),
    name: "2-in-1",
    description: "Convertible laptop with tablet mode",
  },
  {
    id: crypto.randomUUID(),
    name: "4K",
    description: "Ultra HD 3840x2160 resolution displays",
  },
  {
    id: crypto.randomUUID(),
    name: "80 Plus",
    description: "Energy-efficient power supply with 80 Plus certification",
  },
  {
    id: crypto.randomUUID(),
    name: "All-in-One",
    description: "Print, scan, copy, and fax in one device",
  },
  {
    id: crypto.randomUUID(),
    name: "AMD",
    description: "High-performance processors and GPUs",
  },
  {
    id: crypto.randomUUID(),
    name: "AM5",
    description:
      "AMD's latest CPU socket for Ryzen 7000/9000 series processors",
  },
  {
    id: crypto.randomUUID(),
    name: "Apple",
    description: "Mac gaming and iOS devices",
  },
  {
    id: crypto.randomUUID(),
    name: "ATX",
    description: "Standard full-size form factor motherboards and cases",
  },
  {
    id: crypto.randomUUID(),
    name: "ATX 3.0",
    description: "New PSU standard with 12VHPWR connector for modern GPUs",
  },
  {
    id: crypto.randomUUID(),
    name: "Bluetooth",
    description: "Wireless connectivity for peripherals",
  },
  {
    id: crypto.randomUUID(),
    name: "Curved",
    description: "Immersive curved display panels",
  },
  {
    id: crypto.randomUUID(),
    name: "DDR 4",
    description: "Reliable previous-gen RAM",
  },
  {
    id: crypto.randomUUID(),
    name: "DDR 5",
    description: "Next-gen high-speed memory",
  },
  {
    id: crypto.randomUUID(),
    name: "External Drive",
    description: "Portable external storage for backups and game libraries",
  },
  {
    id: crypto.randomUUID(),
    name: "Flash Memory Card",
    description:
      "SD, microSD, and CFexpress cards for cameras and portable devices",
  },
  {
    id: crypto.randomUUID(),
    name: "FreeSync",
    description: "AMD adaptive sync technology for smooth gameplay",
  },
  {
    id: crypto.randomUUID(),
    name: "G-Sync",
    description: "Nvidia adaptive sync technology for tear-free gaming",
  },
  {
    id: crypto.randomUUID(),
    name: "Gamepad",
    description: "Precision controllers for all platforms",
  },
  {
    id: crypto.randomUUID(),
    name: "Gaming Router",
    description: "Routers optimized for gaming with QoS",
  },
  {
    id: crypto.randomUUID(),
    name: "HDD",
    description: "High-capacity mechanical storage for bulk data and backups",
  },
  {
    id: crypto.randomUUID(),
    name: "HDR",
    description: "High Dynamic Range for better contrast and colors",
  },
  {
    id: crypto.randomUUID(),
    name: "Headsets",
    description: "Immersive gaming audio",
  },
  {
    id: crypto.randomUUID(),
    name: "Inkjet",
    description: "Versatile inkjet printing for photos and documents",
  },
  {
    id: crypto.randomUUID(),
    name: "Integrated Graphics",
    description:
      "CPU with built-in GPU for budget builds without dedicated card",
  },
  {
    id: crypto.randomUUID(),
    name: "Intel",
    description: "Powerful processors for gaming",
  },
  {
    id: crypto.randomUUID(),
    name: "Internal",
    description: "Components designed to be installed inside a PC case",
  },
  {
    id: crypto.randomUUID(),
    name: "IPS",
    description:
      "In-Plane Switching panel with accurate colors and wide viewing angles",
  },
  {
    id: crypto.randomUUID(),
    name: "Keyboard",
    description: "Mechanical and RGB gaming keyboards",
  },
  {
    id: crypto.randomUUID(),
    name: "Laser",
    description: "High-speed laser printing for documents",
  },
  {
    id: crypto.randomUUID(),
    name: "LGA 1700",
    description:
      "Intel CPU socket for 12th, 13th, and 14th Gen Core processors",
  },
  {
    id: crypto.randomUUID(),
    name: "Linux",
    description: "Open-source operating system",
  },
  {
    id: crypto.randomUUID(),
    name: "Liquid Cooling",
    description: "Advanced thermal management with AIO or custom loops",
  },
  {
    id: crypto.randomUUID(),
    name: "macOS",
    description: "Apple operating system for Macs",
  },
  {
    id: crypto.randomUUID(),
    name: "Memory Card",
    description: "Removable flash storage for cameras, phones, and handhelds",
  },
  {
    id: crypto.randomUUID(),
    name: "Mesh WiFi",
    description: "Whole-home mesh WiFi systems",
  },
  {
    id: crypto.randomUUID(),
    name: "Micro-ATX",
    description: "Compact form factor motherboards and cases",
  },
  {
    id: crypto.randomUUID(),
    name: "Mini-ITX",
    description: "Ultra-compact form factor for small builds",
  },
  {
    id: crypto.randomUUID(),
    name: "Modular",
    description: "Fully or semi-modular power supply cables for clean builds",
  },
  {
    id: crypto.randomUUID(),
    name: "Mouse",
    description: "High-DPI gaming mice",
  },
  {
    id: crypto.randomUUID(),
    name: "Nvidia",
    description: "Top-tier gaming graphics cards",
  },
  {
    id: crypto.randomUUID(),
    name: "OLED",
    description: "Premium vivid display panels",
  },
  {
    id: crypto.randomUUID(),
    name: "Overclockable",
    description: "Unlocked CPUs for performance tuning",
  },
  {
    id: crypto.randomUUID(),
    name: "PCIe 4.0",
    description: "Fourth-gen PCIe interface for ultra-fast SSDs and GPUs",
  },
  {
    id: crypto.randomUUID(),
    name: "Portable SSD",
    description:
      "Compact external solid-state drives for fast on-the-go storage",
  },
  {
    id: crypto.randomUUID(),
    name: "Ray Tracing",
    description: "Real-time ray tracing support for realistic lighting",
  },
  {
    id: crypto.randomUUID(),
    name: "Refurbished",
    description: "Certified pre-owned products at discounted prices",
  },
  {
    id: crypto.randomUUID(),
    name: "RGB",
    description: "Customizable RGB lighting",
  },
  {
    id: crypto.randomUUID(),
    name: "SFF (Small Form Factor)",
    description: "Components optimized for compact PC builds",
  },
  {
    id: crypto.randomUUID(),
    name: "SSD M.2 NVMe",
    description: "Ultra-fast M.2 PCIe NVMe drives for OS and games",
  },
  {
    id: crypto.randomUUID(),
    name: "SSD SATA",
    description: "2.5-inch SATA solid-state drives, reliable and affordable",
  },
  {
    id: crypto.randomUUID(),
    name: "Surround Sound",
    description: "Immersive spatial audio for gaming",
  },
  {
    id: crypto.randomUUID(),
    name: "Thunderbolt",
    description: "High-speed data transfer and display connectivity",
  },
  {
    id: crypto.randomUUID(),
    name: "Touchscreen",
    description: "Interactive touch display laptops",
  },
  {
    id: crypto.randomUUID(),
    name: "USB Flash Drive",
    description: "Portable thumb drives for quick file transfers",
  },
  {
    id: crypto.randomUUID(),
    name: "USB-C",
    description: "Modern universal connectivity with power delivery",
  },
  {
    id: crypto.randomUUID(),
    name: "Video Editing",
    description: "Hardware optimized for content creation and video production",
  },
  {
    id: crypto.randomUUID(),
    name: "VR Accessory",
    description: "Controllers, link cables, face covers, and VR add-ons",
  },
  {
    id: crypto.randomUUID(),
    name: "VR Headset",
    description: "Virtual reality headsets for immersive gaming",
  },
  {
    id: crypto.randomUUID(),
    name: "VR Ready",
    description: "Virtual reality gaming compatible",
  },
  {
    id: crypto.randomUUID(),
    name: "Wi-Fi 6",
    description: "Next-gen wireless networking with low latency",
  },
  {
    id: crypto.randomUUID(),
    name: "Wi-Fi 6E / Wi-Fi 7",
    description: "Latest WiFi standards with 6GHz band and ultra-low latency",
  },
  {
    id: crypto.randomUUID(),
    name: "Windows",
    description: "Microsoft Windows operating system",
  },
  {
    id: crypto.randomUUID(),
    name: "Wireless",
    description: "Wireless peripherals and connectivity",
  },
];

const products = [
  {
    id: crypto.randomUUID(),
    name: "Kit de Memorias 2x16GB DDR5",
    price: 256000,
    stock: 32,
    img: "../img/products/computerchip-technology-electronics-industry.jpg",
    category: 11, // Memory RAM
    tags: [14], // DDR 5
    description:
      "Kit de 32GB (2x16GB) de memoria RAM DDR5 a 5200MHz. Ideal para mejorar el rendimiento en multitarea y aplicaciones exigentes.",
  },
  {
    id: crypto.randomUUID(),
    name: "Kit de Memorias 2x32GB DDR5",
    price: 512000,
    stock: 16,
    img: "../img/products/computerchip-technology-electronics-industry.jpg",
    category: 11, // Memory RAM
    tags: [14], // DDR 5
    description:
      "Kit de 64GB (2x32GB) de memoria RAM DDR5 a 6000MHz. Diseñado para estaciones de trabajo, servidores y gaming de alta gama.",
  },
  {
    id: crypto.randomUUID(),
    name: "SSD NVMe 1TB PCIe 4.0",
    price: 102400,
    stock: 32,
    img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
    category: 8, // Hard Drives & SSDs
    tags: [45, 50], // PCIe 4.0, SSD M.2 NVMe
    description:
      "Unidad SSD NVMe de 1TB con velocidades de lectura de 7000MB/s. Perfecto para sistemas operativos, juegos y aplicaciones pesadas.",
  },
  {
    id: crypto.randomUUID(),
    name: "SSD NVMe 512GB PCIe 3.0",
    price: 205600,
    stock: 64,
    img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
    category: 8, // Hard Drives & SSDs
    tags: [50], // SSD M.2 NVMe
    description:
      "Unidad SSD NVMe de 512GB con excelente relación costo-beneficio. Ideal para actualizar laptops y equipos de oficina.",
  },
  {
    id: crypto.randomUUID(),
    name: "Disco Duro 2TB 7200RPM",
    price: 128000,
    stock: 8,
    img: "../img/products/close-up-hdd-device-studio-top-view.jpg",
    category: 8, // Hard Drives & SSDs
    tags: [21], // HDD
    description:
      "Disco duro mecánico de 2TB con velocidad 7200RPM. Capacidad masiva para almacenar archivos multimedia y backups.",
  },
  {
    id: crypto.randomUUID(),
    name: "Disco Duro 5TB 5400RPM",
    price: 205600,
    stock: 4,
    img: "../img/products/close-up-hdd-device-studio-top-view.jpg",
    category: 8, // Hard Drives & SSDs
    tags: [21], // HDD
    description:
      "Disco duro mecánico de 5TB con amplia capacidad. Perfecto para servidores domésticos, sistemas NAS y almacenamiento de respaldo.",
  },
  {
    id: crypto.randomUUID(),
    name: "Procesador AMD Ryzen 7 7800X3D",
    price: 750000,
    stock: 8,
    img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
    category: 4, // CPU Processors
    tags: [6, 7, 43], // AMD, AM5, Overclockable
    description:
      "Procesador AMD Ryzen 7 con tecnología 3D V-Cache. Ofrece el mejor rendimiento para gaming y aplicaciones de productividad.",
  },
  {
    id: crypto.randomUUID(),
    name: "Procesador Intel Core i7-14700K",
    price: 950000,
    stock: 7,
    img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
    category: 4, // CPU Processors
    tags: [26, 31, 43], // Intel, LGA 1700, Overclockable
    description:
      "Procesador Intel Core i7 de 14ª generación con 20 núcleos. Ideal para gaming, creación de contenido y multitarea avanzada.",
  },
  {
    id: crypto.randomUUID(),
    name: "Tarjeta Gráfica AMD Radeon RX 7900 XTX",
    price: 1002400,
    stock: 3,
    img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
    category: 7, // Graphics Cards
    tags: [6, 17, 52], // AMD, FreeSync, Ray Tracing
    description:
      "GPU AMD Radeon RX 7900 XTX con 24GB de VRAM. Ofrece rendimiento 4K sin concesiones para los juegos más exigentes.",
  },
  {
    id: crypto.randomUUID(),
    name: "Tarjeta Gráfica Intel Arc A770",
    price: 1012800,
    stock: 3,
    img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
    category: 7, // Graphics Cards
    tags: [26, 52], // Intel, Ray Tracing
    description:
      "GPU Intel Arc A770 con 16GB de VRAM y soporte para ray tracing. Excelente para creadores de contenido y gaming en 1440p.",
  },
  {
    id: crypto.randomUUID(),
    name: "Tarjeta Gráfica NVIDIA RTX 4080 SUPER",
    price: 1051200,
    stock: 3,
    img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
    category: 7, // Graphics Cards
    tags: [18, 42, 52], // G-Sync, Nvidia, Ray Tracing
    description:
      "GPU NVIDIA RTX 4080 SUPER con 16GB de GDDR6X. Cuenta con tecnología DLSS 3 y trazado de rayos para experiencias inmersivas.",
  },
  {
    id: crypto.randomUUID(),
    name: 'Monitor 4K 32" IPS',
    price: 850000,
    stock: 12,
    img: "../img/products/computer-curvy-monitor-digital-device.jpg",
    category: 12, // Monitors
    tags: [3, 22, 28], // 4K, HDR, IPS
    description:
      "Monitor 4K UHD de 32 pulgadas con panel IPS y 99% sRGB. Perfecto para diseño gráfico, edición de video y productividad.",
  },
  {
    id: crypto.randomUUID(),
    name: "Monitor Gamer 165Hz",
    price: 620000,
    stock: 8,
    img: "../img/products/computer-curvy-monitor-digital-device.jpg",
    category: 12, // Monitors
    tags: [0, 17, 28], // 144Hz, FreeSync, IPS
    description:
      "Monitor gaming de 27 pulgadas con tasa de refresco de 165Hz y 1ms de respuesta. Ideal para juegos competitivos y acción rápida.",
  },
  {
    id: crypto.randomUUID(),
    name: "Teclado Mecánico RGB",
    price: 180000,
    stock: 25,
    img: "../img/products/wireless-mouse-keyboard.jpg",
    category: 9, // Keyboards & Mice
    tags: [29, 49], // Keyboard, RGB
    description:
      "Teclado mecánico con switches táctiles y retroiluminación RGB personalizable. Ideal para gaming y escritura prolongada.",
  },
  {
    id: crypto.randomUUID(),
    name: "Mouse Gaming Inalámbrico",
    price: 95000,
    stock: 40,
    img: "../img/products/wireless-mouse-keyboard.jpg",
    category: 9, // Keyboards & Mice
    tags: [41, 64], // Mouse, Wireless
    description:
      "Mouse gaming inalámbrico con sensor de 16000 DPI y batería de 70 horas. Ligero y preciso para movimientos rápidos.",
  },
  {
    id: crypto.randomUUID(),
    name: "Auriculares Gaming 7.1",
    price: 320000,
    stock: 18,
    img: "../img/products/c-d-x-dBwadhWa-lI-unsplash.jpg",
    category: 0, // Audio & Speakers
    tags: [23, 53], // Headsets, Surround Sound
    description:
      "Auriculares gaming con sonido envolvente 7.1, micrófono desmontable y cancelación de ruido. Ideal para inmersión total.",
  },
  {
    id: crypto.randomUUID(),
    name: "Placa Base ATX Z790",
    price: 450000,
    stock: 9,
    img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
    category: 13, // Motherboards
    tags: [9, 31, 63], // ATX, LGA 1700, Wi-Fi 6E / Wi-Fi 7
    description:
      "Placa base ATX con socket LGA1700, soporte DDR5, PCIe 5.0 y conectividad WiFi 6E. Perfecta para builds de alto rendimiento.",
  },
  {
    id: crypto.randomUUID(),
    name: "Placa Base AM5 B650",
    price: 380000,
    stock: 12,
    img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
    category: 13, // Motherboards
    tags: [7, 37], // AM5, Micro-ATX
    description:
      "Placa base AM5 con socket para procesadores AMD Ryzen 7000. Soporte DDR5, PCIe 5.0 y conectividad avanzada.",
  },
  {
    id: crypto.randomUUID(),
    name: "Procesador AMD Ryzen 5 7600X",
    price: 450000,
    stock: 15,
    img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
    category: 4, // CPU Processors
    tags: [6, 7, 43], // AMD, AM5, Overclockable
    description:
      "Procesador AMD Ryzen 5 de 6 núcleos y 12 hilos. Ideal para gaming en 1080p y productividad con excelente relación costo-rendimiento.",
  },
  {
    id: crypto.randomUUID(),
    name: "Procesador Intel Core i5-14600K",
    price: 520000,
    stock: 10,
    img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
    category: 4, // CPU Processors
    tags: [26, 31, 43], // Intel, LGA 1700, Overclockable
    description:
      "Procesador Intel Core i5 de 14 núcleos y 20 hilos. Perfecto para gaming y creación de contenido sin comprometer el presupuesto.",
  },
  {
    id: crypto.randomUUID(),
    name: "Memoria RAM DDR4 2x8GB 3200MHz",
    price: 128000,
    stock: 45,
    img: "../img/products/computerchip-technology-electronics-industry.jpg",
    category: 11, // Memory RAM
    tags: [13], // DDR 4
    description:
      "Kit de 16GB (2x8GB) de memoria RAM DDR4 a 3200MHz. Ideal para builds económicos y actualizaciones de equipos existentes.",
  },
  {
    id: crypto.randomUUID(),
    name: "Tarjeta Gráfica NVIDIA RTX 4060",
    price: 620000,
    stock: 8,
    img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
    category: 7, // Graphics Cards
    tags: [18, 42, 52], // G-Sync, Nvidia, Ray Tracing
    description:
      "GPU NVIDIA RTX 4060 con 8GB de GDDR6. Ofrece rendimiento para gaming en 1080p y 1440p con tecnología DLSS 3.",
  },
  {
    id: crypto.randomUUID(),
    name: "Tarjeta Gráfica AMD Radeon RX 7600",
    price: 480000,
    stock: 12,
    img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
    category: 7, // Graphics Cards
    tags: [6, 17], // AMD, FreeSync
    description:
      "GPU AMD Radeon RX 7600 con 8GB de VRAM. Excelente para gaming en 1080p con alto rendimiento en juegos modernos.",
  },
  {
    id: crypto.randomUUID(),
    name: 'SSD SATA 1TB 2.5"',
    price: 89000,
    stock: 30,
    img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
    category: 8, // Hard Drives & SSDs
    tags: [51], // SSD SATA
    description:
      "Unidad SSD SATA de 1TB en formato 2.5 pulgadas. Perfecto para actualizar laptops y equipos de escritorio con buen rendimiento.",
  },
  {
    id: crypto.randomUUID(),
    name: "SSD NVMe 2TB PCIe 4.0",
    price: 205000,
    stock: 20,
    img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
    category: 8, // Hard Drives & SSDs
    tags: [45, 50], // PCIe 4.0, SSD M.2 NVMe
    description:
      "Unidad SSD NVMe de 2TB con velocidades extremas. Ideal para gamers y creadores de contenido que necesitan gran capacidad.",
  },
  {
    id: crypto.randomUUID(),
    name: "Disco Duro 1TB 7200RPM",
    price: 72000,
    stock: 25,
    img: "../img/products/close-up-hdd-device-studio-top-view.jpg",
    category: 8, // Hard Drives & SSDs
    tags: [21], // HDD
    description:
      "Disco duro mecánico de 1TB a 7200RPM. Solución económica para almacenamiento masivo de archivos y documentos.",
  },
  {
    id: crypto.randomUUID(),
    name: 'Monitor UltraWide 34"',
    price: 950000,
    stock: 6,
    img: "../img/products/computer-curvy-monitor-digital-device.jpg",
    category: 12, // Monitors
    tags: [12, 22], // Curved, HDR
    description:
      "Monitor ultrawide de 34 pulgadas con resolución 3440x1440. Perfecto para productividad, edición de video y gaming inmersivo.",
  },
  {
    id: crypto.randomUUID(),
    name: "Monitor 1080p 144Hz",
    price: 380000,
    stock: 20,
    img: "../img/products/computer-curvy-monitor-digital-device.jpg",
    category: 12, // Monitors
    tags: [0, 28], // 144Hz, IPS
    description:
      "Monitor gaming de 24 pulgadas con resolución 1080p y tasa de refresco de 144Hz. Ideal para juegos competitivos.",
  },
  {
    id: crypto.randomUUID(),
    name: 'Monitor 4K 28" LED',
    price: 720000,
    stock: 10,
    img: "../img/products/computer-curvy-monitor-digital-device.jpg",
    category: 12, // Monitors
    tags: [3], // 4K
    description:
      "Monitor 4K UHD de 28 pulgadas con panel LED. Excelente para diseño, edición y entretenimiento con gran definición.",
  },
  {
    id: crypto.randomUUID(),
    name: 'Notebook Ultrabook 14"',
    price: 1800000,
    stock: 7,
    img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
    category: 10, // Laptops
    tags: [26], // Intel
    description:
      "Ultrabook ligera de 14 pulgadas con procesador Intel Core i7. Perfecta para movilidad, oficina y productividad diaria.",
  },
  {
    id: crypto.randomUUID(),
    name: "Notebook 2 en 1 Táctil",
    price: 1650000,
    stock: 5,
    img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
    category: 10, // Laptops
    tags: [2, 55], // 2-in-1, Touchscreen
    description:
      "Notebook convertible 2 en 1 con pantalla táctil de 15.6 pulgadas. Ideal para creativos, estudiantes y profesionales versátiles.",
  },
  {
    id: crypto.randomUUID(),
    name: "Teclado Inalámbrico Slim",
    price: 85000,
    stock: 35,
    img: "../img/products/wireless-mouse-keyboard.jpg",
    category: 9, // Keyboards & Mice
    tags: [29, 64], // Keyboard, Wireless
    description:
      "Teclado slim inalámbrico con diseño minimalista y batería de larga duración. Perfecto para oficina y home office.",
  },
  {
    id: crypto.randomUUID(),
    name: "Mouse Vertical Ergonómico",
    price: 75000,
    stock: 28,
    img: "../img/products/wireless-mouse-keyboard.jpg",
    category: 9, // Keyboards & Mice
    tags: [41, 64], // Mouse, Wireless
    description:
      "Mouse vertical ergonómico diseñado para prevenir lesiones por esfuerzo repetitivo. Ideal para largas jornadas de trabajo.",
  },
  {
    id: crypto.randomUUID(),
    name: "Auriculares Inalámbricos ANC",
    price: 280000,
    stock: 15,
    img: "../img/products/c-d-x-dBwadhWa-lI-unsplash.jpg",
    category: 0, // Audio & Speakers
    tags: [64], // Wireless
    description:
      "Auriculares inalámbricos con cancelación activa de ruido. Perfectos para viajes, oficina y disfrutar de música sin interferencias.",
  },
  {
    id: crypto.randomUUID(),
    name: "Joystick Inalámbrico Pro",
    price: 160000,
    stock: 12,
    img: "../img/products/igor-karimov-M1nZU61xTK4-unsplash.jpg",
    category: 6, // Gaming Gear
    tags: [19, 64], // Gamepad, Wireless
    description:
      "Joystick inalámbrico profesional con batería recargable. Compatible con PC, consolas y juegos en la nube.",
  },
  {
    id: crypto.randomUUID(),
    name: "Placa Base B760M",
    price: 320000,
    stock: 14,
    img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
    category: 13, // Motherboards
    tags: [31, 37], // LGA 1700, Micro-ATX
    description:
      "Placa base Micro-ATX con socket LGA1700. Compatible con procesadores Intel de 12ª, 13ª y 14ª generación con DDR4.",
  },
  {
    id: crypto.randomUUID(),
    name: "Placa Base A620M",
    price: 280000,
    stock: 18,
    img: "../img/products/remy-KzvvPlAnZF4-unsplash.jpg",
    category: 13, // Motherboards
    tags: [7, 37], // AM5, Micro-ATX
    description:
      "Placa base Micro-ATX AM5 para procesadores AMD Ryzen 7000. Ideal para builds económicos con soporte DDR5.",
  },
  {
    id: crypto.randomUUID(),
    name: "Monitor Gamer 240Hz",
    price: 890000,
    stock: 5,
    img: "../img/products/computer-curvy-monitor-digital-device.jpg",
    category: 12, // Monitors
    tags: [1, 18], // 240Hz, G-Sync
    description:
      "Monitor gaming de 25 pulgadas con tasa de refresco de 240Hz y tecnología G-Sync. Ideal para esports y juegos competitivos.",
  },
  {
    id: crypto.randomUUID(),
    name: "Teclado 60% Mecánico",
    price: 150000,
    stock: 20,
    img: "../img/products/wireless-mouse-keyboard.jpg",
    category: 9, // Keyboards & Mice
    tags: [29, 49], // Keyboard, RGB
    description:
      "Teclado mecánico formato 60% con switches lineales. Compacto y portátil, perfecto para gaming y espacios reducidos.",
  },
  {
    id: crypto.randomUUID(),
    name: "Mouse Pad RGB XL",
    price: 45000,
    stock: 50,
    img: "../img/products/wireless-mouse-keyboard.jpg",
    category: 9, // Keyboards & Mice
    tags: [49], // RGB
    description:
      "Mouse pad de gran tamaño con iluminación RGB periférica. Superficie optimizada para precisión en juegos y trabajo.",
  },
  {
    id: crypto.randomUUID(),
    name: "Laptop Gamer (Outlet)",
    price: 1200000,
    stock: 0,
    img: "../img/products/laptop-computer-isolated-on-white-background.jpg",
    category: 10, // Laptops
    tags: [48], // Refurbished
    description:
      "Laptop gaming de exhibición o reacondicionada. Funciona perfectamente.",
  },
  {
    id: crypto.randomUUID(),
    name: "Kit de Memorias 2x16GB DDR5 (Outlet)",
    price: 200000,
    stock: 0,
    img: "../img/products/computerchip-technology-electronics-industry.jpg",
    category: 11, // Memory RAM
    tags: [14, 48], // DDR 5, Refurbished
    description: "Kit de 32GB DDR5 de segunda mano o reacondicionado.",
  },
  {
    id: crypto.randomUUID(),
    name: "SSD NVMe 1TB PCIe 4.0 (Outlet)",
    price: 80000,
    stock: 0,
    img: "../img/products/high-angle-external-hard-drive-laptop.jpg",
    category: 8, // Hard Drives & SSDs
    tags: [45, 48, 50], // PCIe 4.0, Refurbished, SSD M.2 NVMe
    description: "Unidad SSD NVMe 1TB reacondicionada.",
  },
  {
    id: crypto.randomUUID(),
    name: "Procesador AMD Ryzen 7 7800X3D (Outlet)",
    price: 600000,
    stock: 0,
    img: "../img/products/smart-microchip-background-motherboard-closeup-technology.jpg",
    category: 4, // CPU Processors
    tags: [6, 7, 43, 48], // AMD, AM5, Overclockable, Refurbished
    description: "Procesador AMD Ryzen 7 de exhibición.",
  },
  {
    id: crypto.randomUUID(),
    name: "Tarjeta Gráfica NVIDIA RTX 4080 SUPER (Outlet)",
    price: 900000,
    stock: 0,
    img: "../img/products/thomas-foster-vWgoeEYdtIY-unsplash.jpg",
    category: 7, // Graphics Cards
    tags: [18, 42, 48, 52], // G-Sync, Nvidia, Refurbished, Ray Tracing
    description: "GPU RTX 4080 SUPER reacondicionada.",
  },
  {
    id: crypto.randomUUID(),
    name: 'Monitor 4K 32" IPS (Outlet)',
    price: 700000,
    stock: 0,
    img: "../img/products/computer-curvy-monitor-digital-device.jpg",
    category: 12, // Monitors
    tags: [3, 28, 48], // 4K, IPS, Refurbished
    description: "Monitor 4K de 32 pulgadas de exhibición",
  },
  {
    id: crypto.randomUUID(),
    name: "Teclado Mecánico RGB (Outlet)",
    price: 140000,
    stock: 0,
    img: "../img/products/wireless-mouse-keyboard.jpg",
    category: 9, // Keyboards & Mice
    tags: [29, 48, 49], // Keyboard, Refurbished, RGB
    description: "Teclado mecánico RGB reacondicionado.",
  },
];

export function getAccountsMocked() {
  return accounts;
}

export function getCategoriesMocked() {
  return categories;
}

export function getTagsMocked() {
  return tags;
}

export function getProductsMocked() {
  products.forEach((product) => {
    product.category = categories[product.category].id;

    let productTags = product.tags;
    product.tags = [];

    productTags.forEach((tag) => {
      product.tags.push(tags[tag].id);
    });
  });

  return products;
}
