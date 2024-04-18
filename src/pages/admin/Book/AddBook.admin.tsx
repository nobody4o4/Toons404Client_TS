import AddBookForm from "@/components/Admin/Book/AddBookForm.admin";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AddBookAdmin() {
  return (
    <div className="px-4">
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link className="text-lg font-semibold" to="/dashboard/admin/book">
          <Button className="text-base" variant={"outline"}>
            {" "}
            <FaArrowLeft className="mr-2 text-lg" /> back to books
          </Button>
        </Link>
      </div>
      <AddBookForm />
    </div>
  );
}
export default AddBookAdmin;
