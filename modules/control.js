import { createModal } from './createElements.js';
import { renderRow } from './render.js';
import {
  changeStorageItem,
  changeStorageTask,
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
    console.log(e.target);
    const formData = new FormData(e.target);
    formData.append('statue', 'В процессе');
    formData.append('id', Math.random().toString().substring(2, 10));
    const newTask = Object.fromEntries(formData);
    console.log(newTask);
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
  task.querySelector('.task').removeAttribute('contenteditable', 'true');
  task.querySelector('.btn-success').setAttribute('disabled', '');
  task.querySelector('.btn-success').style.opacity = 'inherit';
};

export const editTask = (list, user) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.btn-secondary')) {
      const task = target.closest('.table-task');
      const text = task.querySelector('.task').textContent;

      console.log(text);
      const id = task.querySelector('.id').textContent;
      changeStorageTask(id, user, text);
    }
  });
  list.addEventListener('blur', () => {
    console.log('kom');
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

export const modalControl = () => {
  const body = document.querySelector('body');
  const overlay = createModal();
  body.append(overlay);
  overlay.modal.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objectUser = Object.fromEntries(formData);
    overlay.classList.add('d-none');
    return objectUser.name;
  });
};
