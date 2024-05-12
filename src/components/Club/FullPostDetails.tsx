import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  FileEditIcon,
  HeartIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  TrashIcon,
} from "lucide-react";
import { Post } from "@/types";
import { format } from "date-fns";
import {
  addLikesurl,
  removeLikesurl,
} from "@/Services/Like/endPoint.like.services";
import { toast } from "sonner";
import { FaHeart } from "react-icons/fa6";

function FullPostDetails({ post }: { post: Post }) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);

  const formattedDate = post?.createdAt
    ? format(new Date(post.createdAt), "MMMM d, yyyy")
    : "";

  useEffect(() => {
    if (post?._count.Likes) {
      setLikes(post?._count.Likes);
    }
    setIsLiked(!!post?.Likes?.[0] || false);
  }, [post]);

  const handleAddLike = async () => {
    try {
      setLikes((prevLikes) => prevLikes + 1);
      await addLikesurl("post", post.id);
      setIsLiked(true);
      toast.success("Post liked successfully.");
    } catch (error) {
      setLikes((prevLikes) => prevLikes - 1);
      console.error(error);
      toast.error("An error occurred while adding the like.");
    }
  };

  const handleRemoveLike = async () => {
    try {
      setLikes((prevLikes) => prevLikes - 1);
      await removeLikesurl("post", post.id);
      setIsLiked(false);
      toast.success("Post unliked successfully.");
    } catch (error) {
      setLikes((prevLikes) => prevLikes + 1);
      console.error(error);
      toast.error("An error occurred while removing the like.");
    }
  };

  return (
    <Card className="w-full border-2">
      <CardHeader className="flex flex-row items-start p-4">
        <Avatar className="h-10 w-10 border">
          <AvatarImage alt={post?.user?.username} src={post?.user.avatar} />
          <AvatarFallback>{post?.user?.username.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h3 className="text-base font-bold leading-none">
            <Link className="underline" to={`/profile/${post?.user?.username}`}>
              {post?.user?.firstName} {post?.user?.lastName} (@
              {post?.user?.username})
            </Link>
          </h3>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {formattedDate}
          </time>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="ml-auto h-8 w-8 rounded-full"
              size="icon"
              variant="ghost"
            >
              <MoreHorizontalIcon className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <FileEditIcon className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <TrashIcon className="mr-2 h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-4 text-sm">
        <h4 className="mb-2 text-base font-bold">{post?.title}</h4>
        <p>{post?.content}</p>
      </CardContent>
      <CardFooter className="border-t p-4">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center gap-1 text-sm md:gap-2">
            {isLiked ? (
              <Button
                size="sm"
                onClick={handleRemoveLike}
                variant="ghost"
                className="flex space-x-2"
              >
                <FaHeart className="h-4 w-4 text-red-600" />
                <p className=" text-red-600">{likes} </p>
              </Button>
            ) : (
              <Button
                size="sm"
                variant="ghost"
                onClick={handleAddLike}
                className="flex space-x-2"
              >
                <HeartIcon className="h-4 w-4" />
                <p>{likes} </p>
              </Button>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <Button size="icon" variant="ghost">
              <MessageCircleIcon className="h-4 w-4" />
              <span className="sr-only">Comment</span>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default FullPostDetails;
