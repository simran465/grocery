import { createItemElement } from "./single-item.js";

export function renderList(items) {
  const listDiv = document.createElement("section");
  listDiv.className = "list-section";

  if (items.length === 0) {
    listDiv.innerHTML = `<p class="empty-msg">No items in your list.</p>`;
    return listDiv;
  }

  items.forEach((item) => listDiv.appendChild(createItemElement(item)));
  return listDiv;
}
