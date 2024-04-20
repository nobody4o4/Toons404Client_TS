import { Comment } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {
  addLikesurl,
  removeLikesurl,
} from "@/Services/Like/endPoint.like.services";
import { toast } from "sonner";
import { Link } from "react-router-dom";

function CommentList(comment: Comment) {
  const [isLiked, setIsLiked] = useState<boolean>();
  const [likes, setLikes] = useState<number>(0);
  const [isLiking, setIsLiking] = useState(false);
  console.log(comment, "comment");

  useEffect(() => {
    if (comment?._count?.Likes) {
      setLikes(comment._count.Likes);
    }
    setIsLiked(comment?.Likes?.length > 0 ? true : false);
  }, [comment]);

  const handleAddLike = async (commentId: string) => {
    try {
      setIsLiking(true);
      setLikes((prevLikes) => prevLikes + 1);
      await addLikesurl("comment", commentId);
      setIsLiking(false);
      setIsLiked(true);
      toast.success("Comment liked successfully.");
    } catch (error) {
      setIsLiking(false);
      setLikes((prevLikes) => prevLikes - 1);
      console.error(error);
      toast.error("An error occurred while adding the like.");
    }
  };

  const handleRemoveLike = async (commentId: string) => {
    try {
      setIsLiking(true);
      setLikes((prevLikes) => prevLikes - 1);
      await removeLikesurl("comment", commentId);
      setIsLiked(false);
      setIsLiking(false);
      toast.success("Comment unliked successfully.");
    } catch (error) {
      setIsLiking(false);
      setLikes((prevLikes) => prevLikes + 1);
      console.error(error);
      toast.error("An error occurred while removing the like.");
    }
  };

  console.log(isLiked, "isLiked");
  return (
    <div key={comment?.id} className="mb-2 flex space-x-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src={comment?.user?.avatar} className="object-cover" />
        <AvatarFallback>{comment?.user?.username}</AvatarFallback>
      </Avatar>
      <div className="grid gap-2">
        <div className="flex items-center space-x-2">
          <Link to={`/profile/${comment?.user?.username}`}>
            <h4 className="text-xl font-semibold">{comment?.user?.username}</h4>
          </Link>
          <div className="flex gap-x-2 text-sm opacity-70">
            <p>
              {new Date(comment?.createdAt).toLocaleDateString("en", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              {new Date(comment?.createdAt).toLocaleTimeString("en", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <p className="text-base leading-snug">{comment?.content}</p>
        <div className="flex items-center space-x-2">
          {isLiked ? (
            <Button
              variant="outline"
              className="flex h-fit gap-x-2"
              onClick={() => handleRemoveLike(comment?.id)}
              disabled={isLiking}
            >
              <FaHeart className="h-4 w-4 text-red-600" />
              {comment?._count.Likes}
              <span className="sr-only">Like</span>
            </Button>
          ) : (
            <Button
              variant="outline"
              className="flex h-fit gap-x-2"
              onClick={() => handleAddLike(comment.id)}
              disabled={isLiking}
            >
              <FaRegHeart className="h-4 w-4" />
              {likes}
              <span className="sr-only">Like</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
export default CommentList;
