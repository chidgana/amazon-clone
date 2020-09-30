import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-7027c/us-central1/api", //Api url cloud fuction url
});

export default instance;
