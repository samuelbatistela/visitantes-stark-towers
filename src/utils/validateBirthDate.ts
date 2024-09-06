const validateBirthDate = (value: string) => {
  return /^\d{2}\/\d{2}\/\d{4}$/.test(value);
};

export default validateBirthDate;
