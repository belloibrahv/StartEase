import axios from "axios";

export const fetchSchool = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 2000,
});
