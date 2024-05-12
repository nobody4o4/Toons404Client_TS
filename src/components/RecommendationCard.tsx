import { bookCard } from "@/types";
import { FaHeart } from "react-icons/fa6";

function RecommendationCard({
  id,
  title,
  genre,
  subGenre,
  coverImage,
  type,
  series,
  _count,
  author,
}: bookCard) {
  const handleClick = () => {
    window.location.replace(`/book/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="grid h-24 w-full cursor-pointer grid-cols-4 rounded-lg bg-white dark:bg-gray-900"
    >
      <div className="col-span-1 overflow-hidden rounded-l-lg">
        <img
          alt="Cover Image"
          className="aspect-square h-full w-full object-cover"
          src={coverImage}
        />
      </div>
      <div className=" col-span-3 flex w-full self-stretch p-2">
        <div className="w-full">
          <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
            {title}
          </h2>
          <p className=" text-sm text-gray-500 dark:text-gray-400">
            by {author.username}
          </p>
          <div className="mt-2 flex flex-wrap justify-between gap-1">
            <div className="flex gap-2">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {genre?.name}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {subGenre?.name}
              </span>
            </div>
            <div className=" flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaHeart className="h-4 w-4 text-red-500" />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {_count.Likes} Likes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecommendationCard;
