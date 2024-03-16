import EditNovelForm from "@/components/Admin/EditNovelForm.admin";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function editNovelAdmin() {
  return (
    <div className="px-4">
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link className="text-lg font-semibold" to={".."}>
          <Button className="text-base" variant={"outline"}>
            {" "}
            <FaArrowLeft className="mr-2 text-lg" /> back to novels
          </Button>
        </Link>
        <Link
          className="text-lg font-semibold"
          to="/dashboard/admin/edit/novel/:id"
        >
          <Button className="text-base">Edit</Button>
        </Link>
      </div>
      <EditNovelForm />
    </div>
  );
}
export default editNovelAdmin;
