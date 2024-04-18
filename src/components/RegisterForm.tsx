// import { Link } from "react-router-dom";
// import { Avatar } from "./ui/avatar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card, CardTitle } from "./ui/card";
import { useFormik } from "formik";
import { registerUser } from "../Services/user/endpoint.user.services";
import { RegisterValidator } from "../schema/user.schema";
import { toast } from "sonner";
import { FaUser, FaX } from "react-icons/fa6";
import registerCover from "/registerBlue.png";

function RegisterForm() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      bio: "",
      password: "",
      confirmPassword: "", // Added confirmPassword field
      avatar: null,
    },
    validationSchema: RegisterValidator,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("bio", values.bio);
        formData.append("password", values.password);
        if (values.avatar) {
          formData.append("Single_file", values.avatar);
        }
        console.log(formData.get("avatar"));
        const response = await registerUser(formData);
        console.log("response", response);
        toast.success("User registered successfully");
        resetForm();
      } catch (error) {
        console.error(error);
        toast.error("Register Failed", {
          description: "Please Try Again",
        });
      }
    },
  });
  return (
    <Card className="mx-auto mt-16 grid h-fit w-full space-y-8 p-10  ">
      <form
        onSubmit={handleSubmit}
        className="my-auto flex flex-col gap-5 self-stretch max-md:mt-10 max-md:max-w-full"
        encType="multipart/form-data"
      >
        <CardTitle className="font-bold">REGISTER</CardTitle>
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium" htmlFor="avatar">
            Avatar
          </label>
          <div className="relative flex h-[100px] w-[100px] items-center space-x-4 overflow-hidden rounded-full bg-slate-300">
            {values.avatar ? (
              <>
                <img
                  loading="lazy"
                  src={URL.createObjectURL(values.avatar)} // Preview the selected cover image
                  alt=""
                  className="flex h-full w-full rounded-full object-cover "
                />
                <Button
                  onClick={() => setFieldValue("avatar", null)}
                  variant={"ghost"}
                  type="button"
                  className="absolute right-2 top-0 z-10 m-0 flex rounded-md p-0 hover:bg-transparent"
                >
                  <FaX className="bg-white text-2xl text-cyan-700" />
                </Button>
              </>
            ) : (
              <div className="pt-5">
                <FaUser className="h-[99px] w-[99px] text-slate-500" />
              </div>
            )}
          </div>
          <Input
            className="w-full text-text"
            id="avatar"
            name="avatar"
            type="file"
            onChange={(event) => {
              const file = event.currentTarget.files?.[0]; // Add null check before accessing files
              if (file) {
                setFieldValue("avatar", file); // Set the avatar file in formik values
              }
            }}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                type="text"
              />
              {errors?.firstName && touched.firstName ? (
                <div className="text-xs text-red-500">{errors.firstName}</div>
              ) : (
                <div className="h-4"></div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                id="last-name"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="Lovelace"
                required
              />
              {errors?.lastName && touched.lastName ? (
                <div className="text-xs text-red-500">{errors.lastName}</div>
              ) : (
                <div className="h-4"></div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="adalove"
                required
              />
              {errors?.username && touched.username ? (
                <div className="text-xs text-red-500">{errors.username}</div>
              ) : (
                <div className="h-4"></div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="m@example.com"
                required
                type="email"
              />
              {errors?.email && touched.email ? (
                <div className="text-xs text-red-500">{errors.email}</div>
              ) : (
                <div className="h-4"></div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              placeholder="+997-9800000000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              className="min-h-[100px]"
              id="bio"
              name="bio"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bio}
              placeholder="Tell us a little about yourself..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
                type="password"
              />
              {errors?.password && touched.password ? (
                <div className="text-xs text-red-500">{errors.password}</div>
              ) : (
                <div className="h-4"></div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                required
                type="password"
              />
              {errors?.confirmPassword && touched.confirmPassword ? (
                <div className="text-xs text-red-500">
                  {errors.confirmPassword}
                </div>
              ) : (
                <div className="h-4"></div>
              )}
            </div>
          </div>
        </div>
        <Button className=" w-full" type="submit">
          Sign Up
        </Button>
      </form>
    </Card>
  );
}

export default RegisterForm;
