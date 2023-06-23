import {
  activeBtn,
  completeTask,
  deleteControl,
  editTask,
  formControl,
  resetBtn,
} from './modules/control.js';
import { renderApp, renderRow } from './modules/render.js';
import { getStorage } from './modules/storage.js';

const init = () => {
  const user = prompt('Введите имя пользователя ');
  const obj = getStorage(user);

  const { form, list } = renderApp();
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
