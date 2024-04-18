import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import Blocks, { DataProp } from "editorjs-blocks-react-renderer";
import { Button } from "@/components/ui/button";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa6";
import CommentForm from "@/components/comment";
import {
  addLikesurl,
  removeLikesurl,
} from "@/Services/Like/endPoint.like.services";
import GetChapterByNumber from "@/Services/Chapter/getChapterByNumber";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Chapter() {
  const [bookId, setBookId] = useState<string>();
  const [chapterNumber, setChapterNumber] = useState<number>();
  const [isLiked, setIsLiked] = useState<boolean>();
  const [likes, setLikes] = useState<number>(0);
  const { number, id } = useParams<{ number: string; id: string }>();

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
    "Novel",
  );

  useEffect(() => {
    if (data?._count.Likes) {
      setLikes(data._count.Likes);
    }
    setIsLiked(data?.Likes.length > 0 ? true : false);
  }, [data]);

  if (loading) return <Loading />;
  if (error || !data) return <div>Error: {error}</div>;

  const formattedDate = format(data.createdAt, "EEE MMM-dd yyyy");

  const handleNextChapter = () => {
    window.location.replace(`/book/${id}/${parsedNumber + 1}`);
  };
  const handlePreviousChapter = () => {
    window.location.replace(`/book/${id}/${parsedNumber - 1}`);
  };

  const handleAddLike = async () => {
    try {
      // setIsLiking(true);
      setLikes((prevLikes) => prevLikes + 1);
      await addLikesurl("chapter", data.id);
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
      await removeLikesurl("chapter", data.id);
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

  return (
    <div className="w-full space-y-4 py-6 md:py-12">
      <div className="container grid gap-4 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {data.book.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              by {data.book.author.username}
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter">
              {data.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Published on {formattedDate}
            </p>
          </div>
          <div className="text-space-y-4 overflow-clip">
            <Blocks
              data={JSON.parse(data?.content) as DataProp}
              config={{
                text: {
                  className: "text-lg",
                },
                code: {
                  className: "language-js",
                },
                delimiter: {
                  className: "border border-2 w-16 mx-auto",
                },
                embed: {
                  className: "border-0",
                },
                header: {
                  className: "font-bold",
                },
                image: {
                  className: "w-full max-w-screen-md",
                  actionsClassNames: {
                    stretched: "w-full h-80 object-cover",
                    withBorder: "border border-2",
                    withBackground: "p-2",
                  },
                },
                list: {
                  className: "list-inside",
                },
                paragraph: {
                  className:
                    "text-lg text-opacity-75 tracking-wide leading-relaxed text-justify  leading-8 mb-7",
                  actionsClassNames: {
                    alignment: "text-{alignment}", // This is a substitution placeholder: left or center.
                  },
                },
                quote: {
                  className: "py-3 px-5 italic font-serif",
                },
                table: {
                  className: "table-auto",
                },
              }}
            />
          </div>
          <p className="lea line-clamp-3 text-justify text-lg leading-relaxed tracking-wide  text-opacity-75"></p>
        </div>
        <div className="mt-10 grid gap-4">
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
              <Link
                to={`/book/${id}/${parsedNumber - 1}`}
                onClick={handlePreviousChapter}
              >
                <Button
                  className="h-10 items-center"
                  size="lg"
                  variant="outline"
                >
                  <FaArrowLeft className="mr-1.5 h-4 w-4" />
                  Previous Chapter
                </Button>
              </Link>
              <Link
                to={`/book/${id}/${parsedNumber + 1}`}
                onClick={handleNextChapter}
              >
                <Button
                  className="h-10 items-center"
                  size="lg"
                  variant="outline"
                >
                  Next Chapter
                  <FaArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <CommentForm chapterId={data.id} type={data.book.type} />
      </div>
    </div>
  );
}

export default Chapter;
