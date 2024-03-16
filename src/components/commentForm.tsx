// import { Formik, Field, useFormik } from "formik";
// import { toast } from "sonner";
// import { Textarea } from "./ui/textarea";
// import { Button } from "./ui/button";
// import { useState } from "react";

// function CommentForm() {
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const {
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     values,
//     errors,
//     touched,
//     resetForm,
//   } = useFormik({
//     initialValues: {
//       comment: "",
//     },
//     validationSchema: Comment,
//     onSubmit: async (values: { comment: string }) => {
//       try {
//         setIsSubmitting(true);
//         const formData = new FormData();
//         formData.append("comment", values.comment);
//         console.log(formData.get("password"));
//         // const response = await registerUser(formData);
//         console.log("response");
//         toast.success("Comment submitted successfully!");
//         resetForm();
//       } catch (error) {
//         console.error(error);
//         toast.error("Failed to submit comment.", {
//           description: "Please Try Again",
//         });
//       }
//       setIsSubmitting(false);
//     },
//   });

//   return (
//     <div className="flex flex-col bg-neutral-100 pb-12">
//       {/* Your header and navigation components go here */}
//       <div className="mt-16 w-[1055px] max-w-full self-center rounded-md bg-white pl-6 max-md:mt-10 max-md:pl-5">
//         <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
//           <Formik onSubmit={handleSubmit} initialValues={{ comment: "" }}>
//             <form
//               onSubmit={handleSubmit}
//               className="my-auto flex flex-col self-stretch max-md:mt-10 max-md:max-w-full"
//               encType="multipart/form-data"
//             >
//               <header className="self-center text-3xl uppercase text-black">
//                 Register
//               </header>
//               <Field
//                 id="comment"
//                 name="comment"
//                 onChange={handleChange}
//                 as={Textarea}
//                 value={values.comment}
//                 placeholder="Tell us a little bit about yourself"
//                 className="resize-none"
//                 onBlur={handleBlur}
//               />
//               {errors?.comment && touched.comment && (
//                 <div className="text-red-500">{errors.comment}</div>
//               )}

//               {/* Submit button */}
//               <Button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? "Submitting..." : "Submit"}
//               </Button>
//             </form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CommentForm;
