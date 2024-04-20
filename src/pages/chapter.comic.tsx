import CommentForm from "@/components/comment";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa6";
import {
  addLikesurl,
  removeLikesurl,
} from "@/Services/Like/endPoint.like.services";
import GetChapterByNumber from "@/Services/Chapter/getChapterByNumber";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { ModeToggle } from "@/components/mode_toggle";

export default function ComicChapter() {
  const [bookId, setBookId] = useState<string>();
  const [chapterNumber, setChapterNumber] = useState<number>();
  const [isLiked, setIsLiked] = useState<boolean>();
  const [likes, setLikes] = useState<number>(0);
  const { number, id } = useParams<{ number: string; id: string }>();
  const naviagte = useNavigate();

  const parsedNumber: number = Number(number || 0);
  useEffect(() => {
    setBookId(id);
    setChapterNumber(parsedNumber);
  }, [id, parsedNumber]);

  console.log("bookId", bookId);
  console.log("chapterNumber", chapterNumber);

  const { data, loading, error } = GetChapterByNumber(
    id || "",
    parsedNumber,
    "COMIC",
  );

  useEffect(() => {
    if (data?._count.Likes) {
      setLikes(data._count.Likes);
    }
    setIsLiked(data?.Likes?.length > 0 ? true : false);
  }, [data]);

  if (loading) return <Loading />;
  if (error || !data) return <div>Error: {error}</div>;

  const formattedDate = format(data.createdAt, "EEE MMM-dd yyyy");

  const handleNextChapter = () => {
    naviagte(`/comic/${id}/${data?.nextChapter?.number}`);
  };
  const handlePreviousChapter = () => {
    naviagte(`/comic/${id}/${data?.previousChapter?.number}`);
  };

  const handleAddLike = async () => {
    try {
      // setIsLiking(true);
      setLikes((prevLikes) => prevLikes + 1);
      await addLikesurl("comicChapter", data.id);
      // setIsLiking(false);
      setIsLiked(true);
      toast.success("Chapter liked successfully.");
    } catch (error) {
      // setIsLiking(false);
      setLikes((prevLikes) => prevLikes - 1);
      console.error(error);
      toast.error("An error occurred while adding the like.");
    }
  };

  const handleRemoveLike = async () => {
    try {
      // setIsLiking(true);
      setLikes((prevLikes) => prevLikes - 1);
      await removeLikesurl("comicChapter", data.id);
      setIsLiked(false);
      // setIsLiking(false);
      toast.success("Chapter unliked successfully.");
    } catch (error) {
      // setIsLiking(false);
      setLikes((prevLikes) => prevLikes + 1);
      console.error(error);
      toast.error("An error occurred while removing the like.");
    }
  };

  const hasPreviousChapter = data?.previousChapter?.number ? true : false;
  const hasNextChapter = data?.nextChapter?.number ? true : false;

  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <header className="sticky left-0 right-0 top-0 flex items-center justify-between border-b bg-background p-4">
        <div className="max-w-80">
          <Link to={`/book/${bookId}`}>
            <Button size="sm" variant="ghost" className="flex gap-2 text-lg">
              <FaArrowLeft />
              {data.book.title}
            </Button>
          </Link>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 space-y-1">
          <h1 className="text-xl font-medium tracking-tighter">{data.title}</h1>
          <p className="text-sm leading-none">
            by. {data.book.author.username}
          </p>
        </div>
        <div>
          <ModeToggle />
        </div>
      </header>
      <main className="flex-1">
        <div className=" h-[calc(100vh-56px)]a h-full w-full items-center overflow-scroll  border-b border-t">
          <div className="grid w-full grid-cols-3 px-4">
            {Array.isArray(data.ComicImage) &&
              data.ComicImage.map((image, index) => (
                <img
                  className="pointer-events-none col-start-2 select-none"
                  alt={`Page ${index + 1}`}
                  height="1114"
                  key={index}
                  src={image.image}
                  style={{
                    objectFit: "cover",
                  }}
                  width="740"
                />
              ))}
            {/* <img
              alt="Page 1"
              height="1114"
              src="/placeholder.svg"
              style={{
                aspectRatio: "740/1114",
                objectFit: "cover",
              }}
              width="740"
            /> */}
          </div>
        </div>
        <div className="mx-32 mt-10 grid gap-4">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center gap-1 text-sm md:gap-2">
              <span className="mr-1">{likes} Likes</span>
              {isLiked ? (
                <Button
                  size="sm"
                  onClick={handleRemoveLike}
                  variant={"outline"}
                  className="flex space-x-2"
                >
                  <FaHeart className="h-4 w-4 text-red-600" />
                  <p>liked</p>
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleAddLike}
                  className="flex space-x-2"
                >
                  <FaRegHeart className="h-4 w-4" />
                  <p>Like</p>
                </Button>
              )}
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Button
                onClick={handlePreviousChapter}
                disabled={!hasPreviousChapter}
                className="h-10 items-center"
                size="lg"
                variant="outline"
              >
                <FaArrowLeft className="mr-1.5 h-4 w-4" />
                Previous Chapter
              </Button>
              <Button
                disabled={!hasNextChapter}
                onClick={handleNextChapter}
                className="h-10 items-center"
                size="lg"
                variant="outline"
              >
                Next Chapter
                <FaArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </div>
          <CommentForm chapterId={data.id} type={data.book.type} />
        </div>
      </main>
    </div>
  );
}
