import { bookCard } from "@/types";
import { FaHeart } from "react-icons/fa6";
// import cover from "../assets/54.jpg";
import { Link } from "react-router-dom";

function Toonscard({
  id,
  title,
  genre,
  subGenre,
  coverImage,
  type,
  series,
  _count,
  author,
  isPremium,
}: bookCard) {
  console.log(
    id,
    title,
    genre,
    _count?.Likes,
    series,
    coverImage,
    type,
    subGenre,
    author,
    isPremium,
    "a",
  );
  // const encodedName = encodeURIComponent(title.replace(/\s/g, "_"));
  return (
    <Link
      // to={type == "Comic" ? `/book/${id}` : `/comic/${id}`}
      to={`/book/${id}`}
      className="group relative cursor-pointer"
      preventScrollReset
    >
      {/* <div className="aspect-[1/1.3] overflow-hidden ">
        <img
          className="h-full w-full object-cover duration-500 group-hover:scale-125 group-hover:brightness-75"
          src={coverImage}
          alt=""
        />
      </div>

      <div className="absolute top-0 m-1 rounded-full">
        <p className="rounded-full bg-primary p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
          {type}
        </p>
      </div>
      <div className="mt-4 flex items-start justify-between px-2">
        <div className="">
          <h3 className="text-pretty text-sm sm:text-sm md:text-base  ">
            <a href="/a" title="" className="line-clamp-1 ">
              {title}
            </a>
          </h3>
          <div className="mt-1 flex items-center text-xs text-slate-500 sm:text-sm md:text-base">
            {genre?.name},{subGenre?.name}
          </div>
        </div>

        <div className="flex gap-[2px] text-right text-primary">
          <p className="text-xs font-normal sm:text-sm md:text-base">
            {_count?.Likes}
          </p>
          <FaHeart className="pt-1 text-xs font-normal sm:text-sm md:text-xl" />
        </div>
      </div> */}
      <div className="group relative overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img
          alt="Comic Cover"
          className="h-[300px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          height={450}
          src={coverImage}
          style={{
            aspectRatio: "300/450",
            objectFit: "cover",
          }}
          width={300}
        />
        <div className="absolute left-2 top-2 rounded-full">
          <p className="rounded-full bg-primary p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
            {type}
          </p>
        </div>
        {isPremium && (
          <span className="absolute right-0 top-0 w-[120px]  translate-x-7 translate-y-4 rotate-45 border border-white bg-yellow-500 py-1 text-center text-sm font-medium text-white dark:text-black">
            Premium
          </span>
        )}
        {/* <span className="absolute right-0 top-0 w-[120px]  translate-x-7 translate-y-4 rotate-45 border border-white bg-yellow-500 py-1 text-center text-sm font-medium text-white dark:text-black">
          {isPremium}
        </span> */}
        <div className=" bg-white p-4 dark:bg-gray-950">
          <h3 className=" line-clamp-1 font-bold">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {author?.username}
          </p>
          <div className="mt-2 flex items-center justify-between space-x-2">
            <div className=" flex items-center space-x-2">
              {genre && (
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {genre?.name}
                </span>
              )}
              {subGenre && (
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {subGenre?.name}
                </span>
              )}
            </div>
            <div className="flex gap-[2px] text-right text-primary">
              <p className="text-xs font-normal sm:text-sm md:text-base">
                {_count?.Likes}
              </p>
              <FaHeart className="pt-1 text-xs font-normal sm:text-sm md:text-xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Toonscard;
