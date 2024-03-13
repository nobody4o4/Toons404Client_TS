import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fragment } from "react";
import Toonscard from "../Toonscard";
import AllNovelCard from "@/Services/novel/getAllNovelCard.services";

function Category() {
  const { data, loading } = AllNovelCard();
  //   const [hover, setHover] = useState<number | null>(null);
  const adata = data;

  if (loading) {
    return <p>Loading...</p>; //  render a loading indicator while fetching data
  }
  return (
    <div className="">
      <Tabs className="" defaultValue="all">
        <div className="flex items-center justify-center overflow-hidden whitespace-nowrap bg-stone-50 px-16 py-2 text-2xl  text-black dark:bg-black max-md:px-5">
          <div className="flex items-center justify-between max-md:max-w-full max-md:flex-wrap ">
            <TabsList className="dark:bg-transparen flex w-full gap-0 bg-transparent p-2 ">
              <TabsTrigger value="all" className="px-8 py-4 text-xl">
                ALL
              </TabsTrigger>
              <TabsTrigger value="comic" className="px-8  py-4 text-xl">
                COMICS
              </TabsTrigger>
              <TabsTrigger value="novel" className="px-8  py-4 text-xl">
                NOVELS
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="all">
          {" "}
          <Fragment>
            <div className="mx-72a mx-auto grid max-w-[1100px] grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-6 lg:px-0">
              {Array.isArray(adata) &&
                adata.map((data: object, index: number) => (
                  <Toonscard
                    id={""}
                    title={""}
                    genre={{ name: "" }}
                    subGenre={{ name: "" }}
                    key={index}
                    {...data} // handleHover={handleHover}
                    // handleLeave={handleLeave}
                  />
                ))}
            </div>
          </Fragment>
        </TabsContent>
        <TabsContent value="comic">
          <Fragment>
            <div className="mx-72a mx-auto grid max-w-[1100px] grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-6 lg:px-0">
              {Array.isArray(adata) &&
                adata.map((data: object, index: number) => (
                  <Toonscard
                    id={""}
                    title={""}
                    genre={{ name: "" }}
                    subGenre={{ name: "" }}
                    key={index}
                    {...data} // handleHover={handleHover}
                    // handleLeave={handleLeave}
                  />
                ))}
            </div>
          </Fragment>
        </TabsContent>
        <TabsContent value="novel">
          <Fragment>
            <div className="mx-72a mx-auto grid max-w-[1100px] grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-6 lg:px-0">
              {Array.isArray(adata) &&
                adata.map((data: object, index: number) => (
                  <Toonscard
                    id={""}
                    title={""}
                    genre={{ name: "" }}
                    subGenre={{ name: "" }}
                    key={index}
                    {...data} // handleHover={handleHover}
                    // handleLeave={handleLeave}
                  />
                ))}
            </div>
          </Fragment>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Category;
