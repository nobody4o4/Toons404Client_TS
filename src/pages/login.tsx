import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
import { loginUser } from "../Services/user/endpoint.user.services";
import { LoginValidator } from "../schema/index.schema";
import { getUserData, setUserData } from "../utils/authStorage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import registerCover from "/loginBlue.png";

function LoginForm() {
  const userData = getUserData();
  const token = userData?.token;

  const authentication = token ? true : false;

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        // email: "email@email",
        // password: "Password1@",
        email: "",
        password: "",
      },
      validationSchema: LoginValidator,
      onSubmit: async (values) => {
        try {
          const response = await loginUser(values);
          console.log(response.data, "response");
          const user = response.data;
          console.log(user, "user");
          setUserData({
            avatar: user?.avatar,
            username: user?.username,
            token: user?.token,
            role: user?.role,
            isSubscribed: !!user?.isSubscribed,
            id: user?.id,
          });
          toast.success("Login successful", {
            description: "You are now logged in",
          });
          window.location.replace("/");
        } catch (error) {
          toast.error("Incorrect login credentials", {
            description: "Please try again",
          });
          console.error(error);
        }
      },
    });

  if (authentication) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="grid min-h-screen grid-cols-2 items-center px-4 text-text sm:px-6 lg:px-8">
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
                placeholder="loveade@example.com"
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
                placeholder="********"
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
        <img
          src={registerCover}
          className="absolute right-0 ml-5 h-full w-1/2 object-cover"
        ></img>
      </div>
    </>
  );
}

export default LoginForm;
