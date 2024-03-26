import EditNovelForm from "@/components/Admin/EditNovelForm.admin";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

export default function editNovelAdmin() {
  const novelId = useParams();

  return (
    <div className="px-4">
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link
          className="text-lg font-semibold"
          to={`/dashboard/admin/novel/${novelId}`}
        >
          <Button className="text-base" variant={"outline"}>
            {" "}
            <FaArrowLeft className="mr-2 text-lg" /> back to novel
          </Button>
        </Link>
      </div>
      <EditNovelForm />
    </div>
  );
}
