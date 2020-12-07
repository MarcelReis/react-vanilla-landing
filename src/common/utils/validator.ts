export const validateEmail = (email: string): boolean | null => {
  if (!email) {
    return null;
  }
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validatePhone = (phone: string): boolean | null => {
  if (!phone) {
    return null;
  }
  const re = /\(\d{2}\)\s\d{4,5}\-\d{4}/;
  return re.test(phone);
};

export const validateName = (name: string): boolean | null => {
  if (!name) {
    return null;
  }
  return name.trim().length > 0;
};

export const validateMessage = (message: string): boolean | null => {
  if (!message) {
    return null;
  }
  return message.trim().length > 0;
};
