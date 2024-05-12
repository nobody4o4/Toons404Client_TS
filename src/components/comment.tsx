// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";
// import { addCommenturl } from "@/Services/Comment/endPoint.comment.services";
// import GetAllCommentsByChapter from "@/Services/Comment/getAllCommentsByChapter.services";
// import { useEffect, useState } from "react";
// import { Comment } from "@/types";
// import CommentList from "./commentList";

// const commentSchema = Yup.object().shape({
//   comment: Yup.string()
//     .required("Comment is required.")
//     .min(3, "Comment must be at least 3 characters.")
//     .max(160, "Comment must not be longer than 160 characters."),
// });

// function CommentForm({ chapterId, type }: { chapterId: string; type: string }) {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { data, loading, error } = GetAllCommentsByChapter(chapterId);

//   console.log(data, "datashshshshshhshhs");
//   console.log(loading, "loading");
//   console.log(error, "error");

//   const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
//     useFormik({
//       initialValues: {
//         comment: "",
//       },
//       validationSchema: commentSchema,
//       onSubmit: async (values) => {
//         try {
//           setIsSubmitting(true);
//           const response = await addCommenturl(chapterId, { ...values, type });
//           if (response.status === 201) {
//             toast.success("Comment added successfully.");
//             // resetForm();
//           } else {
//             toast.error("An error occurred. Please try again.");
//           }
//         } catch (error) {
//           setIsSubmitting(false);
//           console.error(error);
//           toast.error("An error occurred. Please try again.");
//         }
//         setIsSubmitting(false);
//       },
//     });

//   return (
//     <div className="mt-10">
//       <form onSubmit={handleSubmit} className="">
//         <div className="mb-4">
//           <label
//             htmlFor="comment"
//             className="mb-2 block text-sm font-bold text-gray-700"
//           >
//             Comment
//           </label>
//           <Textarea
//             id="comment"
//             name="comment"
//             placeholder="Tell us a little bit about yourself"
//             className="resize-none"
//             onBlur={handleBlur}
//             value={values.comment}
//             onChange={handleChange}
//           />

//           <div className="text-gray-500">
//             You can <span>@mention</span> other users and organizations.
//           </div>
//         </div>
//         {errors.comment && touched.comment && (
//           <div className="text-red-500">{errors.comment}</div>
//         )}
//         <Button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit"}
//         </Button>
//       </form>

//       {!loading && (
//         <div className="mt-10 space-y-4 ">
//           {Array.isArray(data) &&
//             data.map((comment: Comment) => (
//               <CommentList
//                 key={comment.id}
//                 id={comment.id}
//                 content={comment.content}
//                 user={comment.user}
//                 _count={comment._count}
//                 createdAt={comment.createdAt}
//                 Likes={comment.Likes}
//               ></CommentList>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CommentForm;

import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { addCommenturl } from "@/Services/Comment/endPoint.comment.services";
import GetAllCommentsByChapter from "@/Services/Comment/getAllCommentsByChapter.services";
import { useEffect, useState } from "react";
import { Comment } from "@/types";
import CommentList from "./commentList";
import { comment } from "@/schema/index.schema";

function CommentForm({ chapterId, type }: { chapterId: string; type: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, loading, error } = GetAllCommentsByChapter(chapterId, type);
  error && console.log(error);
  const [comments, setComments] = useState<Comment[]>(data || []);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: comment,
    onSubmit: async (values) => {
      try {
        setIsSubmitting(true);
        const response = await addCommenturl(chapterId, { ...values, type });
        if (response.status === 201) {
          toast.success("Comment added successfully.");
          setComments([...comments, response.data]); // Add the new comment to the comments state
          resetForm(); // Reset the form
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } catch (error) {
        setIsSubmitting(false);
        console.error(error);
        toast.error("An error occurred. Please try again.");
      }
      setIsSubmitting(false);
    },
  });

  useEffect(() => {
    setComments(data || []);
  }, [data]);

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Comment
          </label>
          <Textarea
            id="comment"
            name="comment"
            placeholder="Tell us a little bit about yourself"
            className="resize-none"
            onBlur={handleBlur}
            value={values.comment}
            onChange={handleChange}
          />

          <div className="text-gray-500">Be nice and respectful.</div>
          {errors.comment && touched.comment && (
            <div className="text-xs text-red-500">{errors.comment}</div>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {!loading && (
        <div className={` ${type === "COMIC" ? "mb-20" : ""} mt-10 space-y-4`}>
          {Array.isArray(comments) &&
            comments.map((comment: Comment) => (
              <CommentList
                key={comment.id}
                id={comment.id}
                content={comment.content}
                user={comment.user}
                _count={comment._count}
                createdAt={comment.createdAt}
                Likes={comment.Likes}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default CommentForm;
