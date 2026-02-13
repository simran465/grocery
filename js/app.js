import { getVault, saveVault } from "./data.js";
import { renderForm } from "./form.js";
import { renderList } from "./items.js";

let state = getVault();
let editId = null;
const appRoot = document.getElementById("app");

function syncUI() {
  appRoot.innerHTML = "";
  const editingItem = editId ? state.find((i) => i.id === editId) : null;

  const form = renderForm(!!editId, editingItem);
  appRoot.appendChild(form);
  appRoot.appendChild(renderList(state));

  form.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name-input").value;
    const date = document.getElementById("date-input").value;
    if (!name) return;

    if (editId) {
      state = state.map((i) => (i.id === editId ? { ...i, name, date } : i));
      editId = null;
    } else {
      state.push({ id: Date.now().toString(), name, date, completed: false });
    }
    saveVault(state);
    syncUI();
  };
}

export const toggleStatus = (id) => {
  state = state.map((i) =>
    i.id === id ? { ...i, completed: !i.completed } : i,
  );
  saveVault(state);
  syncUI();
};

export const requestEdit = (id) => {
  editId = id;
  syncUI();
  document.getElementById("name-input").focus();
};

export const deleteItem = (id) => {
  state = state.filter((i) => i.id !== id);
  saveVault(state);
  syncUI();
};

syncUI();
