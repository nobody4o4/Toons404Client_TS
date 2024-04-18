import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AddChapterValidator } from "@/schema/user.schema";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { FaX } from "react-icons/fa6";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { createChapterUrl } from "@/Services/Chapter/endPoint.chapter.services";
import { useNavigate, useParams } from "react-router-dom";

export default function AddChapterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [content, setContent] = useState<OutputData>();
  const ejInstance = React.useRef<EditorJS>();
  const navigate = useNavigate();
  const bookId = useParams().bookId || "";
  console.log(bookId);

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
      content: {},
      coverImage: null, // Add avatar field to the initial values
    },
    validationSchema: AddChapterValidator,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", JSON.stringify(content));
        console.log("values", values);
        if (values.coverImage) {
          formData.append("Single_file", values.coverImage); // Append avatar to FormData
        }
        const response = await createChapterUrl(formData, bookId);
        console.log("response", response);
        toast.success("Book Added successfully.");
        resetForm();
        navigate(-1);
      } catch (error) {
        console.error(error);
        toast.error("Failed to add book.", {
          description: "Please Try Again",
        });
      }

      setIsLoading(false);
    },
  });
  const chapterEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        const content = await editor.saver.save();
        setContent(content);
        setFieldValue("content", content);
        console.log("Article data: ", content);
      },
    });
  };

  //   useEffect(() => {
  //     chapterEditor();
  //   }, []);

  useEffect(() => {
    if (ejInstance.current == null) {
      chapterEditor();
    }
    return () => {
      if (ejInstance.current) {
        ejInstance.current.destroy();
        ejInstance.current = null;
      }
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="">
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <Card className="w-full">
        <CardHeader>
          <div className="space-y-1.5">
            <h2 className="text-2xl font-medium leading-6">Add Chapter</h2>
            <p className="font-gray-500 text-sm leading-5">
              Fill out the form below to add a new chapter.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
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
              {/* <div className="flex space-x-12">
                                <div className="space-y-2">
                                    <Label htmlFor="genreId">Genre</Label>
                                    <Select
                                        name="genreId"
                                        onValueChange={handleChange}
                                        defaultValue={values.genreId}
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a genre" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Genre</SelectLabel>
                                                {Array.isArray(genre) &&
                                                    genre.map((item, index) => {
                                                        return (
                                                            <SelectItem key={index} value={item.id}>
                                                                {item.name}
                                                            </SelectItem>
                                                        );
                                                    })}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subGenreId">Sub Genre</Label>
                                    <Select
                                        defaultValue={values.subGenreId}
                                        onValueChange={handleChange}
                                        name="subGenreId"
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a genre" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Sub Genre</SelectLabel>
                                                {Array.isArray(genre) &&
                                                    genre.map((item, index) => {
                                                        return (
                                                            <SelectItem key={index} value={item.id}>
                                                                {item.name}
                                                            </SelectItem>
                                                        );
                                                    })}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="series">Series</Label>
                                    <Select
                                        onValueChange={handleChange}
                                        defaultValue={values.seriesId}
                                        name="seriesId"
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a Series" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Series</SelectLabel>
                                                <SelectItem disabled value="fantasy">
                                                    Fantasy
                                                </SelectItem>
                                                {Array.isArray(series) &&
                                                    series.map((item, index) => {
                                                        return (
                                                            <SelectItem key={index} value={item.id}>
                                                                {item.title}
                                                            </SelectItem>
                                                        );
                                                    })}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div> */}
              {/* <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
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
              </div> */}
              <div>
                <Label htmlFor="editorjs">Content</Label>
                <div
                  id="editorjs"
                  className=" rounded-md border border-slate-200 p-2"
                ></div>
                {errors?.content && touched.content && (
                  <div className="text-sm text-red-500">
                    {errors.content.toString()}
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
              <div className="relative flex  h-[300px] w-[200px] items-center justify-center rounded-md bg-gray-200">
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
