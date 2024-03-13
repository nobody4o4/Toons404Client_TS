import { chapterCard } from "@/types";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const ChapterCard = (chapter: chapterCard) => {
  const novelId = useParams();
  console.log(novelId, "novelTtile");
  console.log(chapter.title, chapter.number, "chapter card");
  return (
    <Link
      to={`/novel/${novelId.id}/${chapter.number}`}
      className="flex w-full max-w-[819px] items-center justify-between gap-5 border-b border-t border-solid border-b-neutral-100 border-t-neutral-100 sm:flex-wrap"
    >
      <div className="flex items-center justify-between gap-2 self-stretch px-5">
        <img
          loading="lazy"
          src={chapter.thumbnail}
          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/a47d06d9976494254de218c49f1fdd2f1012bb2930a2730d293f2b2a023b046d?apiKey=3969ba43007a4a76b36a3bcb3912a1e3&"
          alt={`Episode ${chapter.number} thumbnail`}
          className="aspect-[1.05] w-[77px] self-stretch"
        />
        <p className="my-auto self-stretch text-lg text-text">
          {chapter.title}
        </p>
        {true && (
          <p className="my-auto self-stretch text-sm font-extralight text-primary">
            New
          </p>
        )}
      </div>
      <div className="flex w-1/3 justify-between">
        <div className="my-auto flex justify-between gap-1.5 gap-x-4 self-stretch whitespace-nowrap text-sm tracking-wider text-zinc-400">
          <time className="grow">{chapter.createdAt}</time>
          <div className="flex w-1/2 justify-between gap-1">
            {true && <FaHeart className="text-lg" />}
            {!true && <FaRegHeart className="text-lg" />}
            <span className="grow">112</span>
          </div>
        </div>
        <p className="my-auto self-stretch text-right text-lg tracking-wider text-neutral-700">
          {" "}
          #{chapter.number}{" "}
        </p>
      </div>
    </Link>
  );
};

export default ChapterCard;
