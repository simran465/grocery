export function renderForm(isEditing, existingItem = null) {
  const form = document.createElement("form");
  form.className = "grocery-form";
  form.innerHTML = `
        <h1 class="title">Grocery Bud</h1>
        <div class="input-grid">
            <input type="text" id="name-input" placeholder="e.g. eggs" value="${existingItem ? existingItem.name : ""}">
            <input type="date" id="date-input" value="${existingItem ? existingItem.date : ""}">
            <button type="submit" id="submit-btn" class="${isEditing ? "update-mode" : ""}">
                ${isEditing ? "Update" : "Add"}
            </button>
        </div>
    `;
  return form;
}
