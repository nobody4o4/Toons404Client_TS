import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { addCommenturl } from "@/Services/Comment/endPoint.comment.services";
import { useEffect, useState } from "react";
import { Comment } from "@/types";
import CommentList from "./CommentList";
import { comment } from "@/schema/index.schema";
import GetAllCommentsByChapter from "@/Services/Comment/getAllCommentsByChapter.services";
import { addReplyurl } from "@/Services/Reply/endpoint.reply.services";

function CommentForm({ postId }: { postId: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log(postId);
  const { data, loading, error } = GetAllCommentsByChapter(postId, "post");
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
        const response = await addCommenturl(postId, {
          ...values,
          type: "post",
        });
        if (response.status === 201) {
          toast.success("Comment added successfully.");
          setComments([...comments, response.data]);
          resetForm();
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

  const handleReplySubmit = async (commentId: string, replyContent: string) => {
    try {
      const response = await addReplyurl(commentId, { content: replyContent });

      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...(comment.Reply || []), response.data],
          };
        }
        return comment;
      });
      setComments(updatedComments);
      toast.success("Reply added successfully.");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

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
            placeholder="Write your comment..."
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
        <div className="mt-10 space-y-4">
          {Array.isArray(comments) &&
            comments.map((comment: Comment) => (
              <CommentList
                key={comment.id}
                comment={comment}
                onReplySubmit={handleReplySubmit}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default CommentForm;
