// import AllGenreDetails from "@/Services/Genre/getAllGenreServices";
// import { DataTableDemo } from "@/components/Admin/DataTable";
// // import { TableDashboard } from "@/components/Admin/Table";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import { Label } from "@/components/ui/label";

// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Input } from "@/components/ui/input";
// import { AddGenreValidator } from "@/schema/user.schema";
// import { useFormik } from "formik";
// import AddGenre from "@/Services/Genre/addGenre.services";
// import { createGenreurl } from "@/Services/Genre/endPoint.genre.services";

// function GenreAdmin() {
//   const {
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     values,
//     errors,
//     touched,
//     setFieldValue,
//     resetForm,
//   } = useFormik({
//     initialValues: {
//       name: "",
//       description: "",
//       coverImage: null, // Add avatar field to the initial values
//     },
//     validationSchema: AddGenreValidator,
//     onSubmit: async (values) => {
//       try {
//         const formData = new FormData();
//         formData.append("name", values.name);
//         formData.append("description", values.description);
//         if (values.coverImage) {
//           formData.append("Single_file", values.coverImage); // Append avatar to FormData
//         }
//         const response = await createGenreurl(formData);
//         console.log("response", response);
//         toast.success("Genre Added successfully.");
//         resetForm();
//       } catch (error) {
//         console.error(error);
//         toast.error("Failed to add genre.", {
//           description: "Please Try Again",
//         });
//       }
//     },
//   });

//   const { data, loading, error } = AllGenreDetails();
//   if (loading) return <p>Loading...</p>;
//   if (error) return;
//   <p>error : {error}</p>;
//   console.log(data);
//   return (
//     <div className="flex flex-col gap-y-5">
//       <h1 className="text-4xl underline underline-offset-8">Genre</h1>
//       <div className="flex">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button>Add Genre</Button>
//           </SheetTrigger>
//           <SheetContent>
//             <form
//               onSubmit={handleSubmit}
//               className="my-auto flex flex-col self-stretch max-md:mt-10 max-md:max-w-full"
//               encType="multipart/form-data"
//             >
//               <SheetHeader>
//                 <SheetTitle>Add Genre</SheetTitle>
//                 <SheetDescription>
//                   Enter relevent data to create a new Genre
//                 </SheetDescription>
//               </SheetHeader>
//               <div className="grid gap-4 py-4">
//                 <div className="max-md:flex max-md:flex-col max-md:gap-0">
//                   <div className="flex w-full flex-col max-md:w-full">
//                     <label
//                       htmlFor="coverImage"
//                       className="text-xl text-zinc-900"
//                     >
//                       Cover Image
//                     </label>
//                     <label className="border-blue text-blue hover:bg-blue flex w-full max-w-xs cursor-pointer flex-col items-center justify-center rounded-lg border bg-white px-4 py-6 uppercase tracking-wide shadow-lg hover:text-white">
//                       <svg
//                         className="h-8 w-8"
//                         fill="currentColor"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
//                       </svg>
//                       <span className="mt-2 text-base leading-normal">
//                         Select a file
//                       </span>
//                       <input
//                         id="coverImage"
//                         name="coverImage"
//                         type="file"
//                         onChange={(event) => {
//                           const file = event.currentTarget.files?.[0]; // Add null check before accessing files
//                           if (file) {
//                             setFieldValue("coverImage", file); // Set the avatar file in formik values
//                           }
//                         }}
//                         onBlur={handleBlur}
//                         className="hidden"
//                       />
//                     </label>
//                     {errors.coverImage && touched.coverImage && (
//                       <div className="text-red-500">{errors.coverImage}</div>
//                     )}
//                   </div>

//                   <div className="ml-5 flex w-full flex-col max-md:ml-0 max-md:w-full">
//                     <div className="flex w-full items-center justify-center bg-sky-500 max-md:mt-10">
//                       {values.coverImage && (
//                         <img
//                           loading="lazy"
//                           src={URL.createObjectURL(values.coverImage)} // Preview the selected cover image
//                           alt="Cover Image"
//                           className="aspect-w-3 aspect-h-1 w-48"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   {/* Cover IMage */}

//                   <Label htmlFor="name" className="text-right">
//                     Name
//                   </Label>
//                   <div className="flax col-span-3">
//                     <Input
//                       id="name"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.name}
//                       className="col-span-3"
//                     />
//                     {errors?.name && touched.name && (
//                       <div className="text-sm text-red-500">{errors.name}</div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="description" className="text-right">
//                     Description
//                   </Label>
//                   <div className=" col-span-3">
//                     <Input
//                       name="description"
//                       id="description"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.description}
//                       className=""
//                     />
//                     {errors?.description && touched.description && (
//                       <div className="text-sm text-red-500">
//                         {errors.description}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <SheetFooter>
//                 <SheetClose asChild></SheetClose>
//                 <Button type="submit">Add Genre</Button>
//               </SheetFooter>
//             </form>
//           </SheetContent>
//         </Sheet>
//       </div>

//       <div className="w-full">
//         <DataTableDemo />
//       </div>
//     </div>
//   );
// }
// export default GenreAdmin;
