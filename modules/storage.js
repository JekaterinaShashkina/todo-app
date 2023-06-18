export const getStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) ||
  localStorage.setItem(key, JSON.stringify([]));
