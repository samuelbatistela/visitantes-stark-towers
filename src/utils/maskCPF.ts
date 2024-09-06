export const maskCPF = (value: string) => {
  value = value.replace(/\D/g, "");

  if (value.length <= 11) {
    return value
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      .replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3")
      .replace(/(\d{3})(\d{1,3})/, "$1.$2");
  }

  return value;
};

export default maskCPF;
