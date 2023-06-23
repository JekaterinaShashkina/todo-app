import {
  activeBtn,
  completeTask,
  deleteControl,
  editTask,
  formControl,
  modalControl,
  resetBtn,
} from './modules/control.js';
import { renderApp, renderRow } from './modules/render.js';
import { getStorage } from './modules/storage.js';

const init = () => {
  const user = prompt('Введите имя пользователя ');

  const { modal, form, list } = renderApp();
  const u = modalControl(modal);
  console.log(u);
  const obj = getStorage(user);
  activeBtn(form.input, form.addBtn);
  resetBtn(form.resBtn, form.addBtn);
  // console.log(list.innerHtml);
  // if (list.textContent !== '') {
  const allRow = renderRow(obj, list);
  // }
  const newTask = formControl(form, list, user);
  deleteControl(list, user);
  completeTask(list, user);
  editTask(list, user);
};

init();
