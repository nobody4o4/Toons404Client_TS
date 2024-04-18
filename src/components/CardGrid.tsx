import { Fragment } from "react";
import Toonscard from "./Toonscard";
import { bookCard } from "@/types";
import AllBookCard from "@/Services/book/getAllBookCard.services";

function CardGrid() {
  const { data, loading } = AllBookCard();
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
          data?.map((book: bookCard, index: number) => (
            <Toonscard
              id={book.id}
              title={book.title}
              genre={{ name: book.genre.name }}
              subGenre={{ name: book.subGenre.name }}
              series={{ title: book.series?.title }}
              coverImage={book.coverImage}
              key={index}
              _count={book._count}
              Likes={book.Likes}
            />
          ))}
      </div>
    </Fragment>
  );
}
export default CardGrid;
