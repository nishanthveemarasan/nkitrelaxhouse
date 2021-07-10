import axios from "axios";
const API = axios.create({
  baseURL: "https://nkitservice.com/relax/api/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default API;
