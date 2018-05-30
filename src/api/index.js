const url = "http://localhost:5000";

export default {
  getTodos() {
    return fetch(`${url}/api/todo/all`).then(data => data.json());
  },
};
