import { chapterCard } from "@/types";
import { FaEye, FaHeart, FaLock, FaRegHeart } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card } from "../ui/card";

function LockedChapterCard(chapter: chapterCard) {
  const bookId = useParams();
  console.log(bookId, "bookTtile");
  console.log(chapter, "chapter card");
  const hasLiked = chapter?.Likes?.length > 0;

  return (
    <div key={chapter.id}>
      <AlertDialog>
        <AlertDialogTrigger className="relative flex w-full">
          <Card className="pointer-events-none my-2 flex w-[900px] items-center justify-between self-stretch rounded-md border p-2">
            <div className="flex items-center space-x-4">
              <img
                alt={chapter.title}
                className="h-15 w-15 rounded-md object-cover"
                height="60"
                src={chapter.thumbnail}
                style={{ aspectRatio: "60/60", objectFit: "cover" }}
                width="60"
              />
              <div>
                <h3 className="text-lg font-medium">{chapter.title}</h3>{" "}
              </div>
            </div>
            <div className="flex w-64 justify-between">
              <div className="my-auto flex justify-between gap-1.5 gap-x-4 self-stretch whitespace-nowrap text-sm tracking-wider text-zinc-400">
                <div className="flex gap-[2px] text-right">
                  <p className="text-xs font-normal sm:text-sm md:text-base">
                    {chapter._count.Likes}
                  </p>
                  {hasLiked ? (
                    <FaHeart className="pt-1 text-xs font-normal sm:text-sm md:text-xl" />
                  ) : (
                    <FaRegHeart className="pt-1 text-xs font-normal sm:text-sm md:text-xl" />
                  )}
                </div>
                <div className="flex gap-[2px] text-right">
                  <p className="text-xs font-normal sm:text-sm md:text-base">
                    {chapter.views}
                  </p>
                  <FaEye className="pt-1 text-xs font-normal sm:text-sm md:text-xl" />
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(chapter.createdAt).toLocaleDateString("en", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="my-auto flex items-center space-x-2 self-stretch">
                <p className="text-right text-lg tracking-wider text-neutral-700">
                  #{chapter.number}
                </p>
                <FaLock className=" h-6 w-6 text-yellow-400 opacity-100" />
              </div>
            </div>
          </Card>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Premium Content</AlertDialogTitle>
            <AlertDialogDescription>
              You need to subscribe to view this content. Do you want to
              subscribe now?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No</AlertDialogCancel>
            <Link to="/subscription">
              <AlertDialogAction>Yes</AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
export default LockedChapterCard;
