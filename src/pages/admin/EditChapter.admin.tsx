import EditChapterForm from "@/components/Admin/EditChapterForm.admin";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

function EditChapterAdmin() {
  const params = useParams();
  const novelId = params.id;
  return (
    <div className="h-screen px-4">
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link
          className="text-lg font-semibold"
          to={`/dashboard/admin/novel/${novelId}`}
        >
          <Button className="text-base" variant={"outline"}>
            {" "}
            <FaArrowLeft className="mr-2 text-lg" /> back
          </Button>
        </Link>
      </div>
      <EditChapterForm />
    </div>
  );
}
export default EditChapterAdmin;
