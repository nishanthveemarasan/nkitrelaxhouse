import axios from "axios";
const API = axios.create({
  baseURL: "http://nkservice.test/react-backend/public/api/",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Content-type": "application/json",
  },
});

export default API;
//http://relaxreact.test/react-backend/public/api/
//https://nkitservice.com/relax/api/
//http://nkservice.test/react-backend/public/api
