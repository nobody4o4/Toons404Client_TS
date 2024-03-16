import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function EditNovelForm() {
  return (
    <>
      <div className="my-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <img
            alt="Novel Cover"
            className="rounded-lg"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          <Input className="mt-4" type="file" />
        </div>
        <div className="col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">One pieces</h1>
            <Button>Edit</Button>
          </div>
          <Input className="mb-2" defaultValue="Action, fantasy" />
          <Input className="mb-2" defaultValue="Created at : Feb-25, 2024" />
          <Input className="mb-2" defaultValue="Updated at : Feb-25, 2024" />
          <Input className="mb-4" defaultValue="Likes : 0" />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="mb-2 text-xl font-semibold">Description</h2>
        <Textarea defaultValue="hehe" />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Button variant="secondary">The Final Empire</Button>
        <Button>Read</Button>
      </div>
    </>
  );
}
export default EditNovelForm;
