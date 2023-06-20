import {
  activeBtn,
  completeTask,
  deleteControl,
  formControl,
  resetBtn,
} from './modules/control.js';
import { dataArray } from './modules/dataArray.js';
import { renderApp, renderRow } from './modules/render.js';
import { getStorage, setStorage } from './modules/storage.js';

const init = () => {
  const user = prompt('Введите имя пользователя ');
  const obj = getStorage(user);

  const { form, list } = renderApp();
  activeBtn(form.input, form.addBtn);
  resetBtn(form.resBtn, form.addBtn);
  const allRow = renderRow(obj, list);
  console.log(list);
  const newTask = formControl(form, list, user);
  // console.log(...allRow);
  deleteControl(list, user);
  completeTask(list, user);
};

init();
