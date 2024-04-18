import { chapterCard } from "@/types";
import GetAllChaptersByBookId from "@/Services/Chapter/getAllChapterByBook";
import { ComicChapterCard } from "./chaptercard.comic";
import Loading from "@/pages/Loading";
// import ChapterCardMain from "./chapterCard.book";

export const ComicChapterList = (BookId: { BookId: string }) => {
  const { data, loading, error } = GetAllChaptersByBookId(
    BookId.BookId,
    "Comic",
  );
  console.log("data chapterlist", data);
  console.log("loading chapterlist", data?.title);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mx-32 flex w-1/2 flex-col  border-solid border-r-neutral-100  px-5 py-2.5 max-md:pr-5">
      {Array.isArray(data) &&
        data?.map((chapters: chapterCard, index: number) => (
          <ComicChapterCard
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
