import { chapterCard } from "@/types";
import GetAllChaptersByBookId from "@/Services/Chapter/getAllChapterByBook";
import ChapterCardMain from "./chapterCard.book";
// import ChapterCardMain from "./chapterCard.book";

const ChapterList = (BookId: { BookId: string }) => {
  const { data, loading, error } = GetAllChaptersByBookId(BookId.BookId);
  console.log("data chapterlist", data);
  console.log("loading chapterlist", data?.title);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className=" flex flex-col  border-solid border-r-neutral-100  px-5 py-2.5 max-md:pr-5">
      {Array.isArray(data) &&
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
