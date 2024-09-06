export const maskBirthDate = (value: string) => {
  value = value.replace(/\D/g, "");

  if (value.length <= 2) {
    return value;
  } else if (value.length <= 4) {
    return value.slice(0, 2) + "/" + value.slice(2);
  } else if (value.length <= 8) {
    return value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4);
  } else {
    return (
      value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8)
    );
  }
};

export default maskBirthDate;
