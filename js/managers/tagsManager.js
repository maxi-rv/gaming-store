let tags = [];
const tagsKey = "etiquetas";

window.addEventListener("load", function () {
  const tagsTemplate = [
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
      description:
        "Hardware optimized for content creation and video production",
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
  tags = JSON.parse(localStorage.getItem(tagsKey)) || tagsTemplate;
  localStorage.setItem(tagsKey, JSON.stringify(tags));
});

export function addTag(name, description) {
  let tag = createTag(name, description);
  tags.push(tag);
  localStorage.setItem(tagsKey, JSON.stringify(tags));
}

export function editTag(id, name, description) {
  const index = tags.findIndex((tag) => tag.id === id);
  if (index !== -1) {
    tags[index].name = name;
    tags[index].description = description;
    localStorage.setItem(tagsKey, JSON.stringify(tags));
  }
}

export function deleteTag(id) {
  tags = tags.filter((tag) => tag.id !== id);

  localStorage.setItem(tagsKey, JSON.stringify(tags));
}

export function allTags() {
  return tags;
}

export function getTag(id) {
  return tags.find((tag) => tag.id === id) || null;
}

function createTag(name, description) {
  let tag = {
    id: crypto.randomUUID(),
    name: name,
    description: description,
  };
  return tag;
}
