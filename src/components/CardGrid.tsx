import { Fragment } from "react";
import Toonscard from "./Toonscard";

import AllNovelCard from "@/Services/novel/getAllNovelCard.services";
import { novelCard } from "@/types";

function CardGrid() {
  const { data, loading } = AllNovelCard();
  //   const [hover, setHover] = useState<number | null>(null);
  const adata = data;

  if (loading) {
    return <p>Loading...</p>; //  render a loading indicator while fetching data
  }

  //   const handleHover = (index: number) => {
  //     setHover(index);
  //   };

  //   const handleLeave = () => {
  //     setHover(null);
  //   };

  console.log(adata?.coverImage, "ss");
  console.log(adata, "ss");

  return (
    <Fragment>
      <div className="mx-72a mx-auto grid max-w-[1100px] grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-6 lg:px-0">
        {Array.isArray(adata) &&
          adata?.map((data: novelCard, index: number) => (
            <Toonscard
              id={data.id}
              title={data.title}
              genre={{ name: data.genre.name }}
              subGenre={{ name: data.subGenre.name }}
              series={{ title: data.series?.title }}
              coverImage={data.coverImage}
              key={index}
              // handleHover={handleHover}
              // handleLeave={handleLeave}
            />
          ))}
      </div>
    </Fragment>
  );
}
export default CardGrid;
