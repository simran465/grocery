export const getVault = () =>
  JSON.parse(localStorage.getItem("grocery_vault")) || [];
export const saveVault = (data) =>
  localStorage.setItem("grocery_vault", JSON.stringify(data));
