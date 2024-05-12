import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle } from "./ui/card";
import RecommendationCard from "./RecommendationCard";
import { getBookCardsurl } from "@/Services/book/endPoint.book.services";
import AllBookCard from "@/Services/book/getAllBookCard.services";
import Loading from "@/pages/Loading";

function RecommendationList() {
  const { data, loading, error } = AllBookCard();
  if (loading) return <Loading />;
  if (error) return <p>error : {error}</p>;

  return (
    <Card className=" w-full max-w-md overflow-hidden rounded-lg bg-transparent pb-3 shadow">
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
      </CardHeader>
      <ul className="flex flex-col gap-3  divide-gray-100 px-4 py-2">
        {Array.isArray(data) &&
          data.slice(0, 4).map((book) => <RecommendationCard {...book} />)}
      </ul>
    </Card>
  );
}
export default RecommendationList;
