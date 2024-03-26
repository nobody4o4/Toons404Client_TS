import { url } from "../index/index.services";


function registerUser(user: object) {
  console.log(user);
  return url.post(`/user/register`, user);
}

function loginUser(user: object) {
  return url.post(`/user/login`, user);
}

function logoutUser() {
  return url.post(`/user/logout`);
}

function getUserById(id: string) {
  return url.get(`/user/${id}`);
}

function hehe() {
  return url.get(`/user/hehe`);
}

function updateUserById(id: string, user: object) {
  return url.patch(`/user/update/${id}`, user);
}

function deleteUserById(id: string) {
  return url.delete(`/user/delete/${id}`);
}

function getAllUsers() {
  return url.get(`/user/all`);
}

function me() {
  return url.get(`/user/me`);
}

function role() {
  return url.get(`/user/role`);
}


export { registerUser, role, loginUser,me,hehe, logoutUser, getUserById, updateUserById, deleteUserById, getAllUsers};
