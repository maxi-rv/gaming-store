let categories;
const categoriesKey = "categorias";

window.addEventListener("load", function () {
  const categoriesTemplate = [
    {
      id: crypto.randomUUID(),
      name: "Audio & Speakers",
      description: "Sound systems and audio output devices",
    },
    {
      id: crypto.randomUUID(),
      name: "Cables & Adapters",
      description:
        "HDMI, DisplayPort, USB extensions, dongles, and card readers",
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
  categories =
    JSON.parse(localStorage.getItem(categoriesKey)) || categoriesTemplate;
  localStorage.setItem(categoriesKey, JSON.stringify(categories));
});

export function addCategory(name, description) {
  let category = createCategory(name, description);
  categories.push(category);
  localStorage.setItem(categoriesKey, JSON.stringify(categories));
}

export function editCategory(id, name, description) {
  const index = categories.findIndex((cat) => cat.id === id);
  if (index !== -1) {
    categories[index].name = name;
    categories[index].description = description;
    localStorage.setItem(categoriesKey, JSON.stringify(categories));
  }
}

export function deleteCategory(id) {
  categories = categories.filter((tag) => tag.id !== id);

  localStorage.setItem(categoriesKey, JSON.stringify(categories));
}

export function allCategories() {
  return categories;
}

export function getCategory(id) {
  return categories.find((cat) => cat.id === id) || null;
}

function createCategory(name, description) {
  let category = {
    id: crypto.randomUUID(),
    name: name,
    description: description,
  };
  return category;
}
