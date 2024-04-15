import Seriescard from "@/components/SeriesCard";
import GetSeriesCard from "@/Services/Series/seriesCard.services";
import { SeriesCard } from "@/types";
import Loading from "./Loading";

function SeriesHome() {
  const { series, loading } = GetSeriesCard();
  //   const [hover, setHover] = useState<number | null>(null);

  if (loading) {
    return <Loading />; //  render a loading indicator while fetching data
  }

  return (
    <div>
      <div className=" mx-auto grid max-w-[1100px] grid-cols-2 gap-x-10 gap-y-4 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-10 lg:px-0">
        {Array.isArray(series) &&
          series?.map((novel: SeriesCard, index: number) => (
            <Seriescard
              id={novel.id}
              title={novel.title}
              coverImage={novel.coverImage}
              key={index}
              _count={novel._count}
              Likes={novel.Likes}
            />
          ))}
      </div>
    </div>
  );
}
export default SeriesHome;
