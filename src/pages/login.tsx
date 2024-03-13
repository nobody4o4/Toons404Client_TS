import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Services/user/user.services";
import { LoginValidator } from "../schema/user.schema";
import { clearUserData, getUserData, setUserData } from "../utils/authStorage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const userData = getUserData();

  useEffect(() => {
    setUsername(userData.username || "");
  }, [userData]);

  const handleLogout = () => {
    clearUserData();
    setUsername("");
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginValidator,
      onSubmit: async (values) => {
        try {
          const response = await loginUser(values);
          const { user, token } = response.data;
          setUserData({
            avatar: user.avatar,
            username: user.username,
            token: token,
          });
          setUsername(user.username);
          navigate("/");
        } catch (error) {
          console.error(error);
          // Handle login error
        }
      },
    });

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container mx-auto">
      <div className="mx-auto mt-20 max-w-xl overflow-hidden rounded-lg bg-white shadow-md">
        <div className="p-6">
          <header className="mb-4 text-center text-3xl uppercase text-gray-800">
            Login
          </header>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="block w-full px-3 py-2  "
              />
              {errors.email && touched.email && (
                <div className="text-red-500">{errors.email}</div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="block w-full px-3 py-2 "
              />
              {errors.password && touched.password && (
                <div className="text-red-500">{errors.password}</div>
              )}
            </div>
            <div className="mb-4 flex items-center justify-between">
              <Button type="submit" className="px-4 py-2 ">
                Login
              </Button>
              <p
                className="cursor-pointer text-gray-600"
                onClick={navigateToRegister}
              >
                Don't have an account? Register here
              </p>
            </div>
            {username && (
              <div className="flex items-center">
                <div className="mr-2 text-gray-800">{username}</div>
                <Button
                  onClick={handleLogout}
                  className="rounded-md bg-red-500 px-2 py-1 text-white hover:bg-red-600 focus:bg-red-600 focus:outline-none"
                >
                  Logout
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
