/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V6EIXVg1eO6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GetNovelDetails from "@/Services/novel/getNovelDetailsById";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { FaArrowLeft } from "react-icons/fa6";
import { chapterCard } from "@/types";
import ChapterCardAdmin from "@/components/Admin/chapterCard.admin";

export default function AdminNovelDetails() {
  const params = useParams();
  const novelId = params.id || "";
  const { data, loading, error } = GetNovelDetails(novelId);
  if (loading) return <div>...loading</div>;

  if (error) return <div>Error: {error}</div>;

  console.log(data, "data");
  const formattedDate = format(data?.createdAt, " MMM-dd, yyyy");

  return (
    <>
      <div className="px-4">
        <div className="flex  items-center justify-between space-x-4 pb-8">
          <Link className="text-lg font-semibold" to={".."}>
            <Button className="text-base" variant={"outline"}>
              {" "}
              <FaArrowLeft className="mr-2 text-lg" /> back to novels
            </Button>
          </Link>
          <Link
            className="text-lg font-semibold"
            to="/dashboard/admin/edit/novel/:id"
          >
            <Button className="text-base">Edit</Button>
          </Link>
        </div>
        <div className=" grid gap-x-4  lg:grid-cols-2">
          <Card>
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
                        {data?.genre?.name}, {data?.subGenre?.name}
                      </p>
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        Created at :{formattedDate}
                      </p>
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        Updated at :{formattedDate}
                      </p>
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        Likes : {data?.likes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className=" p-10 pl-0 ">
              {/* <CardHeader className="font-bold">Author details</CardHeader> */}
              <div className="flex items-start gap-4 pr-3">
                <div className="mx-5 flex items-center justify-center">
                  <img
                    alt="Author"
                    className="w-28 rounded-full"
                    height="100"
                    src={data?.coverImage}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <h3 className="text-xl font-bold leading-none">
                    {data?.author?.username}
                  </h3>
                  <div className="prose prose-sm">
                    <p>
                      Brandon Sanderson is an American author of epic eries.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className=" p-10 pl-0 ">
              {/* <CardHeader className="font-bold">Author details</CardHeader> */}
              <div className="flex items-start gap-4 pr-3">
                <div className="mx-5 flex items-center justify-center">
                  <img
                    alt="Author"
                    className="w-28 rounded-lg"
                    height="100"
                    src={data?.coverImage}
                    style={{
                      aspectRatio: "1/1.3",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <h3 className="text-xl font-bold leading-none">
                    {data?.series?.title}
                  </h3>
                  <div className="prose prose-sm">
                    <p>{data?.series?.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <Card className="mt-4">
          <CardHeader className="text-lg font-bold">Description</CardHeader>
          <CardContent>
            <div>
              <p>{data?.description}</p>
            </div>
          </CardContent>
        </Card>
        {/* <Card className="p-l mt-4 p-5 pl-0  pt-0">
              <CardHeader className="font-bold">Author details</CardHeader>
              <div className="flex items-start gap-4 pr-3">
                <div className="mx-5 flex items-center justify-center">
                  <img
                    alt="Author"
                    className="rounded-full"
                    height="100"
                    src={data?.coverImage}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <h3 className="text-xl font-bold leading-none">
                    {data?.author?.username}
                  </h3>
                  <div className="prose prose-sm">
                    <p>
                      Brandon Sanderson is an American author of epic fantasy
                      and science fiction. He is best known for his Mistborn
                      series, the Stormlight Archive, and for finishing Robert
                      Jordan's Wheel of Time series.
                    </p>
                  </div>
                </div>
              </div>
            </Card> */}
        <Card className="mt-4">
          <CardHeader className=" p-4">
            <div className="flex justify-between">
              <h2 className="font-lg text-lg font-semibold">Chapters</h2>
              <Button className="w-fit">Edit Chapters</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {Array.isArray(data?.chapters) &&
              data?.chapters.map((chapters: chapterCard, index: number) => (
                <>
                  <ChapterCardAdmin
                    key={index}
                    // id={chapters.id}
                    title={chapters.title}
                    // likes={chapters.likes}
                    number={chapters.number}
                    coverImage={chapters.thumbnail}
                    createdAt={chapters.createdAt}
                  />
                </>
              ))}

            <div className="divide-y">
              <div className="flex items-center space-x-4 p-4">
                <div className="flex items-center space-x-2">
                  <BookOpenIcon className="h-5 w-5" />
                  <span className="text-sm font-medium leading-none">
                    The Final Empire
                  </span>
                </div>
                <Button size="sm">Read</Button>
              </div>
              <div className="flex items-center space-x-4 p-4">
                <div className="flex items-center space-x-2">
                  <BookOpenIcon className="h-5 w-5" />
                  <span className="text-sm font-medium leading-none">
                    The Well of Ascension
                  </span>
                </div>
                <Button size="sm">Read</Button>
              </div>
              <div className="flex items-center space-x-4 p-4">
                <div className="flex items-center space-x-2">
                  <BookOpenIcon className="h-5 w-5" />
                  <span className="text-sm font-medium leading-none">
                    The Hero of Ages
                  </span>
                </div>
                <Button size="sm">Read</Button>
              </div>
              <div className="flex items-center space-x-4 p-4">
                <div className="flex items-center space-x-2">
                  <BookOpenIcon className="h-5 w-5" />
                  <span className="text-sm font-medium leading-none">
                    The Alloy of Law
                  </span>
                </div>
                <Button size="sm">Read</Button>
              </div>
              <div className="flex items-center space-x-4 p-4">
                <div className="flex items-center space-x-2">
                  <BookOpenIcon className="h-5 w-5" />
                  <span className="text-sm font-medium leading-none">
                    Shadows of Self
                  </span>
                </div>
                <Button size="sm">Read</Button>
              </div>
              <div className="flex items-center space-x-4 p-4">
                <div className="flex items-center space-x-2">
                  <BookOpenIcon className="h-5 w-5" />
                  <span className="text-sm font-medium leading-none">
                    The Bands of Mourning
                  </span>
                </div>
                <Button size="sm">Read</Button>
              </div>
              <div className="flex items-center space-x-4 p-4">
                <div className="flex items-center space-x-2">
                  <BookOpenIcon className="h-5 w-5" />
                  <span className="text-sm font-medium leading-none">
                    The Lost Metal
                  </span>
                </div>
                <Button size="sm">Read</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
