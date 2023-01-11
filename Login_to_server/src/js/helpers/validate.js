const regExpDic = {
  email:
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/,
};

/**
 * Function validate. Check Input on RegExp provided in regExpDic by input data-required type
 * @param {HTMLInputElement} el
 * @returns {Boolean} - Return true if input valid or doesn't has data-required attr
 */

export function validate(el) {
  const regExpName = el.dataset.required;
  // dataset.required возвращает нам название инпута (data-required="email") для валидации
  if (!regExpDic[regExpName]) return true;
  // если в валидируемом инпуте все верно по правилу из regExpDic, возвращаем true
  return regExpDic[regExpName].test(el.value);
  // Метод regexp.test(str) ищет совпадение и возвращает true/false, в зависимости от того, находит ли он его.
}
