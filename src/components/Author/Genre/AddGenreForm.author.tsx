import AllGenreDetails from "@/Services/Genre/getAllGenreServices";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AddGenreValidator } from "@/schema/index.schema";
import { useFormik } from "formik";
import { createGenreurl } from "@/Services/Genre/endPoint.genre.services";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Textarea } from "../../ui/textarea";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddGenreForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
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
      name: "",
      description: "",
      coverImage: null, // Add avatar field to the initial values
    },
    validationSchema: AddGenreValidator,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        if (values.coverImage) {
          formData.append("Single_file", values.coverImage); // Append avatar to FormData
        }
        const response = await createGenreurl(formData);
        console.log("response", response);
        toast.success("Genre Added successfully.");
        resetForm();
        navigate(-1);
      } catch (error) {
        console.error(error);
        toast.error("Failed to add genre.", {
          description: "Please Try Again",
        });
      }
      setIsLoading(false);
    },
  });

  const { data, loading, error } = AllGenreDetails();
  if (loading) return <p>Loading...</p>;
  if (error) return;
  <p>error : {error}</p>;
  console.log(data);
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="">
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <Card className="w-full">
        <CardHeader>
          <div className="space-y-1.5">
            <h2 className="text-2xl font-medium leading-6">Add Genre</h2>
            <p className="font-gray-500 text-sm leading-5">
              Fill out the form below to add a new Genre.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="col-span-3"
                />
                {errors?.name && touched.name && (
                  <div className="text-sm text-red-500">{errors.name}</div>
                )}
              </div>

              <div className="flex flex-col space-y-1">
                <Label
                  className="block text-sm font-medium leading-5"
                  htmlFor="description"
                >
                  Description
                </Label>
                <Textarea
                  name="description"
                  id="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  className=""
                />
                {errors?.description && touched.description && (
                  <div className="text-sm text-red-500">
                    {errors.description}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <div>
                <Label
                  className="flex w-fit flex-col gap-1.5"
                  htmlFor="cover-picture"
                >
                  <Label htmlFor="cover-picture">Cover Image</Label>
                  <Input
                    className="w-full"
                    id="coverImage"
                    name="coverImage"
                    type="file"
                    onChange={(event) => {
                      const file = event.currentTarget.files?.[0]; // Add null check before accessing files
                      if (file) {
                        setFieldValue("coverImage", file); // Set the avatar file in formik values
                      }
                    }}
                    onBlur={handleBlur}
                  />
                  <span className="text-sm font-normal leading-4 text-gray-500">
                    Image should be at least 400x600 pixels.
                  </span>
                </Label>
              </div>
              <div className="relative flex h-[300px] w-[200px] items-center justify-center rounded-md bg-gray-200">
                {values.coverImage ? (
                  <>
                    <img
                      loading="lazy"
                      src={URL.createObjectURL(values.coverImage)} // Preview the selected cover image
                      alt="Cover Image"
                      className=" h-full w-full object-cover "
                    />
                    <Button
                      onClick={() => setFieldValue("coverImage", null)}
                      variant={"ghost"}
                      className="absolute right-2 top-0 z-10 m-0 flex rounded-md p-0 hover:bg-transparent"
                    >
                      <FaX className="bg-white text-2xl text-cyan-700" />
                    </Button>
                  </>
                ) : (
                  "Image Preview"
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-4 md:flex-row md:items-center">
            <Button className="w-full md:w-[200px]" variant="outline">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-[200px]"
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
