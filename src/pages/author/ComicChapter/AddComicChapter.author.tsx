import AddComicChapterForm from "@/components/Author/Comic/AddComicChapterForm.author";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AddComicChapterAuthor() {
  return (
    <div className="h-screen px-4">
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link className="text-lg font-semibold" to="/dashboard/author/book">
          <Button className="text-base" variant={"outline"}>
            <FaArrowLeft className="mr-2 text-lg" /> back
          </Button>
        </Link>
      </div>
      <AddComicChapterForm />
    </div>
  );
}
export default AddComicChapterAuthor;
