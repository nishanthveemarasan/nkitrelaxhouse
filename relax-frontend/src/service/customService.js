export const getWarning = (count) => {
  const getCount = Number(count);
  if (getCount <= 25 && getCount > 0) {
    return "table-warning";
  } else if (getCount === 0) {
    return "table-danger";
  }
};

export const getUrl = (path, param) => {
  let url = path;
  if (param) {
    url += `?${param}`;
  }
  return url;
};

export const getUpperCaseString = (string, seperator) => {
  const word = string.split(seperator);
  let finalString = "";
  for (const [key, value] of word.entries()) {
    finalString += `${value.charAt(0).toUpperCase()}${value.slice(1)} `;
  }
  return finalString.trim();
};
export const generateRandomPassword = (length) => {
  const string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += string.charAt(Math.floor(Math.random() * string.length));
  }
  return password;
};
