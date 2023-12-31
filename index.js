import {
  activeBtn,
  completeTask,
  deleteTask,
  editTask,
  formControl,
  resetBtn,
} from './modules/control.js';
import { createModal } from './modules/createElements.js';
import { renderApp, renderRow } from './modules/render.js';
import { getStorage } from './modules/storage.js';

const init = () => {
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

    editTask(list, user.name);
    formControl(form, list, user.name);
    completeTask(list, user.name);
    if (obj) {
      renderRow(obj, list);
    }
    deleteTask(list, user.name, obj);
  });
};

init();
