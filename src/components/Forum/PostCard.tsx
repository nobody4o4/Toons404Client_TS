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
  BookmarkIcon,
  FileEditIcon,
  HeartIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  SendIcon,
  TrashIcon,
} from "lucide-react";
function PostCard() {
  return (
    <div>
      <Card className="w-full max-w-3xl border-2">
        <CardHeader className="flex flex-row items-start p-4">
          <Avatar className="h-10 w-10 border">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h3 className="text-base font-bold leading-none">
              <Link className="underline" to="#">
                @acmeinc
              </Link>
            </h3>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              2 minutes ago
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
                <FileEditIcon className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TrashIcon className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="p-4 text-sm">
          <p>
            Just had the most amazing cappuccino at the new cafe in town!
            #coffeeaddict ☕️
          </p>
        </CardContent>
        <CardFooter className="border-t p-4">
          <div className="flex items-center space-x-4">
            <Button size="icon" variant="ghost">
              <HeartIcon className="h-4 w-4" />
              <span className="sr-only">Like</span>
            </Button>
            <Button size="icon" variant="ghost">
              <MessageCircleIcon className="h-4 w-4" />
              <span className="sr-only">Comment</span>
            </Button>
            <Button size="icon" variant="ghost">
              <SendIcon className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
            <Button className="ml-auto" size="icon" variant="ghost">
              <BookmarkIcon className="h-4 w-4" />
              <span className="sr-only">Comment</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
export default PostCard;
