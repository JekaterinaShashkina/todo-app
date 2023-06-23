import {
  activeBtn,
  completeTask,
  deleteControl,
  editTask,
  formControl,
  resetBtn,
} from './modules/control.js';
import { createModal } from './modules/createElements.js';
import { renderApp, renderRow } from './modules/render.js';
import { getStorage } from './modules/storage.js';

const init = () => {
  // const user = prompt('Введите имя пользователя ');
  // // const user = modalControl();
  // console.log(user);
  const body = document.querySelector('body');
  const overlay = createModal();
  body.append(overlay);
  overlay.modal.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);
    overlay.classList.add('d-none');
    const { form, list } = renderApp();
    const obj = getStorage(user.name);
    activeBtn(form.input, form.addBtn);
    resetBtn(form.resBtn, form.addBtn);
    if (obj) {
      renderRow(obj, list);
    }
    formControl(form, list, user.name);
    deleteControl(list, user.name);
    completeTask(list, user.name);
    editTask(list, user.name);
  });
};

init();
