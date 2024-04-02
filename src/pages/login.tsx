import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
import { loginUser } from "../Services/user/user.services";
import { LoginValidator } from "../schema/user.schema";
import { getUserData, setUserData } from "../utils/authStorage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function LoginForm() {
  const token = getUserData().token;

  const authentication = token ? true : false;

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "email@admin",
        password: "Password1@",
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
          window.location.replace("/");
        } catch (error) {
          console.error(error);
          // Handle login error
        }
      },
    });

  if (authentication) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-1">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xl tracking-wide">
                Email
              </Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <div className="h-3 text-sm text-red-500">{errors.email}</div>
              ) : (
                <div className="h-3"></div>
              )}
            </div>
            <div className="space-y-1">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-xl tracking-wide">
                  Password
                </Label>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
              />
              {errors.password && touched.password ? (
                <div className="h-3 text-sm text-red-500">
                  {errors.password}
                </div>
              ) : (
                <div className="h-3"></div>
              )}
              <div className="flex">
                <Link
                  className="right-0 ml-auto inline-block text-sm underline"
                  to="#"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
          <div className="text-center text-sm">
            Don't have an account?
            <Link className="underline" to="/register">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto">
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
      </div> */}
    </>
  );
}

export default LoginForm;
