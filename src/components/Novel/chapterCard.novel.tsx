import { format } from "date-fns";
import { chapterCard } from "@/types";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

function ChapterCardMain(chapter: chapterCard) {
  return (
    <div className="my-2 flex items-center justify-between rounded-md border p-4">
      <div className="flex items-center space-x-4">
        <img
          alt={chapter.title}
          className="h-15 w-15 rounded-md object-cover"
          height="60"
          src={chapter.thumbnail}
          style={{
            aspectRatio: "60/60",
            objectFit: "cover",
          }}
          width="60"
        />
        <div>
          <h3 className="text-lg font-medium">
            {chapter.title}{" "}
            <span className="font-light">#{chapter.number}</span>{" "}
          </h3>
          <p className="text-sm text-gray-500">
            {format(chapter.createdAt, "EEE  dd MMM yyyy")}
          </p>
        </div>
      </div>
      <div className="flex w-1/3 justify-between">
        <div className="my-auto flex justify-between gap-1.5 gap-x-4 self-stretch whitespace-nowrap text-sm tracking-wider text-zinc-400">
          <div className="flex w-1/2 justify-between gap-1">
            {true && <FaHeart className="text-lg" />}
            {!true && <FaRegHeart className="text-lg" />}
            <span className="grow">{chapter.likes}</span>
          </div>
        </div>
        <p className="my-auto self-stretch text-right text-lg tracking-wider text-neutral-700">
          {" "}
          #{chapter.number}{" "}
        </p>
      </div>
    </div>
  );
}
export default ChapterCardMain;
