import GetUserRole from "@/Services/user/getUserRole.services";
import { getUserData } from "@/utils/authStorage";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import { useEffect } from "react";
import Loading from "@/pages/Loading";

export function AdminChecker({ children }: { children: React.ReactNode }) {
  const { data, loading, error } = GetUserRole();
  const [isAdmin, setIsAdmin] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Simulate delay with setTimeout
    const timeout = setTimeout(() => {
      if (data === "ADMIN") {
        setIsAdmin(true);
      } else {
        setRedirect(true);
      }
    }, 500); // Adjust delay time as needed
    // Clear timeout on component unmount or if data changes
    return () => clearTimeout(timeout);
  }, [data]);

  if (loading) {
    // Return loading indicator or any other component to indicate loading
    console.log(loading, "loadingg");
    return <Loading />;
  }

  if (error) {
    // Handle error state
    console.log(error, "error");
  }

  if (redirect) {
    // If user is not admin, redirect to home page
    return <Navigate to="/" />;
  }

  if (isAdmin) {
    // If user is admin, render children
    return <>{children}</>;
  }

  return null; // Render nothing if none of the conditions are met
}
export function AuthChecker({ children }: { children: React.ReactNode }) {
  // login
  // if auth
  // not login page

  const token = getUserData().token;

  const authentication = token ? true : false;

  if (authentication) {
    return <>{children}</>;
  }

  return <Navigate to="/login" />;
}

// export function AdminChecker({ children }: { children: React.ReactNode }) {
//   const { data, loading, error } = GetUserRole();
//   const [isAdmin, setIsAdmin] = useState(false);

//   // const roles = async () => {
//   //   const [responce, setResponce] = useState("");
//   //   const response = await hehe();
//   //   setResponce(response);
//   //   console.log(response, "jjj");
//   //   return { responce };
//   // };

//   // const {responce} = roles();

//   console.log(data);
//   console.log(error);
//   console.log(loading);

//   if (data !== "") {
//     data === "ADMIN" ? setIsAdmin(true) : setIsAdmin(false);
//     if (isAdmin) {
//       return <>{children}</>;
//     } else {
//       return <Navigate to="/" />;
//     }
//   }
//   console.log(isAdmin);
// }
