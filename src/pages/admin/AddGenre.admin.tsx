import AddGenreForm from "@/components/Admin/AddGenreForm.admin";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AddGenreAdmin() {
  return (
    <div className="h-screen px-4">
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link className="text-lg font-semibold" to="/dashboard/admin/genre">
          <Button className="text-base" variant={"outline"}>
            {" "}
            <FaArrowLeft className="mr-2 text-lg" /> back
          </Button>
        </Link>
      </div>
      <AddGenreForm />
    </div>
  );
}
export default AddGenreAdmin;
