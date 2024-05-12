import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AddComicChapterValidator } from "@/schema/index.schema";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import { FaX } from "react-icons/fa6";
import { createChapterUrl } from "@/Services/Chapter/endPoint.chapter.services";
import { useNavigate, useParams } from "react-router-dom";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

export default function AddComicChapterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const bookId = useParams().bookId || "";
  console.log(bookId);
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(values.Images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFieldValue("Images", items);
    console.log(items, "items");
  };

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
      type: "COMIC",
      Images: [] as File[], // Change this to an array
      coverImage: null,
    },
    validationSchema: AddComicChapterValidator,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("type", "COMIC");
        values.Images.forEach((image) => {
          formData.append("gallery", image); // Append each image to the FormData
        });

        if (values.coverImage) {
          formData.append("Single_file", values.coverImage); // Append cover image to FormData
        }
        const response = await createChapterUrl(formData, bookId);
        console.log("response", response);
        toast.success("Book Added successfully.");
        resetForm();
        // navigate(-1);
      } catch (error) {
        console.error(error);
        toast.error("Failed to add book.", {
          description: "Please Try Again",
        });
      }

      setIsLoading(false);
    },
  });

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
              <div className="flex flex-col gap-5">
                <div>
                  <Label htmlFor="Images">Images</Label>
                  <Input
                    id="Images"
                    name="Images"
                    type="file"
                    className="text-text"
                    multiple // Allow multiple files to be selected
                    onChange={(event) => {
                      const files = event.currentTarget.files; // Get all selected files
                      if (files) {
                        setFieldValue("Images", Array.from(files)); // Set the array of files in formik values
                      }
                    }}
                    onBlur={handleBlur}
                  />
                  {errors?.Images && touched.Images && (
                    <div className="text-sm text-red-500">{errors.Images}</div>
                  )}
                </div>
                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable droppableId="images">
                    {(provided) => (
                      <div
                        className=" rounded-md border border-slate-200 p-2"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {values.Images.length === 0 && (
                          <div className="text-center text-gray-500">
                            No images are selected
                          </div>
                        )}
                        {values.Images.map((image: File, index) => (
                          <Draggable
                            key={index}
                            draggableId={`image-${index}`}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="relative mb-2 flex items-center justify-between"
                              >
                                <div className="flex items-center">
                                  <span className="mr-2 font-bold">
                                    {index + 1}.
                                  </span>
                                  <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Image ${index}`}
                                    className="mr-2 h-12 w-12 rounded-md object-cover"
                                  />
                                  <span>{image.name}</span>
                                </div>
                                <Button
                                  onClick={() => {
                                    const updatedImages = [...values.Images];
                                    updatedImages.splice(index, 1);
                                    setFieldValue("Images", updatedImages);
                                  }}
                                  variant="ghost"
                                  className="p-1 hover:bg-transparent"
                                >
                                  <FaX className="text-red-500" />
                                </Button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
                {/* <div className="  rounded-md border border-slate-200 p-2">
                  {values.Images.map((image: File, index) => (
                    <div
                      key={index}
                      className="relative mb-2 flex items-center justify-between"
                      draggable
                    >
                      <div className="flex items-center">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Image ${index}`}
                          className="mr-2 h-12 w-12 rounded-md object-cover"
                        />
                        <span>{(image as File).name}</span>
                      </div>
                      <Button
                        onClick={() => {
                          const updatedImages = [...values.Images];
                          updatedImages.splice(index, 1);
                          setFieldValue("Images", updatedImages);
                        }}
                        variant="ghost"
                        className="p-1 hover:bg-transparent"
                      >
                        <FaX className="text-red-500" />
                      </Button>
                    </div>
                  ))}
                </div> */}
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
