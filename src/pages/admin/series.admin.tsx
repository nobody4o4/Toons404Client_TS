import AllSeriesDetails from "@/Services/Series/getAllSeries.services";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { AddSeriesValidator } from "@/schema/user.schema";
import { useFormik } from "formik";
import { createSeriesurl } from "@/Services/Series/endPoint.series.services";
import { SeriesDetailsTable } from "@/components/Admin/tables/AllSeriesTable";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

function SeriesAdmin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      title: "",
      description: "",
      coverImage: null, // Add avatar field to the initial values
    },
    validationSchema: AddSeriesValidator,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        console.log("values", values);
        console.log("values", formData);
        if (values.coverImage) {
          formData.append("Single_file", values.coverImage); // Append avatar to FormData
        }
        const response = await createSeriesurl(formData);
        console.log("response", response);
        toast.success("Series Added successfully.");
        resetForm();
      } catch (error) {
        console.error(error);
        toast.error("Failed to add genre.", {
          description: "Please Try Again",
        });
      }
      setIsLoading(false);
    },
  });

  const { data, loading, error } = AllSeriesDetails();
  if (loading) return <p>Loading...</p>;
  if (error) return;
  <p>error : {error}</p>;
  console.log(data);
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-4xl underline underline-offset-8">Series</h1>
      <div className="flex">
        <Sheet>
          <SheetTrigger asChild>
            <Button>Add Series</Button>
          </SheetTrigger>
          <SheetContent>
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="my-auto flex flex-col self-stretch max-md:mt-10 max-md:max-w-full"
            >
              <SheetHeader>
                <SheetTitle>Add Series</SheetTitle>
                <SheetDescription>
                  Enter relevent data to create a new Series
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="max-md:flex max-md:flex-col max-md:gap-0">
                  {/* <div className="flex w-full flex-col max-md:w-full">
                    <label
                      htmlFor="coverImage"
                      className="text-xl text-zinc-900"
                    >
                      Cover Image
                    </label>
                    <label className="border-blue text-blue hover:bg-blue flex w-full max-w-xs cursor-pointer flex-col items-center justify-center rounded-lg border bg-white px-4 py-6 uppercase tracking-wide shadow-lg hover:text-white">
                      <svg
                        className="h-8 w-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Select a file
                      </span>
                      <input
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
                        className="hidden"
                      />
                    </label>
                    {errors.coverImage && touched.coverImage && (
                      <div className="text-red-500">{errors.coverImage}</div>
                    )}
                  </div> */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex h-[300px] w-[200px] items-center justify-center rounded-md bg-gray-200">
                      {values.coverImage && (
                        <img
                          loading="lazy"
                          src={URL.createObjectURL(values.coverImage)} // Preview the selected cover image
                          alt="Cover Image"
                          className=" h-full w-full object-cover "
                        />
                      )}
                    </div>
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

                  {/* <div className="ml-5 flex w-full flex-col max-md:ml-0 max-md:w-full">
                    <div className="flex w-full items-center justify-center bg-sky-500 max-md:mt-10">
                      {values.coverImage && (
                        <img
                          loading="lazy"
                          src={URL.createObjectURL(values.coverImage)} // Preview the selected cover image
                          alt="Cover Image"
                          className="aspect-w-3 aspect-h-1 w-48"
                        />
                      )}
                    </div>
                  </div> */}
                </div>
                <div className="flex flex-col space-y-1">
                  <Label
                    className="block text-sm font-medium leading-5 text-gray-700"
                    htmlFor="title"
                  >
                    Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    className="col-span-3"
                  />
                  {errors?.title && touched.title && (
                    <div className="text-sm text-red-500">{errors.title}</div>
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
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant={"outline"}>Cancel</Button>
                </SheetClose>

                <Button disabled={isLoading} type="submit">
                  Add Series
                </Button>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      <div className="w-full">
        <SeriesDetailsTable />
      </div>
    </div>
  );
}
export default SeriesAdmin;
