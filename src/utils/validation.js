export const isValidNumber = number => {
  if (typeof number === "number") {
    return true;
  }

  const convertedNumber = Number(number);

  return !!convertedNumber || convertedNumber === 0;
};

export const isValidEmail = email => {
  const emailRegex = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

  return emailRegex.test(email);
};
