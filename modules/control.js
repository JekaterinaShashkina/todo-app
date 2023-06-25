import { renderRow } from './render.js';
import {
  changeStorageItem,
  changeStorageTask,
  getStorage,
  removeStorage,
  setStorage,
} from './storage.js';

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
export const deleteTask = (list, user, obj) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.btn-danger')) {
      const result = window.confirm('Are you sure?');
      if (result) {
        const task = target.closest('.table-task');
        const id = task.querySelector('.id').textContent;
        task.remove();
        const tasks = removeStorage(id, user);
        renderRow(tasks, list);
      }
    }
  });
};

export const completeTask = (list, user) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    const task = target.closest('.table-task');
    const id = task.querySelector('.id').textContent;
    if (
      target.closest('.btn-success') &&
      task.querySelector('.statue').textContent === 'В процессе'
    ) {
      task.querySelector('.statue').textContent = 'Выполнена';
      completeTaskStyle(task);
      changeStorageItem(id, user, 'Выполнена');
    } else {
      task.querySelector('.statue').textContent = 'В процессе';
      task.classList.add('table-light');
      task.classList.remove('table-success');
      task
        .querySelector('.task')
        .classList.remove('text-decoration-line-through');
      changeStorageItem(id, user, 'В процессе');
    }
  });
};
export const completeTaskStyle = (task) => {
  task.classList.remove('table-light');
  task.classList.add('table-success');
  task.querySelector('.task').classList.add('text-decoration-line-through');
};

export const editTask = (list, user) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    const task = target.closest('.table-task');
    const btn = task.querySelector('.btn-secondary');
    if (
      target.closest('.btn-secondary') &&
      target.closest('.btn-secondary').textContent === 'Изменить'
    ) {
      const text = task.querySelector('.task');
      text.setAttribute('contenteditable', 'true');
      text.style.border = '3px solid';
      btn.textContent = 'Сохранить';
    } else if (
      target.closest('.btn-secondary') &&
      target.closest('.btn-secondary').textContent === 'Сохранить'
    ) {
      const id = task.querySelector('.id').textContent;
      const text = task.querySelector('.task').textContent;
      task.querySelector('.task').removeAttribute('contenteditable', 'true');
      task.querySelector('.task').style = 'border: none;';
      btn.textContent = 'Изменить';
      changeStorageTask(id, user, text);
    }
  });
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
