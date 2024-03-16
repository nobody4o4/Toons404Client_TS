import { chapter } from "@/types";

function ReadingBlock(chapter: chapter) {
  console.log(chapter, "chapterssss");
  return (
    <div className="border-3 m-20 border-red-600">
      <p className="text-5xl ">{chapter.content}a</p>
    </div>
  );
}
export default ReadingBlock;
