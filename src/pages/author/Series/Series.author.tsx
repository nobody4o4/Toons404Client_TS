import { Button } from "@/components/ui/button";
import { SeriesDetailsTable } from "@/components/Author/tables/AllSeriesTable.author";
import { Link } from "react-router-dom";

function SeriesAuthor() {
  return (
    <div className="flex flex-col gap-y-5 bg-background">
      <h1 className="text-4xl underline underline-offset-8">Series</h1>
      <div className="flex">
        <Link to={`add`}>
          <Button>Add Series</Button>
        </Link>
      </div>

      <div className="w-full">
        <SeriesDetailsTable />
      </div>
    </div>
  );
}
export default SeriesAuthor;
