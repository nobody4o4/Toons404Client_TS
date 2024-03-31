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

function getUserRoleById() {
  return url.get(`/user/role`);
}

function getCurrentUserProfileUrl(){
  return url.get(`/user/my-profile`);

}

function updateUserByIdUrl(user: FormData ) {
  return url.patch(`/user/update-profile`, user );
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


export { registerUser, role, loginUser,me,getUserRoleById,getCurrentUserProfileUrl, logoutUser, getUserById, updateUserByIdUrl, deleteUserById, getAllUsers};
