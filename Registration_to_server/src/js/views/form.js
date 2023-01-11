/**
 * Function inputErrorTemplate
 * @param {String} msg
 */
function inputErrorTemplate(msg) {
  return `
    <div class="invalid-feedback">${msg}</div>
  `;
} // шаблон для вывода сообщения bootstrap

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el
 */
export function showInputError(el) {
  const parent = el.parentElement;
  // ищем ближайшего родителя для отрисовки валидации bootstrap
  const msg = el.dataset.invalidMessage || 'Invalid input';
  // назходим по дата-имссг строку для вывода валидации
  const template = inputErrorTemplate(msg);
  el.classList.add('is-invalid');
  parent.insertAdjacentHTML('beforeend', template);
  // добавляем шаблон в конец инпута
}
/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} el
 */
export function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelectorAll('.invalid-feedback');

  if (!err) return;

  el.classList.remove('is-invalid');
  err.forEach((el) => el.remove());
} // удаление сообщение о неверной валидации  у родителя
