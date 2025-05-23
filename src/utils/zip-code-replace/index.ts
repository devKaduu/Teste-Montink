export const zipCodeMask = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "").slice(0, 8);
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
};
