import { chapterCard } from "@/types";
import GetAllChaptersByNovelId from "@/Services/Chapter/getAllChapterByNovel";
import ChapterCardMain from "./chapterCard.novel";
// import ChapterCardMain from "./chapterCard.novel";

const ChapterList = (NovelId: { NovelId: string }) => {
  const { data, loading, error } = GetAllChaptersByNovelId(NovelId.NovelId);
  console.log("data chapterlist", data);
  console.log("loading chapterlist", data?.title);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mx-32 flex w-1/2 flex-col  border-solid border-r-neutral-100  px-5 py-2.5 max-md:pr-5">
      {/* {Array.isArray(data) &&
        data?.map((chapters: chapterCard, index: number) => (
          <ChapterCard
            key={index}
            id={chapters.id}
            title={chapters.title}
            likes={chapters.likes}
            number={chapters.number}
            thumbnail={chapters.thumbnail}
            createdAt={chapters.createdAt}
          />
        ))} */}
      {Array.isArray(data) &&
        data?.map((chapters: chapterCard, index: number) => (
          <ChapterCardMain
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
