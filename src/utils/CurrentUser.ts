export const getUserBytoken = () => {
    const userId = JSON.parse(localStorage.getItem("token") as string);
    return userId;
    }
