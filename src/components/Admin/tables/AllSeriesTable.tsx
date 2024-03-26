import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AllSeriesDetails from "@/Services/Series/getAllSeries.services";
import { seriesDetails } from "@/types";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import { AddSeriesValidator } from "@/schema/user.schema";
import { createSeriesurl } from "@/Services/Series/endPoint.series.services";
import { toast } from "sonner";

// Modify the Payment type to Series
// export type Series = {
//   id: string;
//   title: string;
//   description?: string;
//   coverImage: string; // Assuming coverImage is a string representing the image URL
//   createdAt: string; // You might want to use Date type if appropriate
//   updatedAt: string; // You might want to use Date type if appropriate
// };

// Modify the columns accordingly
export const columns: ColumnDef<seriesDetails>[] = [
  {
    accessorKey: "title",
    header: "Title",
    // You can render coverImage here if you want
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "coverImage",
    header: "Cover Image",
    cell: ({ row }) => (
      <img
        className="aspect-square h-14 w-10 rounded-sm object-cover "
        src={row.getValue("coverImage")}
      />
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "author.username",
    header: "Author",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>,
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => <div>{row.getValue("updatedAt")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const seriesId = row.id;

      return (
        <div>
          <UpdateSeries></UpdateSeries>
        </div>
      );
    },
  },
];

export function UpdateSeries() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      coverImage: null, // Add avatar field to the initial values
    },
    validationSchema: AddSeriesValidator,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        console.log("values", values);
        console.log("values", formData);
        if (values.coverImage) {
          formData.append("Single_file", values.coverImage); // Append avatar to FormData
        }
        const response = await createSeriesurl(formData);
        console.log("response", response);
        toast.success("Series Added successfully.");
        resetForm();
      } catch (error) {
        console.error(error);
        toast.error("Failed to add genre.", {
          description: "Please Try Again",
        });
      }
      setIsLoading(false);
    },
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="my-auto flex flex-col self-stretch max-md:mt-10 max-md:max-w-full"
        >
          <SheetHeader>
            <SheetTitle>Add Series</SheetTitle>
            <SheetDescription>
              Enter relevent data to create a new Series
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="max-md:flex max-md:flex-col max-md:gap-0">
              <div className="flex flex-col space-y-2">
                <div className="flex h-[300px] w-[200px] items-center justify-center rounded-md bg-gray-200">
                  {values.coverImage && (
                    <img
                      loading="lazy"
                      src={URL.createObjectURL(values.coverImage)} // Preview the selected cover image
                      alt="Cover Image"
                      className=" h-full w-full object-cover "
                    />
                  )}
                </div>
                <Label
                  className="flex w-fit flex-col gap-1.5"
                  htmlFor="cover-picture"
                >
                  <Label htmlFor="cover-picture">Cover Image</Label>
                  <Input
                    className="w-full"
                    id="coverImage"
                    name="coverImage"
                    type="file"
                    onChange={(event) => {
                      const file = event.currentTarget.files?.[0]; // Add null check before accessing files
                      if (file) {
                        setFieldValue("coverImage", file); // Set the avatar file in formik values
                      }
                    }}
                    onBlur={handleBlur}
                  />
                  <span className="text-sm font-normal leading-4 text-gray-500">
                    Image should be at least 400x600 pixels.
                  </span>
                </Label>
              </div>

              {/* <div className="ml-5 flex w-full flex-col max-md:ml-0 max-md:w-full">
                    <div className="flex w-full items-center justify-center bg-sky-500 max-md:mt-10">
                      {values.coverImage && (
                        <img
                          loading="lazy"
                          src={URL.createObjectURL(values.coverImage)} // Preview the selected cover image
                          alt="Cover Image"
                          className="aspect-w-3 aspect-h-1 w-48"
                        />
                      )}
                    </div>
                  </div> */}
            </div>
            <div className="flex flex-col space-y-1">
              <Label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="title"
              >
                Title
              </Label>
              <Input
                id="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                className="col-span-3"
              />
              {errors?.title && touched.title && (
                <div className="text-sm text-red-500">{errors.title}</div>
              )}
            </div>
            <div className="flex flex-col space-y-1">
              <Label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="description"
              >
                Description
              </Label>
              <Textarea
                name="description"
                id="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className=""
              />
              {errors?.description && touched.description && (
                <div className="text-sm text-red-500">{errors.description}</div>
              )}
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant={"outline"}>Cancel</Button>
            </SheetClose>

            <Button disabled={isLoading} type="submit">
              Add Series
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export function SeriesDetailsTable() {
  const { data, loading, error } = AllSeriesDetails();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  return (
    <div className="w-full">
      {/* Pagination */}
      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter seriess..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
