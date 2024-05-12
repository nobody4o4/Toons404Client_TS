import Seriescard from "@/components/SeriesCard";
import GetSeriesCard from "@/Services/Series/seriesCard.services";
import { SeriesCard } from "@/types";
import Loading from "./Loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function SeriesHome() {
  const { series, loading } = GetSeriesCard();
  //   const [hover, setHover] = useState<number | null>(null);

  if (loading) {
    return <Loading />; //  render a loading indicator while fetching data
  }

  return (
    <div>
      <Card className="h-screen">
        <CardHeader>
          <CardTitle>
            <h1 className="font-blod m-10 text-4xl">Series</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className=" mx-auto grid max-w-[1100px] grid-cols-2 gap-x-10 gap-y-4 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-10 lg:px-0">
            {Array.isArray(series) &&
              series?.map((book: SeriesCard, index: number) => (
                <Seriescard
                  id={book.id}
                  title={book.title}
                  coverImage={book.coverImage}
                  key={index}
                  _count={book._count}
                  Likes={book.Likes}
                />
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default SeriesHome;
