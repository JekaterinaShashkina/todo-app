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
  enterInput.name = 'task';
  enterInput.dataset.id = 'task';
  enterInput.placeholder = 'ввести задачу';

  const dropList = document.createElement('select');
  dropList.classList.add('form-select');
  dropList.name = 'droplist';
  dropList.style.width = 'auto';
  dropList.style.marginRight = 20 + 'px';
  dropList.dataset.id = 'droplist';
  dropList.insertAdjacentHTML(
    'beforeend',
    ` <option selected disabled>Выбери важность задачи</option>
      <option value="Обычная">Обычная</option>
      <option value="Важная">Важная</option>
      <option value="Срочная">Срочная</option>
    </select>`,
  );

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
  buttonGroup.btns[0].setAttribute('disabled', '');
  buttonGroup.btns[0].style.opacity = 'inherit';

  formEnter.addBtn = buttonGroup.btns[0];
  formEnter.resBtn = buttonGroup.btns[1];
  formEnter.input = enterInput;
  formEnter.droplist = dropList;
  formEnter.append(enterLabel, dropList, ...buttonGroup.btns);

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
          <th>Важность задачи</th>
          <th>Статус</th>
          <th>Действия</th>

        </tr>
        `,
  );
  tableWrapper.table = table;
  const tbody = document.createElement('tbody');
  table.tbody = tbody;
  table.append(thead, tbody);
  tableWrapper.append(table);
  return tableWrapper;
};

export const createRow = (obj, index) => {
  const { id, droplist, statue, task } = obj;
  const tr = document.createElement('tr');
  tr.classList.add('table-light', 'table-task');
  const tdNumber = document.createElement('td');
  tdNumber.textContent = index + 1;
  const tdId = document.createElement('td');
  tdId.classList.add('d-none', 'id');
  tdId.textContent = id;
  const tdTask = document.createElement('td');
  tdTask.classList.add('task');
  tdTask.textContent = task;
  tdTask.setAttribute('contenteditable', 'true');
  const tdImp = document.createElement('td');
  tdImp.classList.add('important');
  tdImp.textContent = droplist;

  const tdStatus = document.createElement('td');
  tdStatus.classList.add('statue');
  tdStatus.textContent = statue;
  const tdBtns = document.createElement('td');
  const btnDel = document.createElement('button');
  btnDel.classList.add('btn', 'btn-danger');
  btnDel.style.marginRight = 20 + 'px';
  btnDel.type = 'button';
  btnDel.textContent = 'Удалить';

  const btnEnd = document.createElement('button');
  btnEnd.classList.add('btn', 'btn-success');
  btnEnd.style.marginRight = 20 + 'px';
  btnEnd.type = 'button';
  btnEnd.textContent = 'Завершить';

  const btnEdit = document.createElement('button');
  btnEdit.classList.add('btn', 'btn-secondary');
  btnEdit.type = 'button';
  btnEdit.textContent = 'Изменить';
  tdBtns.append(btnDel, btnEnd, btnEdit);

  tr.append(tdNumber, tdId, tdTask, tdImp, tdStatus, tdBtns);
  return tr;
};

export const createModal = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay', 'active');
  overlay.style =
    'top: 0px; right: 0px;position: fixed;bottom: 0;left: 0;background-color: rgba(100, 100, 100, 0.8);';
  const modal = document.createElement('div');
  modal.classList.add('modal__user');
  modal.style = `
  position: relative;
  max-width: 500px;
  max-height: 300px;
  padding: 50px;
  background-color: white;
  margin: 100px auto;
`;
  overlay.modal = modal;

  const modalTitle = document.createElement('h3');
  modalTitle.textContent = 'Введите имя пользователя';

  const modalForm = document.createElement('form');
  modalForm.classList.add('d-flex', 'align-items-center', 'mb-3');
  const formLabel = document.createElement('label');
  formLabel.classList.add('form-group', 'me-3', 'mb-0');

  const formInput = document.createElement('input');
  formInput.classList.add('form-control');
  formInput.name = 'name';
  formInput.dataset.id = 'name';
  formInput.placeholder = 'Имя пользователя';
  formInput.setAttribute('required', '');
  formLabel.append(formInput);
  const formBtn = document.createElement('button');
  formBtn.classList.add('btn', 'btn-success');
  formBtn.type = 'submit';
  formBtn.textContent = 'Подтвердить';

  modalForm.append(formLabel, formBtn);
  modal.append(modalTitle, modalForm);
  overlay.append(modal);
  modal.form = modalForm;
  return overlay;
};
