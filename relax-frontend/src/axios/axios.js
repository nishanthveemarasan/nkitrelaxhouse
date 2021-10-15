import axios from "axios";
const API = axios.create({
  baseURL: "https://nkitservice.com/app/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
  },
});

export default API;
//http://relaxreact.test/react-backend/public/api/
//https://nkitservice.com/relax/api/
//http://nkservice.test/react-backend/public/api
//https://nkitservice.com/app/api
