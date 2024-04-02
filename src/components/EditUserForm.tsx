import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { updateUserByIdUrl } from "@/Services/user/user.services";
import { UpdateUserValidator } from "@/schema/user.schema";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetCurrentUserProfile from "@/Services/user/getCurrentUserProfile.services";
import { Label } from "./ui/label";
import { FaX } from "react-icons/fa6";

function EditUserForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const naviage = useNavigate();

  const { data, loading, error } = GetCurrentUserProfile();
  console.log(data, "data");
  console.log(loading, "loading");
  console.log(error, "error");

  useEffect(() => {
    setFieldValue("firstName", data?.firstName);
    setFieldValue("lastName", data?.lastName);
    setFieldValue("bio", data?.bio);
    setFieldValue("username", data?.username);
    // setFieldValue("coverImage", data?.coverImage);
  }, [data]);

  console.log(data, "data");

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
      bio: "",
      username: "",
      avatar: null, // Add avatar field to the initial values
    },
    validationSchema: UpdateUserValidator,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("bio", values.bio);
        formData.append("subGusernameenre", values.username);
        console.log("values", values);
        if (values.avatar) {
          formData.append("Single_file", values.avatar); // Append avatar to FormData
        }
        const response = await updateUserByIdUrl(formData);
        console.log("response", response);
        toast.success("Your details have been updated successfully.");
        resetForm();
        naviage(-1);
      } catch (error) {
        console.error(error);
        toast.error("Failed to update your details.", {
          description: "Please Try Again",
        });
      }

      setIsLoading(false);
    },
  });
  if (loading) return <div>...loading</div>;

  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-medium" htmlFor="avatar">
              Avatar
            </label>
            <div className="relative flex h-[100px] w-[100px] items-center space-x-4 rounded-full bg-slate-300">
              {data?.avatar && !values.avatar ? (
                <>
                  <img
                    src={data?.avatar} // Preview the selected cover image
                    alt="avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                  <Button
                    onClick={() => {
                      data.avatar = "";
                    }}
                    type="button"
                    variant={"ghost"}
                    className="absolute right-1 top-1 z-50 flex rounded-full p-0 hover:bg-transparent"
                  >
                    <FaX className="bg-white text-2xl text-cyan-700" />
                  </Button>
                </>
              ) : values.avatar ? (
                <>
                  <img
                    loading="lazy"
                    src={URL.createObjectURL(values.avatar)} // Preview the selected cover image
                    alt=""
                    className=" h-full w-full rounded-full object-cover "
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
                <div className="mx-auto">Avatar Preview</div>
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
          <div className="flex flex-col space-y-1.5">
            <Label className="text-sm font-medium" htmlFor="username">
              Username
            </Label>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.username}
              name="username"
              id="username"
              placeholder="Username"
            />
            {errors?.username && touched.username && (
              <div className="text-sm text-red-500">{errors.username}</div>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label className="text-sm font-medium" htmlFor="firstName">
              First Name
            </Label>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.firstName}
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
            {errors?.firstName && touched.firstName && (
              <div className="text-sm text-red-500">{errors.firstName}</div>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label className="text-sm font-medium" htmlFor="lastname">
              Last Name
            </Label>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.lastName}
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
            {errors?.lastName && touched.lastName && (
              <div className="text-sm text-red-500">{errors.lastName}</div>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label className="text-sm font-medium" htmlFor="bio">
              Bio
            </Label>
            <Textarea
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.bio}
              name="bio"
              id="bio"
              placeholder="Short bio"
            />
            {errors?.bio && touched.bio && (
              <div className="text-sm text-red-500">{errors.bio}</div>
            )}
          </div>
          <div className="mt-6 flex justify-end">
            <Button className="mr-4" variant="outline">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-[200px]"
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
export default EditUserForm;
