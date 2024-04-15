import { SeriesCard } from "@/types";
import { FaHeart } from "react-icons/fa6";
// import cover from "../assets/54.jpg";
import { Link } from "react-router-dom";

function Seriescard({ id, title, coverImage, _count }: SeriesCard) {
  console.log(id, title, _count?.Likes, coverImage, "a");
  // const encodedName = encodeURIComponent(title.replace(/\s/g, "_"));
  return (
    <Link
      to={`/series/${id}`}
      className="group relative cursor-pointer"
      preventScrollReset
    >
      <div className="aspect-[1/1.3] overflow-hidden ">
        <img
          className="h-full w-full object-cover duration-500 group-hover:scale-125 group-hover:brightness-75"
          src={coverImage}
          alt=""
        />
      </div>
      <div className="absolute top-0 m-1 rounded-full">
        <p className="rounded-full bg-primary p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
          Series
        </p>
      </div>
      <div className="mt-4 flex items-start justify-between px-2">
        <div className="">
          <h3 className="text-pretty text-sm sm:text-sm md:text-base  ">
            <a href="/a" title="" className="line-clamp-1 ">
              {title}
              <span className="absolute" aria-hidden="true"></span>
            </a>
          </h3>
        </div>

        <div className="flex gap-[2px] text-right text-primary">
          <p className="text-xs font-normal sm:text-sm md:text-base">
            {_count?.Likes}
          </p>
          <FaHeart className="pt-1 text-xs font-normal sm:text-sm md:text-xl" />
        </div>
      </div>
    </Link>
  );
}
export default Seriescard;
