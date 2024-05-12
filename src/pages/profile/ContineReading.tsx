import ProfileSidebar from "@/components/ProfileSidebar";
import Toonscard from "@/components/Toonscard";

import { bookCard } from "@/types";
import Loading from "../Loading";
import MyHistory from "@/Services/History/getMyHistory.services";
import { Card } from "@/components/ui/card";

function ContinueReading() {
  const { data, loading, error } = MyHistory();

  console.log(data, "data");
  if (loading) return <Loading />;
  console.log(error, "error");
  return (
    <div key="1" className="min-h-[100vh] bg-background p-8 text-text">
      <div className="grid grid-cols-4 gap-8">
        <ProfileSidebar />
        <Card className="col-span-3 space-y-8 p-5">
          <h2 className="mb-4 text-2xl font-semibold">Your History</h2>
          <div className=" grid grid-cols-2 gap-x-10 gap-y-4 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-10 lg:grid-cols-4 lg:gap-x-10 lg:px-0">
            {data?.length === 0 && (
              <div className="col-span-4 flex items-center justify-center">
                <p className="text-2xl text-text dark:text-gray-400">
                  No History Found
                </p>
              </div>
            )}
            {Array.isArray(data) &&
              data?.map((item: bookCard, index: number) => (
                <Toonscard {...item} key={index} />
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
export default ContinueReading;
