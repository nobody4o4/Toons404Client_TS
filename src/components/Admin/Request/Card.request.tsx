import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  acceptRequestUrl,
  rejectRequestUrl,
} from "@/Services/Request/endpoints.request.services";
import { RequestCardType } from "@/types";
import { toast } from "sonner";

function RequestCard(request: RequestCardType) {
  console.log(request.id, "request");

  const handleAccept = async () => {
    try {
      await acceptRequestUrl(request.id);
      toast.success("Request Accepted Successfully");
    } catch {
      toast.error("Request Failed");
      console.log("Error");
    }
  };

  const handleReject = async () => {
    try {
      await rejectRequestUrl(request.id);
      toast.success("Request Accepted Successfully");
    } catch {
      toast.error("Request Failed");
      console.log("Error");
    }
  };

  return (
    <Card className="flex rounded-none bg-white p-5 pr-0 transition hover:shadow-xl">
      {/* <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
          <span>2022</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>Oct 10</span>
        </time>
      </div> */}

      <div className=" w-36  sm:block">
        <img
          alt=""
          src={request.user.avatar}
          //   src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="ml-5 flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 sm:border-l-transparent sm:pl-3">
          <p className="text-xl font-medium text-gray-900">
            {request.user.username}
            {/* Samir Gautam */}
          </p>
          <p>Email: {request.user.email}</p>
          <p>
            Requested At:{" "}
            {new Date(request.createdAt).toLocaleDateString("en", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
          </p>
          {request.status === "ACCEPTED" ? (
            <p>
              Accepted At:{" "}
              {new Date(request.updatedAt).toLocaleDateString("en", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}{" "}
            </p>
          ) : request.status === "REJECTED" ? (
            <p>
              Rejected At:{" "}
              {new Date(request.updatedAt).toLocaleDateString("en", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}{" "}
            </p>
          ) : null}
        </div>

        <div className="grid w-fit">
          {request.status === "PENDING" ? (
            <div className="  flex gap-3 p-2">
              <Button
                onClick={handleReject}
                variant={"secondary"}
                className="block  px-5 py-3 text-center text-xs font-bold uppercase text-text transition hover:bg-red-500"
              >
                Reject
              </Button>

              <Button
                onClick={handleAccept}
                variant={"ghost"}
                className="block bg-primary px-5 py-3 text-center text-xs font-bold uppercase text-text transition hover:bg-sky-500 hover:backdrop:blur-xl "
              >
                Accept
              </Button>
            </div>
          ) : request.status === "ACCEPTED" ? (
            <div>
              <Button
                disabled={true}
                variant={"outline"}
                className="block bg-green-400 px-5 py-3 text-center text-xs font-bold uppercase text-text transition hover:bg-green-500 hover:backdrop:blur-xl "
              >
                Accepted
              </Button>
            </div>
          ) : (
            <div>
              <Button
                disabled={true}
                variant={"outline"}
                className="block bg-red-500 px-5 py-3 text-center text-xs font-bold uppercase text-text transition hover:bg-red-600 hover:backdrop:blur-xl "
              >
                Rejected
              </Button>
            </div>
          )}
          {/* <div className="right-0 col-span-3 col-start-3 flex gap-3 p-2">
            <Button
              variant={"secondary"}
              className="block  px-5 py-3 text-center text-xs font-bold uppercase text-text transition hover:bg-red-500"
            >
              Reject
            </Button>

            <Button
              variant={"ghost"}
              className="block bg-primary px-5 py-3 text-center text-xs font-bold uppercase text-text transition hover:bg-sky-500 hover:backdrop:blur-xl "
            >
              Accept
            </Button>
          </div>
          <div>
            <Button
              variant={"outline"}
              className="block bg-green-400 px-5 py-3 text-center text-xs font-bold uppercase text-text transition hover:bg-green-500 hover:backdrop:blur-xl "
            >
              Accepted
            </Button>
          </div>
          <div>
            <Button
              variant={"outline"}
              className="block bg-red-500 px-5 py-3 text-center text-xs font-bold uppercase text-text transition hover:bg-red-600 hover:backdrop:blur-xl "
            >
              Rejected
            </Button>
          </div> */}
        </div>
      </div>
    </Card>
  );
}
export default RequestCard;
