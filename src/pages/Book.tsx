import GetBookDetails from "@/Services/book/getBookDetailsById";
import ChapterList from "@/components/Book/ChapterList";
import BookDetails from "@/components/Book/BookDetails";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import Logo from "../../public/logo.svg";
import Loading from "./Loading";
import { ComicChapterList } from "@/components/Comic/Chapterlist.comic";

function Book() {
  const { id } = useParams();

  console.log(id);

  // Handle the case where BookTitle is null or undefined
  if (id === null || id === undefined) {
    console.log("No id found in the URL parameter 'title'");
    return null; // or handle the error in an appropriate way
  }

  // console.log(encodedBookTitle, "encodedBookTitle");
  const { data, loading, error } = GetBookDetails(id);

  console.log(data, loading, error, "Data Loadinf Error");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data, "id");

  const formattedDate = format(data?.createdAt, "EEE MMM-dd yyyy");
  const isLiked = data?.Likes?.length > 0 ? true : false;

  // Use the decoded user name
  return (
    <div className="bg-background">
      <BookDetails
        id={data?.id ?? ""}
        title={data?.title ?? ""}
        description={data?.description ?? ""}
        author={{
          username: data?.author?.username ?? "",
          avatar: data?.author?.avatar ?? "",
        }}
        genre={{ name: data?.genre?.name ?? "", id: data?.genre?.id ?? "" }}
        subGenre={{
          id: data?.subGenre?.id ?? "",
          name: data?.subGenre?.name ?? "",
        }}
        series={{
          id: data?.series?.id ?? "",
          title: data?.series?.title ?? "",
          coverImage: data?.series?.coverImage ?? "",
          description: data?.series?.description ?? "",
        }}
        coverImage={data?.coverImage ?? ""}
        chapters={{
          id: data?.chapters?.id ?? "",
          title: data?.chapters?.title ?? "",
          number: data?.chapters?.number ?? 0,
          thumbnail: data?.chapters?.thumbnail ?? "",
          createdAt: data?.chapters?.createdAt ?? "",
        }}
        likes={0}
        createdAt={data?.createdAt ?? new Date()}
        _count={{ Likes: 0 }}
        hasLiked={isLiked}
      />
      {data?.type === "COMIC" ? (
        <ComicChapterList BookId={data?.id ?? ""} />
      ) : (
        <ChapterList BookId={data?.id ?? ""} />
      )}
      {/* <ChapterList BookId={data?.id ?? ""} /> */}
    </div>
  );
}
export default Book;
