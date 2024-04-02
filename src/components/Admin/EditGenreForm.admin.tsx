import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FaX } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { AddGenreValidator } from "@/schema/user.schema";
import { Textarea } from "../ui/textarea";
import GenreById from "@/Services/Genre/getGenreById";
import { updateGenreByIdurl } from "@/Services/Genre/endPoint.genre.services";

export default function EditGenreForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const params = useParams();
  const genreId = params.id || "";
  const { data, loading, error } = GenreById(genreId);
  console.log(data, loading, error, "edittttgenreeeee");
  //   const contentData = JSON.parse(data.content as string);

  useEffect(() => {
    setFieldValue("name", data?.name);
    setFieldValue("description", data?.description);
    setFieldValue("coverimage", data?.coverImage);
  }, [data]);

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
        console.log(
          "formdataaaaaaa1111111111111",
          formData,
          "genreeeId",
          genreId,
        );
        formData.append("name", values.name);
        formData.append("description", values.description);
        console.log("values", values);
        console.log("formdata2222222222222222", formData, "genresId", genreId);
        console.log("values.coverImage", values.coverImage);
        if (values.coverImage) {
          formData.append("Single_file", values.coverImage); // Append avatar to FormData
        }
        console.log("formdata3333333333333333", formData, "genresId", genreId);
        const response = await updateGenreByIdurl(genreId, formData);
        console.log("response", response);
        toast.success("Genre edited successfully.");
        resetForm();
        navigate(-1);
      } catch (error) {
        console.error(error);
        toast.error("Failed to edit genre.", {
          description: "Please Try Again",
        });
      }

      setIsLoading(false);
    },
  });

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="">
      {/* {data?.content && <pre>{JSON.stringify(values.content, null, 2)}</pre>} */}
      <Card className="w-full">
        <CardHeader>
          <div className="space-y-1.5">
            <h2 className="text-2xl font-medium leading-6">Edit Genre</h2>
            <p className="font-gray-500 text-sm leading-5">
              Fill out the form below to edit genre.
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
                  className="block text-sm font-medium leading-5 text-gray-700"
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
                  htmlFor="coverImage"
                >
                  <Label htmlFor="coverImage">Cover Image</Label>
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
                {data?.coverImage ? (
                  <>
                    <img
                      src={data?.coverImage} // Preview the selected cover image
                      alt="Cover Image"
                      className=" h-full w-full rounded-md object-cover "
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        data.coverImage = "";
                      }}
                      variant={"ghost"}
                      className="absolute right-1 top-1 z-10 flex rounded-md p-0 hover:bg-transparent"
                    >
                      <FaX className="bg-white text-2xl text-cyan-700" />
                    </Button>
                  </>
                ) : values.coverImage ? (
                  <>
                    <img
                      loading="lazy"
                      src={URL.createObjectURL(values.coverImage)} // Preview the selected cover image
                      alt="Cover Image"
                      className=" h-full w-full object-cover "
                    />
                    <Button
                      type="button"
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
