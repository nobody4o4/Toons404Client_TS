import { chapterCard } from "@/types";
import GetAllChaptersByBookId from "@/Services/Chapter/getAllChapterByBook";
import ChapterCardMain from "./chapterCard.book";
import { BlockList } from "net";
import LockedChapterCard from "../Chapter/LockedChapter";
import { SubAuth } from "@/utils/SubAuth";
// import ChapterCardMain from "./chapterCard.book";

const ChapterList = (BookId: { BookId: string }, isPremium: boolean) => {
  const { data, loading, error } = GetAllChaptersByBookId(
    BookId.BookId,
    "novel",
  );
  console.log("data chapterlist", data);
  console.log("loading chapterlist", data?.title);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const isAccessable = SubAuth(isPremium);

  return (
    <div className=" flex flex-col  border-solid border-r-neutral-100  px-5 py-2.5 max-md:pr-5">
      {!isAccessable
        ? Array.isArray(data) &&
          data?.map((chapters: chapterCard, index: number) => (
            <LockedChapterCard {...chapters} />
          ))
        : Array.isArray(data) &&
          data?.map((chapters: chapterCard, index: number) => (
            <ChapterCardMain
              book={chapters.book}
              key={index}
              id={chapters.id}
              title={chapters.title}
              likes={chapters.likes}
              number={chapters.number}
              thumbnail={chapters.thumbnail}
              createdAt={chapters.createdAt}
              _count={chapters._count}
              Likes={chapters.Likes}
              views={chapters.views}
            />
          ))}
    </div>
  );
};

export default ChapterList;
