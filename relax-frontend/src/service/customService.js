export const getWarning = (count) => {
  const getCount = Number(count);
  if (getCount <= 25 && getCount > 0) {
    return "table-warning";
  } else if (getCount === 0) {
    return "table-danger";
  }
};
