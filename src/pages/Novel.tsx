import GetNovelDetails from "@/Services/novel/getNovelDetailsById";
import ChapterList from "@/components/Novel/ChapterList";
import NovelDetails from "@/components/Novel/NovelDetails";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

function Novel() {
  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams, "urlParams");

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data, "id");

  const formattedDate = format(data?.createdAt, "EEE MMM-dd yyyy");

  // Use the decoded user name
  return (
    <div className="bg-background">
      <NovelDetails
        id={data?.id ?? ""}
        title={data?.title ?? ""}
        description={data?.description ?? ""}
        author={{ username: data?.author?.username ?? "" }}
        genre={{ name: data?.genre?.name ?? "" }}
        subGenre={{
          name: data?.subGenre?.name ?? "",
        }}
        series={{
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
      />
      <ChapterList NovelId={data?.id ?? ""} />
    </div>
  );
}
export default Novel;
