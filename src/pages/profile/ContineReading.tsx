import ProfileSidebar from "@/components/ProfileSidebar";
import Toonscard from "@/components/Toonscard";

import { bookCard } from "@/types";
import Loading from "../Loading";
import MyHistory from "@/Services/History/getMyHistory.services";

function ContinueReading() {
  const { data, loading, error } = MyHistory();
  const book = data;
  console.log(data, "data");
  if (loading) return <Loading />;
  console.log(error, "error");
  return (
    <div key="1" className="min-h-[100vh] bg-background p-8 text-text">
      <div className="grid grid-cols-4 gap-8">
        <ProfileSidebar />
        <div className="col-span-3 space-y-8">
          <h2 className="mb-4 text-2xl font-semibold">Your History</h2>
          <div className=" grid grid-cols-2 gap-x-10 gap-y-4 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-10 lg:grid-cols-4 lg:gap-x-10 lg:px-0">
            {Array.isArray(book) &&
              book?.map((data: bookCard, index: number) => (
                <Toonscard {...data} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContinueReading;
