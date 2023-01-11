import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config';
import { validate } from './helpers/validate';
import preparation from './helpers/dataPreparation';
import { showInputError, removeInputError } from './views/form';
import { notify } from './views/notifications';
import { login } from './services/auth.service';

const {
  form,
  inputEmail,
  inputPassword,
  inputNickname,
  inputFirstName,
  inputLastName,
  inputPhone,
  inputGenderOrientation,
  inputCity,
  inputCountry,
  inputDateBirth,
} = UI;

const inputs = [inputEmail, inputPassword, inputPhone];

// Events
form.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmit();
});
inputs.forEach((el) => {
  el.addEventListener('focus', () => removeInputError(el));
});

// Handlers
async function onSubmit() {
  const validForm = inputs.map((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  const isValidForm = validForm.every((el) => {
    if (!el) {
      return false;
    } else {
      return true;
    }
  });

  if (!isValidForm) return;

  const genderOrientation = preparation.getGenderOrientation(
    inputGenderOrientation
  );

  preparation.setDateBirth(inputDateBirth.value);
  const dateBirthDay = preparation.getDateBirthDay();
  const dateBirthMonth = preparation.getDateBirthMonth();
  const dateBirthYear = preparation.getDateBirthYear();

  try {
    await login(
      inputEmail.value,
      inputPassword.value,
      inputNickname.value,
      inputFirstName.value,
      inputLastName.value,
      inputPhone.value,
      genderOrientation,
      inputCity.value,
      inputCountry.value,
      dateBirthDay,
      dateBirthMonth,
      dateBirthYear
    );
    form.reset();
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch {
    notify({ msg: 'Login failed', className: 'alert-danger' });
  }
}
