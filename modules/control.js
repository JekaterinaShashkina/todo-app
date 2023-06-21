import { renderRow } from './render.js';
import {
  changeStorageItem,
  getStorage,
  removeStorage,
  setStorage,
} from './storage.js';

// const addTaskPage = (task, list) => {
//   list.append(createRow(task));
// };

export const formControl = (form, list, user) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('statue', 'В процессе');
    formData.append('id', Math.random().toString().substring(2, 10));
    const newTask = Object.fromEntries(formData);
    setStorage(user, newTask);
    const obj = getStorage(user);
    renderRow(obj, list);
    form.reset();
    form.addBtn.setAttribute('disabled', '');
    return newTask;
  });
};
export const deleteControl = (list, user) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.btn-danger')) {
      const result = window.confirm('Are you sure?');
      if (result) {
        const task = target.closest('.table-task');
        task.remove();
        const id = task.querySelector('.id').textContent;
        removeStorage(id, user);
      }
    }
  });
};

export const completeTask = (list, user) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.btn-success')) {
      const task = target.closest('.table-task');
      task.querySelector('.statue').textContent = 'Выполнена';
      completeTaskStyle(task);
      // const tasks = getStorage(user);
      const id = task.querySelector('.id').textContent;
      changeStorageItem(id, user);
    }
  });
};
export const completeTaskStyle = (task) => {
  task.classList.remove('table-light');
  task.classList.add('table-success');
  task.querySelector('.task').classList.add('text-decoration-line-through');
  task.querySelector('.btn-success').setAttribute('disabled', '');
};

export const activeBtn = (input, btn) => {
  input.addEventListener('input', () => {
    btn.disabled = !input.value.length;
  });
};
export const resetBtn = (resBtn, addBtn) => {
  resBtn.addEventListener('click', () => {
    addBtn.setAttribute('disabled', '');
  });
};
