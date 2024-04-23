import { useFormik } from "formik";
import { registerUser } from "../Services/user/endpoint.user.services";
import { RegisterValidator } from "../schema/user.schema";
import { toast } from "sonner";
import RegisterForm from "@/components/RegisterForm";
import registerCover from "/registerBlue.png";
import { getUserData } from "@/utils/authStorage";
import { Navigate } from "react-router-dom";

function Register() {
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
      password: "",
      avatar: null, // Add avatar field to the initial values
    },
    validationSchema: RegisterValidator,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("password", values.password);
        if (values.avatar) {
          formData.append("Single_file", values.avatar); // Append avatar to FormData
        }
        console.log(formData.get("password"));
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
  const userData = getUserData();
  const token = userData?.token;

  const authentication = token ? true : false;

  if (authentication) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="grid w-screen grid-cols-2 bg-background pr-0">
        <div className=" left-0 flex lg:p-10  ">
          <RegisterForm />
        </div>
        <img
          src={registerCover}
          className="absolute right-0 ml-5 h-full w-1/2 object-cover"
        ></img>
      </div>
      <div className="fle hidden flex-col bg-neutral-100 pb-12">
        {/* Your header and navigation components go here */}

        <div className="mt-16 w-[1055px] max-w-full self-center rounded-md bg-white pl-6 max-md:mt-10 max-md:pl-5">
          <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
            <form
              onSubmit={handleSubmit}
              className="my-auto flex flex-col self-stretch max-md:mt-10 max-md:max-w-full"
              encType="multipart/form-data"
            >
              <header className="self-center text-3xl uppercase text-black">
                Register
              </header>

              <div className="mt-9 max-md:max-w-full">
                {/* Form fields go here */}
                {/* First Name */}
                {/* Other form fields */}
                <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
                    <div className="flex grow flex-col text-xl text-zinc-900 max-md:mt-3">
                      <div>First Name</div>
                      <input
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        type="text"
                        className="mt-3 items-start justify-center whitespace-nowrap rounded-md border border-solid border-sky-500 bg-white py-3.5 pl-3.5 pr-16 text-base font-extralight text-black max-md:pr-5"
                      />
                      {errors?.firstName && touched.firstName && (
                        <div className="text-red-500">{errors.firstName}</div>
                      )}

                      <div className="mt-4">Username</div>
                      <input
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        type="text"
                        className="mt-3 items-start whitespace-nowrap rounded-md border border-solid border-sky-500 bg-white pb-2.5 pl-3.5 pr-16 pt-4 text-base font-extralight text-black max-md:pr-5"
                      />
                    </div>
                    {errors?.username && touched.username && (
                      <div className="text-red-500">{errors.username}</div>
                    )}
                  </div>
                  <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-xl text-zinc-900 max-md:mt-3.5">
                      <div>Last Name</div>
                      <input
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        type="text"
                        className="mt-3 items-start justify-center whitespace-nowrap rounded-md border border-solid border-sky-500 bg-white py-4 pl-3.5 pr-16 text-base font-extralight text-black max-md:pr-5"
                      />
                      {errors?.lastName && touched.lastName && (
                        <div className="text-red-500">{errors.lastName}</div>
                      )}

                      <div className="mt-4">Email</div>
                      <input
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        type="text"
                        className="mt-3 items-start whitespace-nowrap rounded-md border border-solid border-sky-500 bg-white pb-2.5 pl-3.5 pr-16 pt-4 text-base font-extralight text-black max-md:pr-5"
                      />
                      {errors?.email && touched.email && (
                        <div className="text-red-500">{errors.email}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Avatar Upload Field */}
                <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex w-full flex-col max-md:w-full">
                    <label htmlFor="avatar" className="text-xl text-zinc-900">
                      Avatar
                    </label>
                    <input
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
                      className="mt-3 whitespace-nowrap rounded-md border border-solid border-sky-500 bg-white py-3.5 pl-3.5 pr-16 text-base font-extralight text-black max-md:pr-5"
                    />
                    {errors.avatar && touched.avatar && (
                      <div className="text-red-500">{errors.avatar}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Password fields and Submit button */}
              <div className="mt-5 flex justify-between gap-5 text-xl text-zinc-900 max-md:max-w-full max-md:flex-wrap">
                <div>Password</div>
              </div>
              <div className="mt-3 flex justify-between gap-3 whitespace-nowrap text-base font-extralight text-black max-md:max-w-full max-md:flex-wrap">
                <input
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  className="grow items-start justify-center rounded-md border border-solid border-sky-500 bg-white py-3.5 pl-3.5 pr-16 max-md:pr-5"
                />
                {/* <input
                                    type="password"
                                    className="grow justify-center items-start py-4 pr-16 pl-3.5 bg-white rounded-md border border-sky-500 border-solid max-md:pr-5"
                                /> */}
              </div>
              {errors?.password && touched.password && (
                <div className="text-red-500">{errors.password}</div>
              )}

              {/* Submit button */}
              <div className="ml-5 flex w-[16%] flex-col max-md:ml-0 max-md:w-full">
                <div className="mt-2 flex flex-col items-center whitespace-nowrap text-xl text-black max-md:mt-10">
                  <button
                    type="submit"
                    className="justify-center rounded-2xl bg-sky-500 px-6 py-5 text-xs font-bold text-white shadow-lg max-md:mt-10 max-md:px-5"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </form>
            {/* Avatar preview */}
            <div className="ml-5 flex w-1/5 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex w-full grow items-center justify-center bg-sky-500 max-md:mt-10">
                {values.avatar && (
                  <img
                    loading="lazy"
                    src={URL.createObjectURL(values.avatar)} // Preview the selected avatar
                    alt="Avatar"
                    className="aspect-[0.29] w-[186px]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
