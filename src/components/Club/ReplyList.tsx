import { Reply } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {
  addLikesurl,
  removeLikesurl,
} from "@/Services/Like/endPoint.like.services";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Reply from "./Reply";

interface ReplyListProps {
  reply: Reply;
}

function ReplyList({ reply }: ReplyListProps) {
  const [isLiked, setIsLiked] = useState<boolean>();
  const [likes, setLikes] = useState<number>(0);
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    if (reply?._count?.Likes) {
      setLikes(reply._count.Likes);
    }
    setIsLiked(reply?.Likes?.length > 0 ? true : false);
  }, [reply]);

  const handleAddLike = async (replyId: string) => {
    try {
      setIsLiking(true);
      setLikes((prevLikes) => prevLikes + 1);
      await addLikesurl("reply", replyId);
      setIsLiking(false);
      setIsLiked(true);
      toast.success("Reply liked successfully.");
    } catch (error) {
      setIsLiking(false);
      setLikes((prevLikes) => prevLikes - 1);
      console.error(error);
      toast.error("An error occurred while adding the like.");
    }
  };

  const handleRemoveLike = async (replyId: string) => {
    try {
      setIsLiking(true);
      setLikes((prevLikes) => prevLikes - 1);
      await removeLikesurl("reply", replyId);
      setIsLiked(false);
      setIsLiking(false);
      toast.success("Reply unliked successfully.");
    } catch (error) {
      setIsLiking(false);
      setLikes((prevLikes) => prevLikes + 1);
      console.error(error);
      toast.error("An error occurred while removing the like.");
    }
  };

  return (
    <div key={reply?.id} className="mb-2 flex space-x-4">
      <Avatar className="h-10 w-10">
        <AvatarImage src={reply?.user?.avatar} className="object-cover" />
        <AvatarFallback>{reply?.user?.username}</AvatarFallback>
      </Avatar>
      <div className="grid gap-2">
        <div className="flex items-center space-x-2">
          <Link to={`/profile/${reply?.user?.username}`}>
            <h4 className="text-lg font-semibold">{reply?.user?.username}</h4>
          </Link>
          <div className="flex gap-x-2 text-sm opacity-70">
            <p>
              {new Date(reply?.createdAt).toLocaleDateString("en", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              {new Date(reply?.createdAt).toLocaleTimeString("en", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <p className="text-base leading-snug">{reply?.content}</p>
        <div className="flex items-center space-x-2">
          {isLiked ? (
            <Button
              variant="outline"
              className="flex h-fit gap-x-2"
              onClick={() => handleRemoveLike(reply?.id)}
              disabled={isLiking}
            >
              <FaHeart className="h-4 w-4 text-red-600" />
              {likes}
              <span className="sr-only">Like</span>
            </Button>
          ) : (
            <Button
              variant="outline"
              className="flex h-fit gap-x-2"
              onClick={() => handleAddLike(reply.id)}
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

export default ReplyList;
