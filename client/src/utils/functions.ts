export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  if (password.length < 4 || password.length > 60) {
    return false;
  }
  return true;
};

export const handleBlur = (
  event: React.FocusEvent<HTMLInputElement>,
  className: string
): void => {
  const label = document.querySelector(`label[for='${event.target.id}']`);
  if (label && event.target.value === "") {
    label?.classList.remove(className);
  }
};

export const handleFocus = (
  event: React.FocusEvent<HTMLInputElement>,
  className: string
): void => {
  const label = document.querySelector(`label[for='${event.target.id}']`);
  label?.classList.add(className);
};
