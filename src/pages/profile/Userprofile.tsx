import { AvatarImage, Avatar } from "@/components/ui/avatar";
import Toonscard from "@/components/Toonscard";
import { bookCard } from "@/types";
import GetUserProfile from "@/Services/user/geUserProfile.services";
import { useNavigate, useParams } from "react-router-dom";
import { getUserData } from "@/utils/authStorage";
import { Button } from "@/components/ui/button";
import {
  followUrl,
  unfollowUrl,
} from "@/Services/Follow/endpoints.follow.services";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Card, CardTitle } from "@/components/ui/card";
import Loading from "../Loading";

export default function UserProfile() {
  const { username } = useParams();
  const navigate = useNavigate();
  if (!username) {
    navigate(-1);
  }
  const currentuser = getUserData();

  if (username == currentuser.username) {
    navigate("/my-profile");
  }

  const { data, loading, error } = GetUserProfile(username ?? "");
  const book = data?.books;
  const following = data?._count.Followers;
  const follower: number = data?._count.Followings ?? 0;
  console.log(data, "data");

  console.log(error, "error");
  const [hasFollowed, setHasFollowed] = useState<boolean>();
  const [followers, setFollowers] = useState<number>(0);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (data?.isFollowing) {
      setHasFollowed(true);
    }
    if (follower) {
      setFollowers(follower);
    }
  }, [data]);

  const handleAddLike = async () => {
    try {
      setIsFollowing(true);
      setFollowers((prevLikes) => prevLikes + 1);
      await followUrl(data.id);
      setHasFollowed(true);
      setIsFollowing(false);
      toast.success("Successfully followed.", {
        description: "You are now following this user.",
      });
    } catch (error) {
      setIsFollowing(false);
      setFollowers((prevLikes) => prevLikes - 1);
      console.error(error);
      toast.error("An error occurred while following.", {
        description: "Please try again later.",
      });
    }
  };

  const handleRemoveLike = async () => {
    try {
      setIsFollowing(true);
      setFollowers((prevLikes) => prevLikes - 1);
      await unfollowUrl(data.id);
      setHasFollowed(false);
      setIsFollowing(false);
      toast.success("Unfollowed successfully.", {
        description: "You are no longer following this user.",
      });
    } catch (error) {
      setIsFollowing(false);
      setFollowers((prevLikes) => prevLikes + 1);
      console.error(error);
      toast.error("An error occurred while unfollowing.", {
        description: "Please try again later.",
      });
    }
  };

  console.log(
    data?._count.Followers,
    data?._count.Followings,
    "followers , followinggg",
  );

  if (loading) {
    <Loading />;
  }

  return (
    <div key="1" className="mx-20 min-h-[100vh] bg-background p-8 text-text">
      <div className="col-span-3 space-y-8">
        <Card className="w-fill flex items-center space-x-4 p-5 ">
          <Avatar className="h-32 w-32">
            <AvatarImage
              alt="Profile picture"
              src={data?.avatar}
              className="object-cover"
            />
          </Avatar>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-5">
              <h1 className="text-3xl font-bold">
                {data?.firstName} {data?.lastName}
              </h1>
              {hasFollowed ? (
                <Button
                  variant={"outline"}
                  onClick={handleRemoveLike}
                  disabled={isFollowing}
                  className="justify-center rounded-md  px-4 text-center text-sm font-medium leading-10 text-black dark:bg-transparent dark:text-black dark:hover:bg-primary  "
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  onClick={handleAddLike}
                  disabled={isFollowing}
                  className="justify-center rounded-md bg-primary px-4 text-center text-sm font-medium leading-10 dark:bg-primary dark:text-text dark:hover:bg-primary"
                >
                  Follow
                </Button>
              )}
            </div>
            <p className="text-gray-500">@{data?.username}</p>
            <div className="flex space-x-8">
              <span>{followers} followers</span>
              <span>{following} following</span>
            </div>
            <p>{data?.bio}</p>
          </div>
        </Card>
        <Card>
          <CardTitle className=" p-5 pl-10  text-2xl font-semibold">
            Books
          </CardTitle>
          {Array.isArray(book) && book?.length === 0 ? (
            <div className="mb-20 flex w-full items-center ">
              <h1 className="mx-auto text-2xl font-semibold">No books found</h1>
            </div>
          ) : (
            <div className=" mx-auto grid max-w-[1100px] grid-cols-2 gap-x-10 gap-y-4 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-5 lg:grid-cols-4 lg:gap-x-10 lg:px-0">
              {Array.isArray(book) &&
                book?.map((data: bookCard, index: number) => (
                  <Toonscard
                    id={data.id}
                    title={data.title}
                    genre={{ name: data.genre.name }}
                    subGenre={{ name: data.subGenre.name }}
                    series={{ title: data.series?.title }}
                    coverImage={data.coverImage}
                    _count={book._count}
                    Likes={book?.Likes}
                    key={index}
                  />
                ))}
            </div>
          )}
          {/* <div className=" mx-auto grid max-w-[1100px] grid-cols-2 gap-x-10 gap-y-4 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-5 lg:grid-cols-4 lg:gap-x-10 lg:px-0">
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard
                  id={data.id}
                  title={data.title}
                  genre={{ name: data.genre.name }}
                  subGenre={{ name: data.subGenre.name }}
                  series={{ title: data.series?.title }}
                  coverImage={data.coverImage}
                  _count={book._count}
                  Likes={book?.Likes}
                  key={index}
                />
              ))}
          </div> */}
        </Card>
      </div>
    </div>
  );
}
