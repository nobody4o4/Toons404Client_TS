import { AddSeriesValidator } from "@/schema/user.schema";
import { createSeriesurl } from "@/Services/Series/endPoint.series.services";
import { useFormik } from "formik";
import { toast } from "sonner";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import React from "react";
import { Textarea } from "../ui/textarea";

export function UpdateSeries() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>Edit</Button>
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
                <div className="text-sm text-red-500">{errors.description}</div>
              )}
            </div>
          </div>

          <Button variant={"outline"}>Cancel</Button>

          <Button disabled={isLoading} type="submit">
            Add Series
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
