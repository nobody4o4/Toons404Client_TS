import GetNovelDetails from "@/Services/novel/getNovelDetailsById";
import ChapterList from "@/components/Novel/ChapterList";
import NovelDetails from "@/components/Novel/NovelDetails";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import Logo from "../../public/logo.svg";
import Loading from "./Loading";

function Novel() {
  const { id } = useParams();

  console.log(id);

  // Handle the case where NovelTitle is null or undefined
  if (id === null || id === undefined) {
    console.log("No id found in the URL parameter 'title'");
    return null; // or handle the error in an appropriate way
  }

  // console.log(encodedNovelTitle, "encodedNovelTitle");
  const { data, loading, error } = GetNovelDetails(id);

  console.log(data, loading, error, "Data Loadinf Error");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data, "id");

  const formattedDate = format(data?.createdAt, "EEE MMM-dd yyyy");
  const isLiked = data?.Likes.length > 0 ? true : false;

  // Use the decoded user name
  return (
    <div className="bg-background">
      <NovelDetails
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
      <ChapterList NovelId={data?.id ?? ""} />
    </div>
  );
}
export default Novel;
