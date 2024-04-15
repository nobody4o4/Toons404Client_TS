import { Fragment } from "react";
import Toonscard from "./Toonscard";

import AllNovelCard from "@/Services/novel/getAllNovelCard.services";
import { novelCard } from "@/types";

function CardGrid() {
  const { data, loading } = AllNovelCard();
  //   const [hover, setHover] = useState<number | null>(null);

  if (loading) {
    return <p>Loading...</p>; //  render a loading indicator while fetching data
  }

  //   const handleHover = (index: number) => {
  //     setHover(index);
  //   };

  //   const handleLeave = () => {
  //     setHover(null);
  //   };

  return (
    <Fragment>
      <div className=" mx-auto grid max-w-[1100px] grid-cols-2 gap-x-10 gap-y-4 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-10 lg:px-0">
        {Array.isArray(data) &&
          data?.map((novel: novelCard, index: number) => (
            <Toonscard
              id={novel.id}
              title={novel.title}
              genre={{ name: novel.genre.name }}
              subGenre={{ name: novel.subGenre.name }}
              series={{ title: novel.series?.title }}
              coverImage={novel.coverImage}
              key={index}
              _count={novel._count}
              Likes={novel.Likes}
            />
          ))}
      </div>
    </Fragment>
  );
}
export default CardGrid;
