import RequestCard from "@/components/Admin/Request/Card.request";
import AllRequests from "@/Services/Request/GetAllRequest.services";
import Loading from "../Loading";

import { useState } from "react";
import { Button } from "@/components/ui/button";

function Request() {
  const { data, loading, error } = AllRequests();
  const [filterStatus, setFilterStatus] = useState("all"); // "all", "pending", "accepted", "rejected"
  if (data) {
    console.log(data, "wowowo");
  }
  if (loading) return <Loading />;

  if (error) return <h1>error:{error}</h1>;

  const handleFilterChange = (status: string) => {
    setFilterStatus(status);
  };

  return (
    <div className="flex flex-col gap-y-5 bg-background">
      <h1 className="mb-5 text-4xl font-medium underline underline-offset-8">
        Author Requests
      </h1>
      <div>
        <Button
          onClick={() => handleFilterChange("all")}
          className={`mr-2 px-4 py-2 hover:bg-primary ${
            filterStatus === "all" ? "bg-primary text-white" : "bg-black"
          }`}
        >
          All
        </Button>
        <Button
          onClick={() => handleFilterChange("PENDING")}
          className={`mr-2 px-4 py-2 hover:bg-primary ${
            filterStatus === "PENDING" ? "bg-primary text-white" : "bg-black"
          }`}
        >
          Pending
        </Button>
        <Button
          onClick={() => handleFilterChange("ACCEPTED")}
          className={`mr-2 px-4 py-2 hover:bg-primary ${
            filterStatus === "ACCEPTED" ? "bg-primary text-white" : "bg-black"
          }`}
        >
          Accepted
        </Button>
        <Button
          onClick={() => handleFilterChange("REJECTED")}
          className={`mr-2 px-4 py-2 hover:bg-primary ${
            filterStatus === "REJECTED" ? "bg-primary text-white" : "bg-black"
          }`}
        >
          Rejected
        </Button>
      </div>
      <div className="grid w-full grid-cols-3 gap-5">
        {Array.isArray(data) &&
          data
            .filter((item) => {
              if (filterStatus === "all") return true;
              if (filterStatus === "PENDING") return item.status === "PENDING";
              if (filterStatus === "ACCEPTED")
                return item.status === "ACCEPTED";
              if (filterStatus === "REJECTED")
                return item.status === "REJECTED";
            })
            .map((item) => <RequestCard {...item} />)}
      </div>
    </div>
  );
}
export default Request;
