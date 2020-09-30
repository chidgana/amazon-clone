import axios from "axios";

const instance = axios.create({
  baseURL: "....", //Api url cloud fuction url
});

export default instance;
