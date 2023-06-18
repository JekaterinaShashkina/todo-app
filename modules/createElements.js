export const createTitle = () => {
  const title = document.createElement('h3');
  title.textContent = 'Todo App';
  return title;
};

export const createForm = () => {
  const formEnter = document.createElement('form');
  formEnter.classList.add('d-flex', 'align-items-center', 'mb-3');
  const enterLabel = document.createElement('label');
  enterLabel.classList.add('form-group', 'me-3', 'mb-0');
  const enterInput = document.createElement('input');
  enterInput.classList.add('form-control');
  enterInput.type = 'text';
  enterInput.placeholder = 'ввести задачу';
  enterLabel.append(enterInput);
  const buttonGroup = createButtonsGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'submit',
      text: 'Сохранить',
    },
    {
      className: 'btn btn-warning',
      type: 'reset',
      text: 'Очистить',
    },
  ]);
  formEnter.append(enterLabel, ...buttonGroup.btns);

  return formEnter;
};
const createButtonsGroup = (params) => {
  const btns = params.map(({ className, type, text }) => {
    const button = document.createElement('button');
    button.type = type;
    button.className = className;
    button.textContent = text;
    button.style.marginRight = 1 + 'rem';
    return button;
  });

  return {
    btns,
  };
};

export const createTable = () => {
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');
  const thead = document.createElement('thead');
  thead.insertAdjacentHTML(
    'beforeend',
    `<tr>
          <th>№</th>
          <th>Задача</th>
          <th>Статус</th>
          <th>Действия</th>

        </tr>
        `,
  );
  tableWrapper.table = table;
  const tbody = document.createElement('tbody');
  table.append(thead, tbody);
  tableWrapper.append(table);
  console.log(tableWrapper.table);
  return tableWrapper;
};

export const createRow = ({ nr, statue, task }) => {
  const tr = document.createElement('tr');
  tr.classList.add('table-light');
  const tdNumber = document.createElement('td');
  tdNumber.textContent = nr;
  const tdTask = document.createElement('td');
  tdTask.classList.add('task');
  tdTask.textContent = task;

  const tdStatus = document.createElement('td');
  tdStatus.textContent = statue;
  const tdBtns = document.createElement('td');
  const btnDel = document.createElement('button');
  btnDel.classList.add('btn', 'btn-danger');
  // btnDel.type = 'button';
  btnDel.textContent = 'Удалить';

  const btnEnd = document.createElement('button');
  btnEnd.classList.add('btn', 'btn-success');
  // btnEnd.type = 'button';
  btnEnd.textContent = 'Завершить';
  tdBtns.append(btnDel, btnEnd);

  tr.append(tdNumber, tdTask, tdStatus, tdBtns);
  return tr;
};
