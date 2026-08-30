document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const list = document.getElementById('todo-list');

  function addTodo() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = '';
  }

  addBtn.addEventListener('click', addTodo);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
  });
});