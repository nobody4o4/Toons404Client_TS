import SeriesDetails from "@/components/Series/SeriesDetails";
import Toonscard from "@/components/Toonscard";
import GetSeriesDetails from "@/Services/Series/getSeriesDetails.services";
import { bookCard } from "@/types";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function Series() {
  const { id } = useParams();

  console.log(id);

  // Handle the case where BookTitle is null or undefined
  if (id === null || id === undefined) {
    console.log("No id found in the URL parameter 'title'");
    return null; // or handle the error in an appropriate way
  }

  const { data, loading, error } = GetSeriesDetails(id);

  const book = data?.books;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const isLiked = data?.Likes.length > 0 ? true : false;
  console.log(data, "id");
  return (
    <div className="flex flex-col md:flex-row">
      <div className=" bottom-0 left-0  top-20 bg-primary md:sticky md:w-1/3">
        <SeriesDetails
          id={data?.id ?? ""}
          title={data?.title ?? ""}
          description={data?.description ?? ""}
          coverImage={data?.coverImage ?? ""}
          _count={data?._count ?? { Likes: 0 }}
          hasLiked={isLiked}
          author={{
            avatar: data?.author?.avatar ?? "",
            username: data?.author?.username ?? "",
          }}
          createdAt={data?.createdAt ?? new Date()}
        />
        {/* <img
          src={data?.coverImage}
          className="aspect-[13/16] h-[60vh] object-cover "
          alt=""
        />
        {data?.title}
        <p>{data?.description}</p>
        <p></p>
        <p>{data?._count.Likes}</p>
        likes subscribe */}
      </div>
      <div className=" md:w-2/3">
        <div key="1" className=" bg-background p-5 text-text">
          <div className=" grid grid-cols-2 gap-x-5 gap-y-4 px-2 pb-10 sm:grid-cols-3 sm:px-8 lg:grid-cols-4 lg:gap-x-5 lg:px-0">
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  key={index}
                  _count={data._count}
                  Likes={data.Likes}
                />
              ))}
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  key={index}
                  _count={data._count}
                  Likes={data.Likes}
                />
              ))}
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  key={index}
                  _count={data._count}
                  Likes={data.Likes}
                />
              ))}
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  key={index}
                  _count={data._count}
                  Likes={data.Likes}
                />
              ))}
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  key={index}
                  _count={data._count}
                  Likes={data.Likes}
                />
              ))}
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  key={index}
                  _count={data._count}
                  Likes={data.Likes}
                />
              ))}
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  key={index}
                  _count={data._count}
                  Likes={data.Likes}
                />
              ))}
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  key={index}
                  _count={data._count}
                  Likes={data.Likes}
                />
              ))}
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  key={index}
                  _count={data._count}
                  Likes={data.Likes}
                />
              ))}
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  key={index}
                  _count={data._count}
                  Likes={data.Likes}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Series;
