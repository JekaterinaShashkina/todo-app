export const getStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) ||
  localStorage.setItem(key, JSON.stringify([]));

export const setStorage = (key, value) => {
  const tasks = getStorage(key);
  tasks.push(value);
  return localStorage.setItem(key, JSON.stringify(tasks));
};
export const removeStorage = (id, key) => {
  let tasks = getStorage(key);
  tasks.forEach((task) => {
    if (task.id === id) {
      tasks.splice(task, 1);
    }
  });
  localStorage.setItem(key, JSON.stringify(tasks));
};
export const changeStorageItem = (id, key) => {
  let tasks = getStorage(key);
  tasks.forEach((task) => {
    if (task.id === id) {
      task.statue = 'Выполнено';
    }
  });
  localStorage.setItem(key, JSON.stringify(tasks));
};
export const changeStorageTask = (id, key, text) => {
  let tasks = getStorage(key);
  tasks.forEach((task) => {
    if (task.id === id) {
      task.task = text;
    }
  });
  localStorage.setItem(key, JSON.stringify(tasks));
};
