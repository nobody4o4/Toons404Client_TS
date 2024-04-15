import { SeriesPageDetail } from "@/types";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import {
  addLikesurl,
  removeLikesurl,
} from "@/Services/Like/endPoint.like.services";
import { toast } from "sonner";
import { EyeIcon, ThumbsUpIcon } from "lucide-react";
import { FaEye, FaHeart } from "react-icons/fa6";

function SeriesDetails(series: SeriesPageDetail) {
  const [isLiked, setIsLiked] = useState<boolean>();
  const [likes, setLikes] = useState<number>(0);
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    if (series?._count?.Likes) {
      setLikes(series._count.Likes);
    }
    setIsLiked(series.hasLiked);
  }, [series]);

  const handleAddLike = async () => {
    try {
      setIsLiking(true);
      setLikes((prevLikes) => prevLikes + 1);
      await addLikesurl("series", series.id);
      setIsLiked(true);
      setIsLiking(false);
      toast.success("Subscribed successfully.");
    } catch (error) {
      setIsLiking(false);
      setLikes((prevLikes) => prevLikes - 1);
      console.error(error);
      toast.error("An error occurred while adding like.");
    }
  };

  const handleRemoveLike = async () => {
    try {
      setIsLiking(true);
      setLikes((prevLikes) => prevLikes - 1);
      await removeLikesurl("series", series.id);
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
  console.log(series, "novelklll");
  return (
    <>
      <div className="sticky bottom-0 top-20 flex min-h-screen flex-col p-5  text-text ">
        <div className=" flex h-full w-full flex-col">
          <img
            src={series?.coverImage}
            className=" aspect-[13/16] h-[60vh] object-cover "
            alt=""
          />
          <div className="flex flex-col space-y-3 bg-white p-4">
            <div className="flex justify-between">
              <p className="text-2xl max-md:max-w-full">{series?.title}</p>
              <div className=" flex items-center gap-4 text-sm font-medium">
                <div className=" flex items-center gap-1.5 text-sm font-medium">
                  <FaEye className="h-4 w-4" />
                  <span>12.5k</span>
                </div>
                <div className=" flex items-center gap-1.5 text-sm font-medium">
                  <FaHeart className="h-4 w-4" />
                  <span>9.8k</span>
                </div>
              </div>
            </div>

            <p className="line-clamp-6">{series?.description}</p>
            {isLiked ? (
              <Button
                variant={"outline"}
                onClick={handleRemoveLike}
                disabled={isLiking}
                className="justify-center rounded-md  px-4 text-center text-sm font-medium leading-10 text-black dark:bg-transparent dark:text-black dark:hover:bg-primary  "
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
    </>
  );
}
export default SeriesDetails;
