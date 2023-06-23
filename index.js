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
  // const user = modalControl();
  console.log(user);
  const { form, list } = renderApp();
  const obj = getStorage(user);

  activeBtn(form.input, form.addBtn);
  resetBtn(form.resBtn, form.addBtn);
  const allRow = renderRow(obj, list);
  const newTask = formControl(form, list, user);
  deleteControl(list, user);
  completeTask(list, user);
  editTask(list, user);
};

init();
