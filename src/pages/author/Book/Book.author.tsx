import { BookDetailsTable } from "@/components/Author/tables/AllBookTable.author";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function BookAuthor() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-4xl underline underline-offset-8">Books</h1>
      <div className="flex">
        <Link to="add">
          <Button>Add Book</Button>
        </Link>
      </div>

      <div className="w-full">
        <BookDetailsTable />
      </div>
    </div>
  );
}
export default BookAuthor;
