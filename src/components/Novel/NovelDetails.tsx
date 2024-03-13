import { novelPageDetails } from "@/types";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

// GenreBadge Component for displaying genres
const GenreBadge = ({ genre }: { genre: string }) => (
  <div className="aspect-[2.53] justify-center rounded-md bg-black px-1 py-1.5">
    {genre}
  </div>
);

// Main Component
const NovelDetails = (novel: novelPageDetails) => {
  console.log(novel, "novel");

  return (
    <div className="flex bg-primary p-20">
      <div className="mx-48 flex h-52 w-full gap-5 rounded-md  bg-white p-4 max-md:mt-10 max-md:max-w-full max-md:flex-col max-md:gap-0 max-md:pr-5">
        <div className="flex h-[240px] w-[200px] flex-col rounded-sm max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={novel.coverImage}
            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6c09bf1d7cda3f81f5f9b9cfc9f17dd89312a6a87f60653470248bad1d0f952?apiKey=3969ba43007a4a76b36a3bcb3912a1e3&"
            alt="Billie Eilish"
            className="h-[900px] w-[200px] max-w-full grow origin-bottom -translate-y-16 rounded-sm object-cover max-md:mt-0"
          />
        </div>
        <div className="ml-5 flex w-full flex-col max-md:ml-0 max-md:w-full">
          <div className="my-auto flex flex-col self-stretch text-black max-md:mt-10 max-md:max-w-full">
            <h3 className="text-2xl max-md:max-w-full">{novel.title}</h3>
            <p className="mt-2 text-sm max-md:max-w-full">
              {/* When successful realtor Adele is hand-picked to represent
              mysterious mafia don Milo, she must decide how far she's willing
              to go to protect her heart and her career when she finds herself
              falling deeper into his dangerous world. Season 1 of A Dangerous
              Bargain *** Adele Buchanan's goal has always been to become a top
              New York realtor. So when a bold deal catches the attention of
              merciless Italian mafia don Milo DeLuca and he offers her a job as
              his agent, it feels like the chance of a lifetime. */}
              {novel.description}
            </p>
            <div className="mt-4 flex w-full justify-between gap-5 whitespace-nowrap text-white max-md:max-w-full max-md:flex-wrap">
              <div className="flex gap-2.5 self-start text-xs">
                <GenreBadge genre={novel.genre.name} />
                {novel.subGenre.name && (
                  <GenreBadge genre={novel.subGenre.name} />
                )}
              </div>
              <Link to="/" className="rounded-3xl">
                <Button className="justify-center rounded-3xl bg-primary px-4 text-center text-sm font-medium leading-10">
                  First episode
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelDetails;
