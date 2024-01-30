import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWJkOWM3NmM0Yjc4OGZhYTk0YTVlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODk2OTg1NSwiZXhwIjoxNjg5MjI5MDU1fQ.WIFuT3SL1FXNZgb2mzVmg8vU4dvYuBwBVTp8SnWYwTM"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token:`Bearer ${TOKEN}` }
});
