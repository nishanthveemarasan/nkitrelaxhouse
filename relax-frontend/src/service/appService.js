import API from "src/axios/axios";

export const getProductApi = (param, row) => {
  let url = `get-all-chairs/${row}`;
  if (param) {
    const page = param.split("?")[1];
    url = `get-all-chairs?${page}`;
  }
  return API.get(url);
};

export const sendGetAdminApi = (url) => {
  const token = localStorage.getItem("token");
  return API.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const sendPostAdminApi = (url, data) => {
  const token = localStorage.getItem("token");
  return API.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const sendPostApi = (url, data) => {
  return API.post(url, data);
};
export const sendGetApi = (url, queryString) => {
  const getUrl = `${url}/${queryString}`;
  console.log(getUrl);
  return API.get(getUrl);
};

export const getApi = (url) => {
  return API.get(url);
};
