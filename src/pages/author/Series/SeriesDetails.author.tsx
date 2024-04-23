import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SeriesDetailsAuthor() {
  const data = {
    title: "The Shattered Kingdom",
    coverImage: "/placeholder.svg",
    genre: { name: "Fantasy" },
    subGenre: { name: "Epic" },
    likes: 1234,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return (
    <div>
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link className="text-lg font-semibold" to="/dashboard/author/book">
          <Button className="text-base" variant={"outline"}>
            {" "}
            <FaArrowLeft className="mr-2 text-lg" /> back to books
          </Button>
        </Link>
        <Link
          className="text-lg font-semibold"
          to={`/dashboard/author/edit/book/`}
        >
          <Button className="text-base">Edit</Button>
        </Link>
      </div>
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:gap-8">
        <Card className="col-span-2">
          <CardContent className="space-y-4">
            <div className="flex">
              <figure className="flex items-center justify-center p-8 pr-2">
                <img
                  alt={data?.title + " cover"}
                  className="aspect-[1/1.3] h-[370px] rounded-lg object-cover"
                  src={data?.coverImage}
                />
              </figure>
              <div className="items-centera flex p-8">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h2 className="text-xl font-bold leading-none">
                      {data?.title}
                    </h2>
                    <div className="space-y-3">
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        Created at :
                      </p>
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        Updated at :
                      </p>
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        Likes : {data?.likes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="col-span-2 grid items-start gap-6 space-y-4 sm:grid-cols-2 lg:gap-8">
          <Card>
            <CardContent className="space-y-4">
              <div className="w-full space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Books</h2>
                <div className="grid gap-2">
                  <div className="flex items-start space-x-4">
                    <img
                      alt="Cover image"
                      className="aspect-thumb overflow-hidden rounded-lg object-cover"
                      height={150}
                      src="/placeholder.svg"
                      width={100}
                    />
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold leading-none">
                        The Shattered Kingdom
                      </h3>
                      <p className="text-sm leading-snug text-gray-500 dark:text-gray-400">
                        After the fall of the empire, a young hero rises to
                        unite the warring factions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img
                      alt="Cover image"
                      className="aspect-thumb overflow-hidden rounded-lg object-cover"
                      height={150}
                      src="/placeholder.svg"
                      width={100}
                    />
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold leading-none">
                        The Dark Portal
                      </h3>
                      <p className="text-sm leading-snug text-gray-500 dark:text-gray-400">
                        A group of adventurers embarks on a quest to close the
                        mysterious Dark Portal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img
                      alt="Cover image"
                      className="aspect-thumb overflow-hidden rounded-lg object-cover"
                      height={150}
                      src="/placeholder.svg"
                      width={100}
                    />
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold leading-none">
                        The Emerald Dream
                      </h3>
                      <p className="text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Heroes journey into the ethereal Emerald Dream to save
                        Azeroth from corruption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <div className="w-full space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Comics</h2>
                <div className="grid gap-2">
                  <div className="flex items-start space-x-4">
                    <img
                      alt="Cover image"
                      className="aspect-thumb overflow-hidden rounded-lg object-cover"
                      height={150}
                      src="/placeholder.svg"
                      width={100}
                    />
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold leading-none">
                        The Horde Chronicles
                      </h3>
                      <p className="text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Thrilling tales of the Horde's struggles and triumphs
                        across Azeroth.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img
                      alt="Cover image"
                      className="aspect-thumb overflow-hidden rounded-lg object-cover"
                      height={150}
                      src="/placeholder.svg"
                      width={100}
                    />
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold leading-none">
                        Legends of the Alliance
                      </h3>
                      <p className="text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Heroic stories of the Alliance's champions and their
                        battles against evil.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img
                      alt="Cover image"
                      className="aspect-thumb overflow-hidden rounded-lg object-cover"
                      height={150}
                      src="/placeholder.svg"
                      width={100}
                    />
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold leading-none">
                        The Shadowlands Saga
                      </h3>
                      <p className="text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Mysterious tales of the enigmatic Shadowlands and the
                        adventurers who dare to explore its realms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default SeriesDetailsAuthor;
