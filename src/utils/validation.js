export const isValidNumber = number => {
  if (typeof number === "number") {
    return true;
  }

  const convertedNumber = Number(number);

  return !!convertedNumber || convertedNumber === 0;
};

export const isValidEmail = email => {
  const emailRegex = /^[0-9A-Za-z_\-.]+@([0-9A-Za-z_\-.]\.)+[0-9A-Za-z_\-.]+$/;

  return emailRegex.test(email);
};
