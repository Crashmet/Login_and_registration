class DataPreparation {
  constructor() {
    this.genderOrientation = null;
    this.dateBirth = null;
    this.dateBirthDay = null;
    this.dateBirthMonth = null;
    this.dateBirthYear = null;
  }

  getGenderOrientation(inputGenderOrientation) {
    for (let el of inputGenderOrientation) {
      if (el.checked) {
        this.genderOrientation = el.value;
      }
    }
    return this.genderOrientation;
  }

  setDateBirth(inputDateBirth) {
    this.dateBirth = new Date(inputDateBirth);
  }

  getDateBirthDay() {
    this.dateBirthDay = this.dateBirth.getDate();
    return this.dateBirthDay;
  }

  getDateBirthMonth() {
    this.dateBirthMonth = this.dateBirth.getMonth();
    return this.dateBirthMonth;
  }

  getDateBirthYear() {
    this.dateBirthYear = this.dateBirth.getFullYear();
    return this.dateBirthYear;
  }
}

const preparation = new DataPreparation();

export default preparation;
