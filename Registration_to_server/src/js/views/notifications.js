function getContainer() {
  return document.querySelector('.notify-container');
}

// Строка уведомления
function alertTemplate(msg, className, index) {
  return `
    <div class="alert ${className}" data-index="${index}">
      ${msg}
    </div>
  `;
}

// Контейнер для уведомлений
function notifyContainerTemplate() {
  return `
    <div class="notify-container" style="position: fixed; top: 10px; right: 10px; z-index: 99;"></div>
  `;
}

// Создаем контейнер
function createNotifyContainer() {
  const template = notifyContainerTemplate();
  document.body.insertAdjacentHTML('afterbegin', template);
}

// Возвращает количество уведомлений в контейнере, записывая это число в индекс уведомления дял упрощенного поиска и удаления
function getAlertIndex() {
  return document.querySelectorAll('.notify-container .alert').length;
}

/**
 * Function notify. Show notification message
 * @param {Object} settings
 * @param {string} settings.msg
 * @param {string} settings.className
 * @param {number} settings.timeout
 */

// настройка уведомления для bootstrap
export function notify({
  msg = 'Info message',
  className = 'alert-info',
  timeout = 2500,
} = {}) {
  if (!getContainer()) {
    // если нет контейнера, создаем
    createNotifyContainer();
  }

  const index = getAlertIndex();
  const template = alertTemplate(msg, className, index);
  const container = getContainer();

  container.insertAdjacentHTML('beforeend', template);

  setTimeout(() => closeNotify(index), timeout);
}

// Убрать уведомление
export function closeNotify(index) {
  let alert;

  if (index === undefined) {
    alert = document.querySelector('.notify-container .alert');
  } else {
    alert = document.querySelector(
      `.notify-container .alert[data-index="${index}"]`
    );
  }

  if (!alert) {
    console.warn('Alert not fount');
    return;
  }

  const container = getContainer();
  container.removeChild(alert);
}
