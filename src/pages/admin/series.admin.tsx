import { Button } from "@/components/ui/button";
import { SeriesDetailsTable } from "@/components/Admin/tables/AllSeriesTable";
import { Link } from "react-router-dom";

function SeriesAdmin() {
  return (
    <div className="flex flex-col gap-y-5">
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
export default SeriesAdmin;
