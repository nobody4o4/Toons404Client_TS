import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle } from "./ui/card";
import RecommendationCard from "./RecommendationCard";

function RecommendationList() {
  return (
    <Card className=" w-full max-w-md overflow-hidden rounded-lg bg-transparent pb-3 shadow">
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
      </CardHeader>
      <ul className="flex flex-col gap-3  divide-gray-100 px-4 py-2">
        <RecommendationCard
          id="1"
          title="The Midnight Library"
          genre={{ name: "Fiction" }}
          subGenre={{ name: "Fantasy" }}
          coverImage="https://source.unsplash.com/300x300/?book"
          type="Novel"
          series={{ title: "The Midnight Library" }}
          _count={{ Likes: 100 }}
          author={{ username: "Matt Haig" }}
          isPremium={false}
        />
        <RecommendationCard
          id="1"
          title="The Midnight Library"
          genre={{ name: "Fiction" }}
          subGenre={{ name: "Fantasy" }}
          coverImage="https://source.unsplash.com/300x300/?book"
          type="Novel"
          series={{ title: "The Midnight Library" }}
          _count={{ Likes: 100 }}
          author={{ username: "Matt Haig" }}
          isPremium={false}
        />
        <RecommendationCard
          id="1"
          title="The Midnight Library"
          genre={{ name: "Fiction" }}
          subGenre={{ name: "Fantasy" }}
          coverImage="https://source.unsplash.com/300x300/?book"
          type="Novel"
          series={{ title: "The Midnight Library" }}
          _count={{ Likes: 100 }}
          author={{ username: "Matt Haig" }}
          isPremium={false}
        />
      </ul>
    </Card>
  );
}
export default RecommendationList;
