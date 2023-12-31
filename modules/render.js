import { completeTaskStyle } from './control.js';
import {
  createForm,
  createRow,
  createTable,
  createTitle,
} from './createElements.js';

export const renderApp = () => {
  const app = document.querySelector('.app-container');
  app.classList.add(
    'vh-100',
    'w-100',
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'flex-column',
  );
  const title = createTitle();
  const form = createForm();
  const table = createTable();
  app.append(title, form, table);
  return {
    form,
    list: table.table.tbody,
  };
};
export const renderRow = (arr, table) => {
  table.textContent = '';
  const allRow = arr.map(createRow);
  allRow.forEach((elem) => {
    const el = elem.querySelector('.statue').textContent;
    if (el === 'Выполнена') {
      completeTaskStyle(elem);
    }
  });
  table.append(...allRow);
  return allRow;
};
