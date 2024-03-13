function setUserData({avatar, username, token }: { avatar:string, username: string, token: string }) {
    console.log(token, "token");
    console.log(username, "username");
    console.log(avatar, "avatar");
    localStorage.setItem("avatar", JSON.stringify(avatar));
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("token", JSON.stringify(token));
} 

function getUserData() {
    const username = JSON.parse(localStorage.getItem("username") as string);
    const token = JSON.parse(localStorage.getItem("token") as string);
    const avatar = JSON.parse(localStorage.getItem("avatar") as string);


    return { avatar, username, token };
}

function clearUserData() {
    localStorage.clear();
}
  
  export { setUserData, getUserData, clearUserData };
  