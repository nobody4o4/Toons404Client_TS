import { bookPageDetail, bookPageDetails } from "@/types";
import { Button } from "../ui/button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetChapterByNumber from "@/Services/Chapter/getChapterByNumber";
import {
  addLikesurl,
  removeLikesurl,
} from "@/Services/Like/endPoint.like.services";

import { toast } from "sonner";

// GenreBadge Component for displaying genres
const GenreBadge = ({ genre }: { genre: string }) => (
  <div className=" justify-center rounded-md bg-primary px-1 py-1.5">
    {genre}
  </div>
);

// Main Component
const BookDetails = (book: bookPageDetail) => {
  const [isLiked, setIsLiked] = useState<boolean>();
  const [likes, setLikes] = useState<number>(0);
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    if (book?._count?.Likes) {
      setLikes(book._count.Likes);
    }
    setIsLiked(book.hasLiked);
  }, [book]);

  const handleAddLike = async () => {
    try {
      setIsLiking(true);
      setLikes((prevLikes) => prevLikes + 1);
      await addLikesurl("book", book.id);
      setIsLiked(true);
      setIsLiking(false);
      toast.success("Subscribed successfully.");
    } catch (error) {
      setIsLiking(false);
      setLikes((prevLikes) => prevLikes - 1);
      console.error(error);
      toast.error("An error occurred while adding the like.");
    }
  };

  const handleRemoveLike = async () => {
    try {
      setIsLiking(true);
      setLikes((prevLikes) => prevLikes - 1);
      await removeLikesurl("book", book.id);
      setIsLiked(false);
      setIsLiking(false);
      toast.success("Unsubscribed successfully.");
    } catch (error) {
      setIsLiking(false);
      setLikes((prevLikes) => prevLikes + 1);
      console.error(error);
      toast.error("An error occurred while removing the like.");
    }
  };

  return (
    <div className="flex bg-primary p-20">
      <div className="mx-48 flex h-52 w-full gap-5 rounded-md bg-white p-4 max-md:mt-10 max-md:max-w-full max-md:flex-col max-md:gap-0 max-md:pr-5">
        <div className="flex h-[240px] w-[200px] flex-col rounded-sm max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={book.coverImage}
            alt={book.title}
            className="h-[900px] w-[200px] max-w-full grow origin-bottom -translate-y-16 rounded-sm object-cover max-md:mt-0"
          />
        </div>
        <div className="ml-5 flex w-full flex-col max-md:ml-0 max-md:w-full">
          <div className="my-auto flex flex-col self-stretch text-black max-md:mt-10 max-md:max-w-full">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl max-md:max-w-full">{book.title}</h3>
              <div className=" flex h-full items-center ">
                <span className="text-base capitalize text-gray-600">
                  {book.author.username}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className=" text-gray-600">
                  {new Date(book.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <p className="mt-2 line-clamp-4 text-sm max-md:max-w-full">
              {book.description}
            </p>

            <div className="mt-4 flex w-full justify-between gap-5 whitespace-nowrap text-white max-md:max-w-full max-md:flex-wrap">
              <div className="flex gap-2.5 self-start text-xs">
                <GenreBadge genre={book.genre.name} />
                {book.subGenre.name && (
                  <GenreBadge genre={book.subGenre.name} />
                )}
              </div>
              <div className="flex gap-x-5">
                <Link to="/" className="rounded-3xl">
                  <Button className="justify-center rounded-md bg-primary px-4 text-center text-sm font-medium leading-10 dark:bg-primary dark:text-text dark:hover:bg-primary">
                    First episode
                  </Button>
                </Link>

                {isLiked ? (
                  <Button
                    variant="outline"
                    onClick={handleRemoveLike}
                    disabled={isLiking}
                    className="justify-center rounded-md px-4 text-center text-sm font-medium leading-10 text-black dark:bg-transparent dark:text-black dark:hover:bg-primary"
                  >
                    Subscribed
                  </Button>
                ) : (
                  <Button
                    onClick={handleAddLike}
                    disabled={isLiking}
                    className="justify-center rounded-md bg-primary px-4 text-center text-sm font-medium leading-10 dark:bg-primary dark:text-text dark:hover:bg-primary"
                  >
                    Subscribe
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
