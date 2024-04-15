import { GenreDetailsTable } from "@/components/Admin/tables/AllGenreTable";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function GenreAdmin() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-4xl underline underline-offset-8">Genre</h1>
      <div className="flex">
        <Link to="add">
          <Button>Add Genre</Button>
        </Link>
      </div>

      <div className="w-full">
        <GenreDetailsTable />
      </div>
    </div>
  );
}
export default GenreAdmin;
