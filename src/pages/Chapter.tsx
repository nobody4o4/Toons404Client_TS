import GetChapterByNumber from "@/Services/Chapter/getChapterByNumber";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/groaUgDqNHC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";

// import { Textarea } from "@/components/ui/textarea";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import TextareaForm from "@/components/comment";

function Chapter() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const number = params.number;
  console.log(number);
  const parsedNumber: number = Number(number);
  const novelId = params.id || "";
  console.log(novelId, parsedNumber, "novelId, parsedNumber");
  const { data, loading, error } = GetChapterByNumber(novelId, parsedNumber);
  if (loading) return <p>Loading...</p>;
  if (error) return navigate(-1);
  console.log(data);
  const formattedDate = format(data?.createdAt, "EEE MMM-dd yyyy");

  // if (
  //   !data?.id ||
  //   !data?.title ||
  //   data?.number ||
  //   !data?.content ||
  //   !data?.thumbnail ||
  //   !data?.createdAt
  // ) {
  //   return <p>Data is incomplete</p>;
  // }
  return (
    <div>
      {/* <ReadingBlock {...data} /> */}

      <div className="w-full space-y-4 py-6 md:py-12">
        <div className="container grid gap-4 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {data?.novel.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                by {data?.novel?.author?.username}
              </p>
            </div>
            {/* <div className="hidden md:block">
              <img
                alt="Cover Image"
                className="rounded-lg object-cover"
                height={200}
                src={data?.thumbnail}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div> */}
          </div>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">
                {data?.novel?.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Published on {formattedDate}
              </p>
            </div>
            <div className="prose lg:prose-lg xl:prose-xl dark:prose-dark space-y-4">
              <p>{data?.content}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-4">
            <div className="flex items-center justify-between space-x-2">
              <Button className="h-10 items-center" size="lg" variant="outline">
                <FaArrowLeft className="mr-1.5 h-4 w-4" />
                Previous Chapter
              </Button>
              <Button className="h-10 items-center" size="lg" variant="outline">
                Next Chapter
                <FaArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </div>
          <TextareaForm />
        </div>
      </div>
    </div>
  );
}
export default Chapter;
