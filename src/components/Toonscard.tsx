import { novelCard } from "@/types";
import { FaHeart } from "react-icons/fa6";
// import cover from "../assets/54.jpg";
import { Link } from "react-router-dom";

function Toonscard({
  id,
  title,
  genre,
  subGenre,
  coverImage,
  series,
}: novelCard) {
  console.log(id, title, genre, "a");
  // const encodedName = encodeURIComponent(title.replace(/\s/g, "_"));
  return (
    <Link to={`novel/${id}`} className="group relative cursor-pointer">
      <div className="aspect-[1/1.3] overflow-hidden ">
        <img
          className="h-full w-full object-cover duration-500 group-hover:scale-125 group-hover:brightness-75"
          src={coverImage}
          alt=""
        />
      </div>
      <div className="absolute top-0 m-1 rounded-full">
        <p className="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
          {series?.title}
        </p>
      </div>
      <div className="mt-4 flex items-start justify-between px-2">
        <div className="">
          <h3 className="text-pretty text-sm sm:text-sm md:text-base ">
            <a href="/a" title="" className="">
              {title}
              <span className="absolute" aria-hidden="true"></span>
            </a>
          </h3>
          <div className="mt-1 flex items-center text-xs text-slate-500 sm:text-sm md:text-base">
            {genre?.name},{subGenre?.name}
          </div>
        </div>

        <div className="flex gap-[2px] text-right">
          <p className="text-xs font-normal sm:text-sm md:text-base">223</p>
          <FaHeart className="pt-1 text-xs font-normal sm:text-sm md:text-xl" />
        </div>
      </div>
    </Link>
  );
}
export default Toonscard;
