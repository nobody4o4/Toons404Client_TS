import { getUserData } from "@/utils/authStorage";
import { Navigate } from "react-router-dom";

function AuthChecker({ children }: { children: React.ReactNode }) {
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

export default AuthChecker;
