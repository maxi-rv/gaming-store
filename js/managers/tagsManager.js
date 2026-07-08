import { getTagsTemplate } from "../managers/mockData.js";

let tags = [];
const tagsKey = "etiquetas";

window.addEventListener("load", function () {
  tags = JSON.parse(localStorage.getItem(tagsKey)) || getTagsTemplate();
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
