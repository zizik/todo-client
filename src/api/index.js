import axios from "axios";

const url = "http://localhost:5000";

export default {
  getTodos() {
    return axios.get(`${url}/api/todo/all`);
  },
  addTodo(data) {
    return axios.post(`${url}/api/todo/add`, data);
  },
};
