import { AvatarImage, Avatar } from "@/components/ui/avatar";
import ProfileSidebar from "@/components/ProfileSidebar";
import GetCurrentUserProfile from "@/Services/user/getCurrentUserProfile.services";
import Toonscard from "@/components/Toonscard";
import { novelCard } from "@/types";

export default function UserProfile() {
  const { data, loading, error } = GetCurrentUserProfile();
  const novel = data?.novels;
  console.log(data, "data");
  console.log(loading, "loading");
  console.log(error, "error");

  return (
    <div key="1" className="min-h-[100vh] bg-white p-8">
      <div className="grid grid-cols-4 gap-8">
        <ProfileSidebar />
        <div className="col-span-3 space-y-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-32 w-32">
              <AvatarImage alt="Profile picture" src={data?.avatar} />
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
          </div>
          <div>
            <h2 className="mb-4 mt-10 text-2xl font-semibold">Novels</h2>
            <div className=" mx-auto grid max-w-[1100px] grid-cols-2 gap-x-10 gap-y-4 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-10 lg:grid-cols-4 lg:gap-x-10 lg:px-0">
              {Array.isArray(novel) &&
                novel?.map((data: novelCard, index: number) => (
                  <Toonscard
                    id={data.id}
                    title={data.title}
                    genre={{ name: data.genre.name }}
                    subGenre={{ name: data.subGenre.name }}
                    series={{ title: data.series?.title }}
                    coverImage={data.coverImage}
                    key={index}
                    // handleHover={handleHover}
                    // handleLeave={handleLeave}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
