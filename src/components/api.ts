import axios from "axios";

export const getUsers = () => {
  console.log("Callig Api for getUsers..");
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
};