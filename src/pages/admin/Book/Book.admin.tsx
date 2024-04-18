import AllSeriesDetails from "@/Services/Series/getAllSeries.services";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";

// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Input } from "@/components/ui/input";
import { AddSeriesValidator } from "@/schema/user.schema";
import { useFormik } from "formik";
import { createSeriesurl } from "@/Services/Series/endPoint.series.services";
import { useState } from "react";
import { BookDetailsTable } from "@/components/Admin/tables/AllBookTable";
import { Link } from "react-router-dom";

function BookAdmin() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-4xl underline underline-offset-8">Books</h1>
      <div className="flex">
        <Link to="add">
          <Button>Add Book</Button>
        </Link>
      </div>

      <div className="w-full">
        <BookDetailsTable />
      </div>
    </div>
  );
}
export default BookAdmin;
