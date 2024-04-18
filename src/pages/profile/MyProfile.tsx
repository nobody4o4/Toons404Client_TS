import { AvatarImage, Avatar } from "@/components/ui/avatar";
import ProfileSidebar from "@/components/ProfileSidebar";
import GetCurrentUserProfile from "@/Services/user/getCurrentUserProfile.services";
import Toonscard from "@/components/Toonscard";
import { bookCard } from "@/types";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "../Loading";

export default function MyProfile() {
  const { data, loading, error } = GetCurrentUserProfile();
  const book = data?.books;
  console.log(data, "data");

  if (loading) return <Loading />;
  console.log(error, "error");

  return (
    <div key="1" className="min-h-[100vh] bg-background p-8 text-text">
      <div className="gap- grid grid-cols-4">
        <ProfileSidebar />
        <div className="col-span-3 ml-5 space-y-8">
          <Card className="flex items-center space-x-4 p-5">
            <Avatar className="h-32 w-32">
              <AvatarImage
                alt="Profile picture"
                src={data?.avatar}
                className="object-cover"
              />
            </Avatar>
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold">
                {data?.firstName} {data?.lastName}
              </h1>
              <p className="text-gray-500">@{data?.username}</p>
              <div className="flex space-x-8">
                <span>0 followers</span>
                <span>0 following</span>
              </div>
              <p>{data?.bio}</p>
            </div>
          </Card>
          <Card>
            <CardTitle className=" p-5 pl-10  text-2xl font-semibold">
              Books
            </CardTitle>
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
          </Card>
        </div>
      </div>
    </div>
  );
}
