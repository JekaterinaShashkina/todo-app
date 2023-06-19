import { createRow } from './createElements.js';
import { dataArray } from './dataArray.js';
import { renderRow } from './render.js';
import { removeStorage, setStorage } from './storage.js';

const addTaskPage = (task, list) => {
  list.append(createRow(task));
};

export const formControl = (form, list, user) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    formData.append('statue', 'В процессе');
    formData.append('id', Math.random().toString().substring(2, 10));
    const newTask = Object.fromEntries(formData);
    // dataArray.push(newTask);
    // console.log(dataArray);
    // renderRow(dataArray, list);
    addTaskPage(newTask, list);
    setStorage(user, newTask);

    form.reset();
    return newTask;
  });
};
export const deleteControl = (list, user) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.btn-danger')) {
      console.log('delete');
      const task = target.closest('.table-task');
      // console.log(task);
      task.remove();
      const id = task.querySelector('.id').textContent;
      console.log(id);
      removeStorage(id, user);
    }
  });
};

export const completeTask = (list) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.btn-success')) {
      console.log('complete');
      const task = target.closest('.table-task');
      task.querySelector('.statue').textContent = 'Выполнена';
      task.classList.remove('table-light');
      task.classList.add('table-success');
      task.querySelector('.task').classList.add('text-decoration-line-through');

      console.log();
    }
  });
};
