import { toggleStatus, requestEdit, deleteItem } from "./app.js";

export function createItemElement(item) {
  const article = document.createElement("article");
  article.className = `item-row ${item.completed ? "is-done" : ""}`;

  const dateLabel = item.date
    ? `<span class="item-date">${item.date}</span>`
    : "";

  article.innerHTML = `
        <div class="info-group">
            <input type="checkbox" ${item.completed ? "checked" : ""} class="check-box">
            <div class="text-group">
                <p class="name-text">${item.name}</p>
                ${dateLabel}
            </div>
        </div>
        <div class="action-group">
            <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="del-btn"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `;

  article.querySelector(".check-box").onchange = () => toggleStatus(item.id);
  article.querySelector(".edit-btn").onclick = () => requestEdit(item.id);
  article.querySelector(".del-btn").onclick = () => deleteItem(item.id);

  return article;
}
