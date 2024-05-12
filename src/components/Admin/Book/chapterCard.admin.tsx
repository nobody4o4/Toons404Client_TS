import { format } from "date-fns";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

function ChapterCardAdmin({
  id,
  title,
  coverImage,
  createdAt,
  number,
}: {
  id: string;
  title: string;
  coverImage: string;
  createdAt: string;
  number: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-md border p-4">
      <div className="flex items-center space-x-4">
        <img
          alt={title}
          className="h-15 w-15 rounded-md object-cover"
          height="60"
          src={coverImage}
          style={{
            aspectRatio: "60/60",
            objectFit: "cover",
          }}
          width="60"
        />
        <div>
          <h3 className="text-lg font-semibold">
            {title} <span>#{number}</span>{" "}
          </h3>
          <p className="text-sm text-gray-500">
            {format(createdAt, "EEE  dd MMM yyyy")}
          </p>
        </div>
      </div>
      {}

      <Link to={`edit-chapter/${id}`}>
        <Button variant="outline">Edit</Button>
      </Link>
    </div>
  );
}
export default ChapterCardAdmin;
