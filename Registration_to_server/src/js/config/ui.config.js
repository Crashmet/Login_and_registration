const UI = {
  form: document.forms['registrationForm'],
  inputEmail: document.getElementById('email'),
  inputPassword: document.getElementById('password'),
  inputNickname: document.getElementById('nickname'),
  inputFirstName: document.getElementById('firstName'),
  inputLastName: document.getElementById('lastName'),
  inputPhone: document.getElementById('phone'),
  inputGenderOrientation: document.querySelectorAll(
    'input[name="genderOrientation"]'
  ),
  inputCity: document.getElementById('city'),
  inputCountry: document.getElementById('country'),
  inputDateBirth: document.getElementById('dateBirth'),
};

export default UI;
