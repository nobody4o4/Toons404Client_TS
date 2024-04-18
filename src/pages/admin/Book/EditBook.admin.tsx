import EditBookForm from "@/components/Admin/Book/EditBookForm.admin";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

export default function EditBookAdmin() {
  const { id } = useParams();

  return (
    <div className="px-4">
      <div className="flex  items-center justify-between space-x-4 pb-8">
        <Link
          className="text-lg font-semibold"
          to={`/dashboard/admin/book/${id}`}
        >
          <Button className="text-base" variant={"outline"}>
            {" "}
            <FaArrowLeft className="mr-2 text-lg" /> back to book
          </Button>
        </Link>
      </div>
      <EditBookForm />
    </div>
  );
}
