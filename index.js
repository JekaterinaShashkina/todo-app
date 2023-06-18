import { dataArray } from './modules/dataArray.js';
import { renderApp, renderRow } from './modules/render.js';
import { getStorage } from './modules/storage.js';

const init = () => {
  const user = prompt('Введите имя пользователя ');
  const obj = getStorage(user);

  const { form, list } = renderApp();
  const allRow = renderRow(list, obj);
};

init();
