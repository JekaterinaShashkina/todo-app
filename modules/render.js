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
  console.log(table.table);

  return {
    form,
    list: table.table,
  };
};

export const renderRow = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};
