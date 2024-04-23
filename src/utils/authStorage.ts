import CryptoJS from 'crypto-js';

export type UserData = {
  avatar: string;
  username: string;
  token: string;
  role: string;
  isSubscribed: boolean;
  id: string;
}

function decryptUserData(encryptedData: string): UserData | null {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData,   "secretkey123");
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  } catch (error) {
    console.error('Error decrypting user data:', error);
    return null;
  }
}

function setUserData(user: UserData) {
  console.log(user.token, "token");
  console.log(user.username, "username");
  console.log(user.avatar, "avatar");
  console.log(user.role, "role");
  console.log(user.isSubscribed, "isSubscribed");

  // Encrypt all user data with the secret key
  const encryptedDetails = CryptoJS.AES.encrypt(
    JSON.stringify(user),
   "secretkey123"
  ).toString();

  // Store the encrypted data in localStorage
  localStorage.setItem("encryptedData", encryptedDetails);
}

function getUserData(): UserData | null {
  const encryptedData = localStorage.getItem("encryptedData");

  if (encryptedData) {
    return decryptUserData(encryptedData);
  }

  return null;
}

function clearUserData() {
  localStorage.clear();
}

export { setUserData, getUserData, clearUserData };