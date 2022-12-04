export const required = (value) => {
  return value.trim() !== "";
};
export const offer = (value) => {
  if (value.trim() === "") {
    return true;
  } else {
    return /^\d+\.?\d{0,2}$/.test(value);
  }
};

export const decimal = (value) => {
  return /^\d+\.?\d{0,2}$/.test(value);
};
export const imageType = (type) => {
  const value = /\.(jpg|jpeg|png|gif)$/.test(type.name);
  console.log("result ", value);
  return value;
};
