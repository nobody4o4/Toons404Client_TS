import EditSeriesForm from "@/components/Author/Series/EditSeriesForm.author";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

function EditSeriesAuthor() {
  //   const params = useParams();
  //   const seriesId = params.id;
  return (
    <div className="h-screen px-4">
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link className="text-lg font-semibold" to={`/dashboard/author/series`}>
          <Button className="text-base" variant={"outline"}>
            {" "}
            <FaArrowLeft className="mr-2 text-lg" /> back
          </Button>
        </Link>
      </div>
      <EditSeriesForm />
    </div>
  );
}
export default EditSeriesAuthor;
