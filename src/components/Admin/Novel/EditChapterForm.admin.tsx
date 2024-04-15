import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AddChapterValidator } from "@/schema/user.schema";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FaX } from "react-icons/fa6";

import { updateChapterByIdUrl } from "@/Services/Chapter/endPoint.chapter.services";
import { useParams } from "react-router-dom";
import GetChapterById from "@/Services/Chapter/getChapterDetailsById.services";
import { Editor } from "../EditorJs.admin";

export default function EditChapterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [content, setContent] = useState<OutputData>();
  // const ejInstance = React.useRef<EditorJS>();
  const params = useParams();
  const novelId = params.id || "";
  const chapterId = params.chapterId || "";
  console.log(novelId);
  const { data, loading, error } = GetChapterById(chapterId);
  console.log(data, loading, error, "edittttchapter");
  //   const contentData = JSON.parse(data.content as string);

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
      thumbnail: null, // Add avatar field to the initial values
    },
    validationSchema: AddChapterValidator,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const formData = new FormData();
        console.log(
          "formdataaaaaaa1111111111111",
          formData,
          "chapterId",
          chapterId,
        );
        formData.append("title", values.title);
        formData.append("content", JSON.stringify(values.content));
        console.log("values", values);
        console.log(
          "formdata2222222222222222",
          formData,
          "chapterId",
          chapterId,
        );
        if (values.thumbnail) {
          formData.append("Single_file", values.thumbnail); // Append avatar to FormData
        }
        console.log(
          "formdata3333333333333333",
          formData,
          "chapterId",
          chapterId,
        );
        const response = await updateChapterByIdUrl(chapterId, formData);
        console.log("response", response);
        toast.success("Chapter edited successfully.");
        resetForm();
      } catch (error) {
        console.error(error);
        toast.error("Failed to edit chapter.", {
          description: "Please Try Again",
        });
      }

      setIsLoading(false);
    },
  });

  useEffect(() => {
    setFieldValue("title", data?.title);
    data?.content && setFieldValue("content", JSON.parse(data?.content));
    setFieldValue("thumbnail", data?.thumbnail);
  }, [data, setFieldValue]);

  // useEffect(() => {
  //   const chapterEditor = () => {
  //     const editor = new EditorJS({
  //       holder: "editorjs",
  //       data: values.content as OutputData,
  //       onReady: () => {
  //         ejInstance.current = editor;
  //       },
  //       onChange: async () => {
  //         const contents = await editor.saver.save();
  //         setContent(contents);
  //         setFieldValue("content", contents);
  //         console.log("Article data: ", contents);
  //       },
  //     });
  //   };
  //   if (ejInstance.current == null) {
  //     chapterEditor();
  //   }

  //   return () => {
  //     if (ejInstance.current) {
  //       ejInstance.current.destroy();
  //       ejInstance.current = null;
  //     }
  //   };
  // }, [values.content]);

  // useEffect(() => {
  //   const chapterEditor = () => {
  //     if (!ejInstance.current) {
  //       ejInstance.current = new EditorJS({
  //         holder: "editorjs",
  //         data: values.content || {}, // Ensure you're passing the correct content
  //         onReady: () => {
  //           console.log("Editor is ready");
  //         },
  //         onChange: async () => {
  //           try {
  //             const contents = await ejInstance?.current?.save(); // Save the content
  //             setContent(contents); // Update local state with the content
  //             setFieldValue("content", contents); // Update formik values
  //           } catch (error) {
  //             console.error("Error saving editor content:", error);
  //           }
  //         },
  //       });
  //     }
  //   };

  //   chapterEditor(); // Initialize the EditorJS instance

  //   return () => {
  //     // Clean up function
  //     if (
  //       ejInstance.current &&
  //       typeof ejInstance.current.destroy === "function"
  //     ) {
  //       ejInstance.current.destroy();
  //       ejInstance.current = null;
  //     }
  //   };
  // }, []); // Include values.content in the dependency array

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="">
      {/* {data?.content && <pre>{JSON.stringify(values.content, null, 2)}</pre>} */}
      <Card className="w-full">
        <CardHeader>
          <div className="space-y-1.5">
            <h2 className="text-2xl font-medium leading-6">Edit Chapter</h2>
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

              <div>
                <Label htmlFor="editorjs">Content</Label>
                <div className=" rounded-md border border-slate-200 p-2">
                  <Editor
                    get={(val) => setFieldValue("content", val)}
                    name="content"
                    defaultValue={data?.content}
                  ></Editor>
                </div>
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
                    id="thumbnail"
                    name="thumbnail"
                    type="file"
                    onChange={(event) => {
                      const file = event.currentTarget.files?.[0]; // Add null check before accessing files
                      if (file) {
                        setFieldValue("thumbnail", file); // Set the avatar file in formik values
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
                {data?.thumbnail ? (
                  <>
                    <img
                      src={data?.thumbnail} // Preview the selected cover image
                      alt="Cover Image"
                      className=" h-full w-full rounded-md object-cover "
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        data.thumbnail = "";
                      }}
                      variant={"ghost"}
                      className="absolute right-1 top-1 z-10 flex rounded-md p-0 hover:bg-transparent"
                    >
                      <FaX className="bg-white text-2xl text-cyan-700" />
                    </Button>
                  </>
                ) : values.thumbnail ? (
                  <>
                    <img
                      loading="lazy"
                      src={URL.createObjectURL(values.thumbnail)} // Preview the selected cover image
                      alt="Cover Image"
                      className=" h-full w-full object-cover "
                    />
                    <Button
                      type="button"
                      onClick={() => setFieldValue("thumbnail", null)}
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
