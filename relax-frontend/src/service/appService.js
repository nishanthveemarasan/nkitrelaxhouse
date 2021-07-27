import API from "src/axios/axios";

export const getProductApi = (param, row) => {
  let url = `get-all-chairs/${row}`;
  if (param) {
    const page = param.split("?")[1];
    url = `get-all-chairs?${page}`;
  }
  return API.get(url);
};

export const searchApi = (url, queryString) => {
  const getUrl = `${url}/${queryString}`;
  return API.get(getUrl);
};
export const sendGetAdminApi = (url) => {
  return API.get(url);
};
export const sendPostAdminApi = (url, data) => {
  return API.post(url, data);
};
