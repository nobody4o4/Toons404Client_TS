import ChapterCard from "./ChapterCard";
import { chapterCard } from "@/types";
import GetAllChaptersByNovelId from "@/Services/Chapter/getAllChapterByNovel";

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

  // const episodes = [
  //   {
  //     episodeName: "The Beginning",
  //     episodeNumber: 184,
  //     isNew: true,
  //     isLiked: true,
  //     date: "Jan 02, 2024",
  //     likes: 1962,
  //   },
  //   {
  //     episodeName: "The Continuation",
  //     episodeNumber: 185,
  //     isNew: false,
  //     isLiked: true,
  //     date: "Jan 09, 2024",
  //     likes: 1723,
  //   },
  //   {
  //     episodeName: "Into the Unknown",
  //     episodeNumber: 186,
  //     isNew: true,
  //     isLiked: true,
  //     date: "Jan 16, 2024",
  //     likes: 2105,
  //   },
  //   {
  //     episodeName: "Uncharted Territories",
  //     episodeNumber: 187,
  //     isNew: false,
  //     isLiked: true,
  //     date: "Jan 23, 2024",
  //     likes: 1890,
  //   },
  //   {
  //     episodeName: "Lost in Time",
  //     episodeNumber: 188,
  //     isNew: true,
  //     isLiked: false,
  //     date: "Jan 30, 2024",
  //     likes: 2019,
  //   },
  //   {
  //     episodeName: "The Revelation",
  //     episodeNumber: 189,
  //     isNew: true,
  //     isLiked: true,
  //     date: "Feb 06, 2024",
  //     likes: 2187,
  //   },
  //   {
  //     episodeName: "Behind the Veil",
  //     episodeNumber: 190,
  //     isNew: false,
  //     isLiked: false,
  //     date: "Feb 13, 2024",
  //     likes: 1765,
  //   },
  //   {
  //     episodeName: "Rise of the Phoenix",
  //     episodeNumber: 191,
  //     isNew: true,
  //     isLiked: false,
  //     date: "Feb 20, 2024",
  //     likes: 2250,
  //   },
  //   {
  //     episodeName: "Echoes of the Past",
  //     episodeNumber: 192,
  //     isNew: false,
  //     isLiked: true,
  //     date: "Feb 27, 2024",
  //     likes: 1,
  //   },
  //   {
  //     episodeName: "A New Dawn",
  //     episodeNumber: 193,
  //     isNew: true,
  //     isLiked: false,
  //     date: "Mar 05, 2024",
  //     likes: 2336,
  //   },
  // ];

  // return (
  //   <div className="mx-32 flex w-1/2 flex-col border-r-2 border-solid border-r-neutral-100  px-5 py-2.5 max-md:pr-5">
  //     {Array.isArray(data) &&
  //       data.map((chapters: chapterCard, index: number) => (
  //         <ChapterCard
  //           key={index}
  //           chapterNumber={chapters.number}
  //           chapterName={chapters.title}
  //           date={chapters.createdAt}
  //         />
  //       ))}
  //   </div>
  // );
  return (
    <div className="mx-32 flex w-1/2 flex-col border-r-2 border-solid border-r-neutral-100  px-5 py-2.5 max-md:pr-5">
      a
      {Array.isArray(data) &&
        data?.map((chapters: chapterCard, index: number) => (
          <ChapterCard
            key={index}
            id={chapters.id}
            title={chapters.title}
            number={chapters.number}
            thumbnail={chapters.thumbnail}
            createdAt={chapters.createdAt}
          />
        ))}
    </div>
  );
};

export default ChapterList;
