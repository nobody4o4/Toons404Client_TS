import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { ChevronDownIcon, HeartIcon } from "lucide-react";
import { Reply as ReplyType } from "@/types";
import { format } from "date-fns";
import {
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Textarea } from "@/components/ui/textarea";
import { addReplyurl } from "@/Services/Reply/endPoint.reply.services";
import { addLikesurl } from "@/Services/Like/endPoint.like.services";
import { toast } from "sonner";

const replySchema = Yup.object().shape({
  reply: Yup.string()
    .required("Reply is required.")
    .min(3, "Reply must be at least 3 characters.")
    .max(160, "Reply must not be longer than 160 characters."),
});

function Reply({
  commentId,
  replies,
}: {
  commentId: string;
  replies: ReplyType[];
}) {
  const [repliesState, setRepliesState] = useState<ReplyType[]>(replies);

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
      reply: "",
    },
    validationSchema: replySchema,
    onSubmit: async (values) => {
      try {
        const response = await addReplyurl(commentId, {
          ...values,
        });
        if (response.status === 201) {
          toast.success("Reply added successfully.");
          setRepliesState([...repliesState, response.data]);
          resetForm();
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred. Please try again.");
      }
    },
  });

  const handleLikeReply = async (replyId: string) => {
    try {
      await addLikesurl(replyId, "reply");
      const updatedReplies = repliesState.map((reply) => {
        if (reply.id === replyId) {
          return {
            ...reply,
            likes: 1,
            isLiked: true,
          };
        }
        return reply;
      });
      setRepliesState(updatedReplies);
      toast.success("Reply liked successfully.");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while liking the reply.");
    }
  };

  return (
    <>
      <CollapsibleTrigger asChild>
        <Button size="sm" variant="ghost">
          <ChevronDownIcon className="h-4 w-4 transition-transform [&[data-state=open]]:rotate-180" />
          <span className="sr-only">Toggle replies</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 space-y-4">
        {repliesState.map((reply) => (
          <div key={reply.id} className="flex items-start space-x-4">
            <Avatar className="h-8 w-8 border">
              <AvatarImage alt={reply.user.username} src={reply.user.avatar} />
              <AvatarFallback>{reply.user.username.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">@{reply.user.username}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {format(new Date(reply.createdAt), "MMMM d, yyyy")}
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                {reply.content}
              </p>
              <div className="mt-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleLikeReply(reply.id)}
                >
                  <HeartIcon
                    className={`h-4 w-4 ${reply?.isLiked ? "text-red-500" : ""}`}
                  />
                  <span className="ml-1">{reply?.likes}</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <label
              htmlFor="reply"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Add a reply
            </label>
            <Textarea
              id="reply"
              name="reply"
              placeholder="Write your reply..."
              className="resize-none"
              onBlur={handleBlur}
              value={values.reply}
              onChange={handleChange}
            />
            <div className="text-gray-500">Be nice and respectful.</div>
            {errors.reply && touched.reply && (
              <div className="text-xs text-red-500">{errors.reply}</div>
            )}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </CollapsibleContent>
    </>
  );
}

export default Reply;
