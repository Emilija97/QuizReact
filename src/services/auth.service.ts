import { env } from "../App";
import { User } from "../models/User";

export function logInUser(username: string, password: string) {
  console.log("Usao sam u service " + username + ", a password " + password);
  return fetch(`${env.url}/users?username=${username}&password=${password}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}

export function getUserById(id: string) {
  return fetch(`${env.url}/users/${id}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}
export function getAllUsers() {
  return fetch(`${env.url}/users`).then(response => response.json());
}
export function registerUser(user: User) {
  return fetch(`${env.url}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: user.name,
      surname: user.surname,
      username: user.username,
      password: user.password
    })
  })
    .then(response => {
      console.log(response);
      response.json();
    })
    .catch(error => console.log(error));
}
